---
title: Connect investor invitations to Telegram delivery
slug: tonstarter-telegram-investor-messages
summary: Combining localized investor invitations, clear next-step buttons, and queued text or photo messages.
timeline_date: 2023-05-28
timeline_summary: Investor invitations connect message content, language, action, and delivery.
timeline_detail: Audience → localized invitation → next-step button
topics: [telegram, integrations]
stack: [TypeScript, NestJS, Telegraf, Bull]
related_work: [open-builders]
related_projects: [tonstarter-launchpad]
related_case_studies: [private-round-investment-flow]
---

An investment flow needs communication around the web interface. A person has to learn that an opportunity is available and understand what to do next.

At Tonstarter, I worked on Telegram investor invitations and the notification path used to send them. The work connected message content, language, a direct next step, and the backend delivery mechanism.

## Give the invitation an action

The private-round invitation combined an image, a short explanation, and an inline button leading to the investor form. English and Russian variants selected the corresponding caption, button text, and image.

The notification code used the recipient’s Telegram account and locale to prepare the message, falling back to English when needed. Content was represented by message providers, separate from the sending code.

For this flow, the next action was concrete: open the form from the invitation itself.

## Carry rich messages through the notification path

The existing queue processor sent text messages. I extended it to dispatch text or photo messages based on the message type, carrying the associated caption and options.

I also changed the custom invitation sender to pass its message through the notification path rather than keeping a separate direct photo-send loop.

```text
Recipient and locale
  → invitation provider
  → image + caption + form button
  → notification queue
  → Telegram sender for the message type
```

The changes brought rich invitations and ordinary text messages into a shared delivery structure. Delivery still depended on Telegram responses and whether the bot could reach a recipient; the processor logged send failures.

## Connect communication to the product journey

My contribution covered the invitation messages and notification integration within the team’s launchpad. The broader value is a reusable pattern for product communications: select the relevant recipient, explain the next step in their language, and provide a direct route back into the product.
