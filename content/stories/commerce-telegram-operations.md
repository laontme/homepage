---
title: Bring checkout details into Telegram operations
slug: commerce-telegram-operations
summary: Turning store order and payment events into Telegram messages with the details needed for fulfilment.
timeline_date: 2026-03-19
timeline_summary: Order, payment, and delivery details reach the team through Telegram.
timeline_detail: Order notifications · maintenance in March 2026
topics: [telegram, commerce, integrations]
stack: [Laravel, PHP, Telegram Bot API, CDEK]
related_work: [viceseason]
related_projects: [viceseason-store]
related_case_studies: [commerce-checkout-and-fulfilment]
---

A completed web checkout leaves work for the people running a store. They need to know what was bought, which size to prepare, how it was paid for, and where it should go.

For Viceseason, I connected the order and payment paths to Telegram bot messages carrying that operational context. I maintained this integration as the store evolved; the timeline date marks work on the existing path in March 2026.

## Assemble the information around the order

The notification path loaded the order’s products, selected sizes, purchase prices, discounts, shipping details, and currency. The message template organized those fields into a readable order summary.

Payment information travelled with the order. For carrier-based fulfilment, the path also connected to CDEK order creation and included the carrier reference when available. Courier, pickup-point, and postal deliveries had different details to present.

```text
Order / payment event
  → load purchased items and delivery details
  → enrich with carrier information where applicable
  → render order summary
  → send through the Telegram Bot API
```

The message linked the financial and physical sides of a purchase: the items the customer had paid for and the information needed to prepare delivery.

## Use Telegram as part of the workflow

This was a web store with a Telegram operations integration. The bot brought checkout events into the team’s communication channel, with order identifiers and fulfilment details that made each notification useful beyond “a purchase happened.”

I worked on the Laravel integration, payment and carrier connections, message assembly, and the operational maintenance around that path. Customer fields were escaped for the message format, and notification failures had logging for investigation.

The integration did not make Telegram the system of record. Orders, payment state, and delivery data remained in the store backend; the messages carried a working view of those records to the people handling them.
