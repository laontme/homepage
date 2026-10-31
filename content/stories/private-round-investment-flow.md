---
timeline_summary: "Coordinating investor state across a private round."
timeline_detail: "KYC, allocations, payments, notifications"
title: Private-round investment flow
summary: Connecting investor eligibility, allocations, KYC, wallet payment, vesting data, and communications into one understandable product path.
status: Product integration · TypeScript / TON
weight: 2
topics: [integrations, payments, reliability]
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

A private-round investment flow needed to explain an investor’s next step using several pieces of state: eligibility, allocation, KYC, wallet payment, and vesting terms.

At Tonstarter, I worked across the NestJS backend and React frontend to connect those records to the interface and investor communications.

## Make the available action reflect the investor’s record

Eligibility determined access to the private round, while allocation data and round limits described the investment available to that person. I added and used private-investor eligibility data and connected allocation information to the interface.

I also surfaced vesting data and private-round limits, and updated schema support for non-integer values where the domain required it. These details were part of the investment terms the application needed to represent.

## Explain intermediate states

KYC and wallet payment introduced states between starting and completing the flow. I added KYC-pending and paid states and worked on wallet payment behavior across desktop and mobile.

The interface needed to distinguish those situations so that the next action reflected the investor’s current record. Payment, allocation, and eligibility could not be treated as unrelated UI features.

## Carry the flow into communication

My contributions also included notification changes around investor acceptance. The same journey continued outside the application through messages explaining what came next.

This was frontend and backend work within the launchpad team. My role was connecting the relevant data, interface states, wallet interactions, and communications across that product path.
