---
timeline_summary: "A TON launchpad connecting investors and private rounds."
timeline_detail: "Eligibility, wallet payments, vesting"
title: TONstarter launchpad
work-topics: [integrations, payments, reliability]
status: Product development · 2023
summary: A TON launchpad with private-round eligibility, allocations, wallet payments, KYC states, vesting data, and investor communications.
weight: 5
timeline_date: 2023-06-01
stack:
  - TypeScript
  - NestJS
  - React
  - Prisma
  - TON
related_work:
  - open-builders
related_case_studies:
  - private-round-investment-flow
---

I worked across the frontend and backend of TONstarter’s private-investment flow. The work included eligibility flags, allocation data, wallet/payment states, KYC-pending UI, vesting details, schema changes, and the notification paths around investor acceptance.

The useful engineering lesson was coordinating a regulated-looking, stateful flow across product UI, database records, wallet interactions, and communication—not treating it as a single payment button.
