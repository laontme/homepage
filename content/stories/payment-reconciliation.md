---
title: Connecting a transfer to the invoice it pays
summary: Reconciling incoming blockchain transactions with unpaid product invoices and campaign payment state.
date: 2025-01-09
timeline_date: 2025-01-09
timeline_summary: Match incoming transfers to invoices and campaign payment state.
timeline_detail: Payment indexing · reconciliation
topics: [payments, integrations, backend-architecture]
related_work: [ton-expert-club]
related_projects: [gvws]
---

An incoming transfer was not enough to mark a GVWS campaign as paid. The backend needed to identify the invoice it belonged to and decide whether it covered the requested amount.

I built a reconciliation path between incoming blockchain activity and the product’s invoice records.

## Match the transfer to product state

The indexing job read incoming transactions from the payment wallet and extracted the supported transfer data, including the payment payload used to identify the invoice.

It looked up matching invoices, skipped ones already marked paid, and compared the received value with the invoice amount. Qualifying matches updated the invoice and, where applicable, the campaign’s payment state.

This kept “a transaction was received” separate from “this invoice has been paid.” The second statement required a match against a product record, not just a notification from the network.

## Keep a position between runs

The job also stored a logical-time cursor in Redis. Later runs used recorded progress when reading the wallet’s transaction history rather than treating every run as a new scan from scratch.

The interesting work was the translation between two systems: transfers described activity on a wallet, while the application needed an answer about a particular invoice and campaign.
