---
title: Turn a Telegram subscription into task progress
slug: community-telegram-subscription-tasks
summary: Connecting live channel-membership checks to the community platform’s own task completion records.
timeline_date: 2023-07-26
timeline_summary: Telegram membership checks feed local task completion.
timeline_detail: Channel membership → task rule → recorded progress
topics: [telegram, integrations, backend-architecture]
stack: [TypeScript, NestJS, Telegraf, Prisma]
related_work: [open-builders]
related_projects: [community-engagement]
---

A community campaign could ask a person to join a Telegram channel. The product still needed to decide whether that action satisfied a task and record the resulting progress in its own backend.

I implemented the connection between Telegram membership checks and local task completion.

## Check the action where it happens

The Telegram service queried chat membership for the user. It returned a result alongside Telegram’s status and any API error, keeping the provider response available to the integration.

The task path selected subscription tasks the user had not already completed, read their configured channel IDs, and ran the membership checks. When a task’s condition was satisfied, it called the platform’s task service to record completion.

```text
Configured subscription task
  → query Telegram membership
  → apply the task’s channel rule
  → record completion through the task service
```

The bot integration supplied evidence about an external action. The task service remained responsible for the product’s progress record.

## Allow alternative channels in one task

A subscription task could contain several channel IDs, including alternatives for different languages. The implementation accepted a successful check against any of those configured channels.

That let the task describe an any-of condition without requiring a separate completion flow for each channel.

## Fit Telegram into the existing product model

The useful part was the connection between a Telegram action and the platform’s task state. The same product could describe a campaign requirement, check it through the relevant integration, and persist progress through its own service.

I built this in the earlier community engagement product. It was a point-in-time check; later GVWS work had its own verification and closing-time recheck paths.
