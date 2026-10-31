---
title: Keep account and campaign referrals separate
slug: account-and-campaign-referrals
summary: Preserving who brought a person into GVWS while letting each campaign record a different inviter.
timeline_date: 2025-04-14
timeline_summary: One account referrer, independent attribution for each campaign.
timeline_detail: Account acquisition · campaign participation
topics: [telegram, backend-architecture, integrations]
stack: [Go, MySQL, Telegram Mini Apps]
related_work: [ton-expert-club]
related_projects: [gvws]
related_case_studies: [telegram-campaign-routing]
---

The person who brings someone into a product is not necessarily the person who brings them into every campaign inside it.

GVWS needed to preserve both relationships. I kept referral attribution on two records: the account profile and each campaign participation.

## Two questions, two places to store the answer

Suppose Alice invites someone to GVWS through campaign A. When the person creates an account, Alice becomes the account’s referrer. Joining campaign A through that link also records Alice on that campaign participation.

Later, Bob invites the same person to campaign B. The existing account still belongs to Alice’s acquisition history, while campaign B records Bob as the inviter.

```text
One profile
  account referrer: Alice

  campaign A participation → referrer: Alice
  campaign B participation → referrer: Bob
```

Changing the account’s referrer on the second visit would erase Alice’s contribution. Reusing the account’s referrer for every campaign would erase Bob’s. Separate records let both remain true.

## Capture attribution at the relevant boundary

The bot and Mini App login paths resolved the incoming link code when creating a profile. The profile stored the link and its optional referrer. Returning users reused their existing profile.

Joining a campaign was a separate operation. That request resolved its own incoming code and stored the link and referrer on the new participation record. It did not have to inherit the profile’s original referrer.

A repeated join to the same campaign was rejected, so opening another invitation did not replace the existing participation’s attribution. The account relationship was sticky at account creation; the campaign relationship was sticky at joining that campaign.

## Preserve the meaning of a referral

This gave the product separate answers to “who introduced this account?” and “who brought this participant to this campaign?” Campaign referral counts could use participation records while account acquisition counts used profiles.

I owned the backend model and the bot, login, and participation paths around it. Storing attribution at each boundary preserved the meaning of the original account invitation and each later campaign invitation.
