---
timeline_summary: "Telegram bot and Mini App campaigns, verification, and rewards."
title: GVWS giveaway platform
slug: gvws
evidence: "848k task completions · 116 campaigns"
topics: [telegram, integrations, backend-architecture, reliability]
status: Archived · 2025
summary: A campaign system connecting external actions to task progress, referral attribution, rewards, and prize distribution, through a Telegram bot and Mini App.
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
  - account-and-campaign-referrals
  - telegram-campaign-routing
  - configurable-task-verification
  - final-eligibility-check
  - payment-reconciliation
---

GVWS was a platform for partner campaigns. Participants completed actions in connected applications, channels, and wallets to earn entries or rewards. Campaign organisers needed to configure those requirements, track participation, and distribute prizes.

I co-founded the project and owned the backend, integrations, verification model, deployment, and most operational work. A frontend developer owned the UI.

The backend connected external checks to local task progress and reward rules. Campaigns then moved through closing-time eligibility checks, winner selection, and prize distribution. Invoice reconciliation connected incoming payments to campaign payment state.

Telegram bots and a Mini App were the product’s entry points. Generated campaign codes and predefined start payloads routed visitors to the appropriate invitation or app flow. Referral records preserved both the original account inviter and the potentially different inviter for each campaign. The bot also handled Telegram Stars checkout and successful-payment updates for campaign invoices.

The product was archived in 2025. Its internal records contain 119,149 registered profiles, 108,899 unique campaign participants, 848,436 recorded task completions, 116 launched campaigns, and 43 recorded distributions.
