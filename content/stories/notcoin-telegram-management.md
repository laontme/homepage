---
title: Manage product operations through Telegram
slug: notcoin-telegram-management
summary: Bot commands for changing challenge bonus state and inspecting community administrators around the Notcoin backend.
timeline_date: 2024-01-15
timeline_summary: Telegram commands connect operational actions to the product backend.
timeline_detail: Bot command → backend action → operator response
topics: [telegram, integrations, backend-architecture]
stack: [TypeScript, NestJS, Telegraf, Prisma, MySQL]
related_work: [open-builders]
related_projects: [notcoin-clicker]
---

Telegram was both the entry point to the game and a place to operate parts of its backend. I added internal bot commands for managing challenge bonuses and inspecting community chat administrators.

The commands gave operators defined actions and lookups against product records and Telegram data.

## Change a challenge bonus from the bot

The bonus command accepted a challenge identifier and an active or inactive state. It passed the request into the backend bonus service, which looked up the matching boost records and applied the change.

I added responses for a missing bonus and for an ambiguous result with multiple matches. The operator could see whether the requested challenge had been found and what state had been set.

```text
Management command
  → parse challenge and requested state
  → resolve the matching bonus
  → update backend state
  → report the result in chat
```

That connected a short Telegram interaction to a specific management action inside the Mini App’s backend.

## Inspect the community side from the same channel

I also added a command that fetched a chat’s administrators through Telegram and returned a formatted list. The implementation checked the caller’s stored superadmin role before performing that lookup.

This served a different management need: inspecting the Telegram community around a product integration, rather than changing the product’s own database.

## An operations interface alongside the Mini App

Together, the commands show another role for a Telegram bot: a focused interface for the people managing the product. An operator could request a defined action or lookup and receive its result in the same conversation.

I implemented these contributions within the team’s existing bot and backend. The scope was those operational commands, alongside my other integration and distribution work.
