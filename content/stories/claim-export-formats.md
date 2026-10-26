---
title: One claim flow, different destination formats
summary: Adapting token-claim records to the identifiers and export formats expected by different destinations.
date: 2024-05-14
timeline_date: 2024-05-14
timeline_summary: Adapt one claim flow to different exchange export formats.
timeline_detail: Claim processing · exchange integrations
topics: [integrations, payments]
related_work: [open-builders]
related_projects: [notcoin-clicker]
---

A token claim was not ready to send just because it contained an amount and an address.

The destination mattered. Some paths identified the recipient through an external account ID. Others needed a destination address and a memo. The operational files also had different column layouts.

I worked on the claim/export path during Notcoin’s distribution work, adapting those product records to the format each destination expected.

## Put destination-specific rules at the export boundary

I separated the Binance formatter from the Wallet/OKX format and implemented the Bybit export layout. That layout included the query identifier, TON amount, token amount, destination address and comment.

Related changes worked on address validation and claims that needed both an address and an external identifier or memo. These details belonged in the integration path rather than being left for someone to repair manually after an export.

The work was narrower than the whole distribution system: turn the recorded claim into the correct destination-specific representation, without pretending every destination accepted the same thing.
