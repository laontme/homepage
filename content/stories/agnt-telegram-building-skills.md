---
title: Make Telegram bot-building knowledge reusable
slug: agnt-telegram-building-skills
summary: Organizing Telegram implementation and UX guidance into focused skills for AGNT’s coding-agent builder.
timeline_date: 2026-06-27
timeline_summary: Focused building skills connect bot requirements to Telegram implementation patterns.
timeline_detail: Onboarding · conversation state · UI · deployment
topics: [telegram, agent-systems, backend-architecture]
stack: [TypeScript, grammY, Agent skills]
related_work: [agnt]
related_projects: [agnt-gm]
---

A Telegram bot builder needs knowledge of the medium as well as code generation. A form spans several messages. A callback needs a response. A user needs a way to cancel, go back, or understand an empty screen.

For AGNT’s coding-agent builder, I organized and maintained Telegram implementation and UX guidance as reusable skills. The content was largely AI-generated; my work included restructuring it, adapting it to the builder, and maintaining its entry points and format.

## Separate the concerns a builder needs

I split broad bot-basics and UX documents into focused resources covering API fundamentals, rich messages, conversation flows, onboarding, UX rules, and anti-patterns. These sat alongside UI, sessions, deployment, testing, and the builder entry point. The restructuring took the bundle from eight skills to thirteen.

The entry points explained when to use each skill and linked to related material. A conversation-flow task could lead to the flow patterns and session guidance; a message or keyboard task could lead to the corresponding UI and API guidance.

## Put the Telegram behavior into the patterns

The flow guidance described typed conversation steps, input handling for each step, cancellation, back navigation, and timeouts. The onboarding guidance covered the start menu, help, and empty states. The session guidance connected those interactions to how the bot remembers a conversation between updates.

These were patterns an agent could apply to booking, intake, search, or another multi-step bot. They made the intended behavior explicit alongside the implementation examples.

## Make the knowledge maintainable

The bundle included structured metadata and cross-references. I also worked on description-length fixes and validation tooling so the skill files could be loaded and checked against their format requirements.

The result was a concrete part of the builder: Telegram knowledge organized into implementation resources that could be reused across bot briefs. The skills describe the intended patterns; generated bots still needed implementation review and testing.
