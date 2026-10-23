---
timeline_summary: "Coordinating investor state across a private round."
timeline_detail: "KYC, allocations, payments, notifications"
title: Private-round investment flow
summary: Connecting investor eligibility, allocations, KYC, wallet payment, vesting data, and communications into one understandable product path.
status: Product integration · TypeScript / TON
weight: 2
work-topics: [integrations, payments, reliability]
timeline_date: 2023-06-15
stack:
  - TypeScript
  - NestJS
  - React
  - Prisma
  - TON
related_work:
  - open-builders
related_projects:
  - tonstarter-launchpad
---

## Context

For a launchpad private round, an investor needs more than a payment screen. Eligibility, allocation, wallet state, KYC status, vesting terms, and acceptance communications all affect whether the product can correctly explain what happens next.

## What I changed

I worked across the frontend and backend of this flow:

- added and used private-investor eligibility data;
- connected allocation data to the interface;
- handled wallet payment states and desktop/mobile wallet behaviour;
- added KYC-pending and paid states;
- surfaced vesting data and private-round limits;
- updated schema support for non-integer values where the domain required it;
- implemented investor-notification changes around acceptance.

## Why it matters

The work was a state-coordination problem. The UI could not safely present payment or allocation as independent facts: it needed to render the investor’s current record and make the next permitted action obvious.

## My role

I implemented changes across the NestJS backend and React frontend during the private-round work. The source history shows the individual contributions; I am not claiming sole ownership of the launchpad or its design.
