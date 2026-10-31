---
timeline_summary: "Typed checks instead of campaign-specific verification logic."
timeline_detail: "External state → verified completion"
title: Configurable task verification
summary: Turning task completion into explicit, type-specific checks instead of hard-coding campaign logic into every reward flow.
status: Backend architecture · Go / TON / Telegram
weight: 1
topics: [telegram, integrations, backend-architecture, reliability]
timeline_date: 2024-06-01
stack:
  - Go
  - MySQL
  - Telegram
  - TON APIs
related_work:
  - ton-expert-club
related_projects:
  - gvws
---

## Context

GVWS organisers configured campaigns around actions in external services. A participant might join a Telegram channel, complete a partner-app action, invite someone, or meet a wallet-based requirement. Each needed to become a local completion record that could drive points, eligibility, and prizes.

## Problem

Treating every action as a bespoke campaign feature makes the system brittle. A new task type then leaks its integration rules into reward logic, UI assumptions, and one-off operational scripts.

The backend needed a consistent boundary: task configuration describes what should be checked; a type-specific checker fetches live state; the completion service decides what to persist.

## What I built

I built and extended a Go task service around that boundary. It dispatches checks by task type and keeps external-specific logic in the relevant checker. Examples from the code include:

- wallet and account checks through TON APIs;
- NFT and jetton holdings with configurable counts and metadata constraints;
- jetton-burn verification by inspecting transaction messages;
- Telegram account and subscription checks;
- referral and externally connected-app task types;
- level, quota, and cooldown rules before creating completion records.

The completion path calculates what a user is newly entitled to, rather than assuming one successful check always means one static reward. That matters for multi-complete and levelled tasks.

## Why this shape

```text
task configuration
  → type-specific external check
  → completion rules (levels / quotas / cooldowns)
  → persisted completion records
```

New checks could fit the same completion path while keeping provider-specific behavior in the relevant integration.

## Limits

An external check reflects the provider response and the rules for that task type at the time it runs. Conditions can change later, which is why campaign closing had a separate eligibility recheck.

## My role

I owned the backend and integration model, including the task service, checker implementations, completion rules, and the operational work around the product.
