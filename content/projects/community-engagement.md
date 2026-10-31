---
timeline_summary: "Campaign tasks connected to user progress and rewards."
timeline_detail: "External actions, rules, completion state"
title: Community engagement platform
slug: community-task-engagement
topics: [telegram, integrations, backend-architecture]
status: Product work · 2023–2024
summary: Task and campaign mechanics for community products, connecting external actions to local progress and reward state.
weight: 4
timeline_date: 2023-10-01
stack:
  - TypeScript
  - NestJS
  - MySQL
  - REST APIs
  - Telegram
related_work:
  - open-builders
related_case_studies:
  - community-telegram-subscription-tasks
---

The community engagement product represented campaign requirements as tasks. A user’s action in an external service needed to become a completion record that the product could use for progress and rewards.

I worked on the task and integration mechanics: campaign-specific rules, external checks, and the connection between those checks and user progress.

My Telegram contributions included subscription-task verification. I queried channel membership, supported alternative channel IDs within one task, and passed successful checks to the local task service. This let a campaign express a requirement such as membership in any one of its configured language channels.
