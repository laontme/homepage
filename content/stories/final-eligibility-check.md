---
title: Rechecking eligibility before choosing winners
summary: Adding a closing-time check for campaign conditions that could change after a participant first completed a task.
date: 2025-01-19
timeline_date: 2025-01-19
timeline_summary: Recheck changing conditions before selecting giveaway winners.
timeline_detail: Campaign automation · eligibility
topics: [integrations, reliability, backend-architecture]
related_work: [ton-expert-club]
related_projects: [gvws]
---

A completion record says that a check passed at a particular time. It does not necessarily say the condition is still true when a giveaway ends.

That matters for tasks based on external state. The backend can record a successful action, then reach winner selection with an answer that is no longer current.

In GVWS, I built a closing-time recheck for the task types that needed it.

## Separate completion from final eligibility

The recheck job operated on locked campaigns. It loaded their relevant completion records, ran the task checks again, and removed records whose condition no longer passed.

After that pass, the campaign was marked as rechecked. Winner selection required that marker before proceeding. The prize-sending path also checked that the recheck had completed.

This gave campaign closing an explicit order: stop accepting new participation, revisit the conditions that could change, then select winners from the remaining records.

## A check at a defined point, not a permanent guarantee

The extra pass did not make external state stop changing. It made the point at which the backend refreshed its answer explicit, instead of treating every earlier completion as permanent.

That is the useful boundary here: task completion during a campaign and eligibility at its close are related, but they are not interchangeable.
