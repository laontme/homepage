---
timeline_summary: "A TON launchpad connecting investors and private rounds."
timeline_detail: "Eligibility, wallet payments, vesting"
title: Tonstarter TON launchpad
slug: tonstarter-launchpad
topics: [telegram, integrations, payments, reliability]
status: Product development · 2023
summary: A TON launchpad with private-round eligibility, allocations, wallet payments, KYC states, vesting data, and Telegram investor communications.
weight: 5
timeline_date: 2023-06-01
stack:
  - TypeScript
  - NestJS
  - React
  - Prisma
  - TON
  - Telegram
related_work:
  - open-builders
related_case_studies:
  - tonstarter-telegram-investor-messages
  - private-round-investment-flow
---

Tonstarter’s launchpad connected investors to private investment rounds on TON. The product needed to explain what each investor could do as eligibility, allocation, KYC, wallet payment, and vesting state changed.

I worked across the NestJS backend and React frontend: eligibility flags and schema changes, allocation and vesting data, payment and KYC-pending states, and the interface that presented them.

I also contributed to investor communications through Telegram. The work included localized invitation messages with a direct route to the investor form, and extending the queued notification processor to support photos as well as text.

Together, these contributions connected the product’s rules and records to the next step shown to an investor, both inside the web interface and in its communications.
