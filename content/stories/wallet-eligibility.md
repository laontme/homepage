---
title: An eligibility error is not a rejection
summary: Preserving the difference between an ineligible wallet and an upstream check that could not produce an answer.
date: 2024-05-10
timeline_date: 2024-05-10
timeline_summary: Keep provider failures distinct from genuine wallet rejection.
timeline_detail: Wallet integrations · eligibility
topics: [integrations, reliability]
related_work: [open-builders]
related_projects: [notcoin-clicker]
---

The wallet eligibility check returned a boolean. That made two different situations look identical: the provider had rejected the wallet, or the provider had failed to answer the question.

Both could become `false` in the local integration.

In a claim flow, that is a business decision being made from a technical failure. A failed request is not evidence that the person is ineligible.

## Preserve the third outcome

I changed the check to return three possible results:

- `true` when the provider explicitly reported eligibility;
- `false` when it explicitly reported ineligibility;
- `null` when the request failed or the response did not contain a usable answer.

I updated the calling claim code alongside the integration. The provider boundary no longer collapsed “no” and “could not determine” into the same result.

This was a small change, but the distinction mattered more than the amount of code. The integration needed to preserve what the provider actually knew, not produce a yes-or-no answer at any cost.
