---
timeline_summary: "A brief-to-bot builder powered by coding agents."
timeline_detail: "Blueprints, agent execution, deployment"
title: AGNT GM
topics: [agent-systems, integrations, infrastructure]
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
---

AGNT GM was an attempt to make a “Lovable for Telegram bots.” I owned the builder path: blueprint generation, agent execution, model selection and integration, and deployment.

The product did not find a reliable user path. The useful record is the engineering work: instrumenting a live agent product, testing multiple harnesses against real briefs, and being honest about what the traces did and did not prove.
