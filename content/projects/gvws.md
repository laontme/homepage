---
timeline_summary: "Task verification and rewards across partner campaigns."
title: GVWS
evidence: "848k task completions · 116 campaigns"
topics: [integrations, backend-architecture, reliability]
status: Archived · 2025
summary: A task, reward, and giveaway platform with configurable verification, partner integrations, and automated token distributions.
weight: 1
timeline_date: 2024-04-01
stack:
  - Go
  - MySQL
  - REST APIs
  - Telegram
  - TON
related_work:
  - ton-expert-club
related_case_studies:
  - configurable-task-verification
---

GVWS was a product for partner campaigns: users completed actions in connected applications and received entries or rewards. The backend had to model many task types, verify external state, track progress, and deliver prizes without making the product team hand-build every partner flow.

I co-founded the project and owned the backend, integrations, verification model, deployment, and most operational work. A frontend developer owned the UI.

The product was archived in 2025. The useful part to preserve is the engineering: configurable verification, explicit state transitions, external integrations, and the work needed to operate a real product backend in a small team.

From the product’s internal records: 119,149 registered profiles, 108,899 unique campaign participants, 848,436 recorded task completions, 116 launched campaigns, and 43 recorded distributions.
