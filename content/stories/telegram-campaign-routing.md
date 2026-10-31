---
title: Route Telegram links into the right campaign
slug: telegram-campaign-routing
aliases: [/work/stories/telegram-bot-mini-app-attribution/]
summary: Using generated link codes and predefined start payloads to open the right bot message, campaign, or Mini App flow.
timeline_date: 2025-04-14
timeline_summary: A short code connects a bot invitation to the right Mini App campaign.
timeline_detail: Start code → campaign message → Mini App
topics: [telegram, integrations, backend-architecture]
stack: [Go, MySQL, Telegram Bot API, Telegram Mini Apps]
related_work: [ton-expert-club]
related_projects: [gvws]
related_case_studies: [account-and-campaign-referrals]
---

A GVWS invitation could arrive in a Telegram conversation or open the Mini App directly. Either way, it needed to take the visitor to the right campaign. A generic welcome screen would lose the context of the invitation.

I built a routing mechanism around short codes. Generated codes pointed to backend link records; predefined payloads handled specific entry points such as an event promotion.

## Resolve a code into a destination

A campaign link record contained a code, a type, and a target campaign. The bot link used `https://t.me/<bot>?start=xxx`. Telegram delivered `xxx` as the `/start` command payload, and the backend resolved it to that record.

For a campaign destination, the bot assembled an invitation from the campaign data: its title, image, prizes, number of winners, closing time, and a join button. The message described the actual giveaway behind the link.

That button opened `https://t.me/<bot>/app?startapp=xxx`. The incoming code survived the move from conversation to Mini App. Someone could also share the Mini App link directly.

```text
?start=xxx
  → resolve link type and campaign
  → generate campaign invitation
  → /app?startapp=xxx
  → Mini App requests carry ?code=xxx
```

The frontend passed the start parameter into backend requests, including login and joining a campaign. I owned the bot and backend paths; a frontend developer owned the interface.

## Predefined entry points fit alongside generated links

Not every destination needed a generated database code. An event-specific start payload selected a predefined welcome message and a button into a promotional Mini App entry point.

This kept the mechanism small: look up a generated code when the destination was campaign data, or handle a known payload when it represented a specific product entry point.

## Keep the invitation useful

The campaign message also included a personal link for the visitor to invite friends. The join button preserved the incoming code, while the outgoing invitation used a campaign link belonging to the current profile.

Routing and attribution used the same link records but answered different questions: where should this visitor go, and who invited them? The separate [referral story](/work/stories/account-and-campaign-referrals/) explains how attribution stayed attached to accounts and individual campaign participations.
