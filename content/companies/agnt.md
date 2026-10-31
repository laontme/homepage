---
title: AGNT GM
slug: agnt
topics: [telegram, agent-systems, integrations, infrastructure]
role: Software Engineer
org: AGNT GM
period: Mar 2026 – Aug 2026
summary: Developer tooling and agent infrastructure for a bot builder, spanning execution, observability, model integrations, and deployment.
weight: 1
featured: true
date: 2026-03-01
timeline_date: 2026-03-01
stack:
  - TypeScript
  - Langfuse
  - Go
related_projects:
  - agnt-gm
related_case_studies:
  - agnt-telegram-building-skills
---

I worked as a software engineer as the team explored agentic trading, an open-source contribution platform, and then AGNT GM, a builder intended to turn a brief into a Telegram bot.

In the final stage, I owned the builder path: blueprint generation, agent execution, model selection and integration, and deployment. The engineering problem was coordinating those stages while generated bot quality remained inconsistent.

I instrumented the builder with Langfuse so we could inspect model calls and agent runs. During that period it recorded about **8.4K traces**, **44K LLM calls**, around **10 models**, and **4 agent harnesses**. I also compared OpenCode, Pi, Claudish, and grok-build/agent_runner on real user briefs. Those comparisons were exploratory; we did not have a functioning evaluation suite.

Earlier work included a TypeScript/oclif CLI, which was later dropped, and Telegram building skills for coding agents. The skill content was largely AI-generated. My contribution included organizing, adapting, and maintaining it as part of the builder’s implementation resources.

The product did not find a reliable user path, and production bot quality remained a problem. The experience covers building and diagnosing a live agent system, including its limitations.
