---
timeline_summary: "A brief-to-bot builder powered by coding agents."
timeline_detail: "Blueprints, agent execution, deployment"
title: AGNT GM Telegram bot builder
slug: agnt-gm
topics: [telegram, agent-systems, integrations, infrastructure]
status: Experiment · 2026
summary: A Telegram bot builder that used coding agents to turn a brief into a deployable bot.
weight: 2
timeline_date: 2026-05-01
stack:
  - TypeScript
  - Go
  - Telegram
  - Langfuse
related_work:
  - agnt
related_case_studies:
  - agnt-telegram-building-skills
---

AGNT GM was a Telegram bot builder using coding agents to turn a brief into an implementation and deployment. I owned the builder path: blueprint generation, agent execution, model selection and integration, and deployment.

The system had to carry a product request through several stages while making agent behavior inspectable. I instrumented runs with Langfuse and compared harnesses and models on real briefs to investigate where the builder struggled.

I also organized and maintained Telegram building skills covering onboarding, conversation state, UI, API behavior, deployment, and testing. Much of the guidance was AI-generated; the work was adapting it into usable resources for the builder.

Generated bot quality remained inconsistent, and the product did not find a reliable user path. The project is evidence of developer tooling, integration work, and operating an uncertain system.
