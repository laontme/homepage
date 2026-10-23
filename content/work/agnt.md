---
title: AGNT
work-topics: [agent-systems, integrations, infrastructure]
role: Founding Engineer
org: AGNT
period: Mar 2026 – Aug 2026
summary: Founding engineering work across several product directions, including the AGNT GM Telegram bot builder.
weight: 1
featured: true
date: 2026-03-01
timeline_date: 2026-03-01
stack:
  - TypeScript
  - Langfuse
  - Go
---

AGNT went through three product directions while I was there: agentic trading, then an open-source contribution platform, then AGNT GM — an attempt at a “Lovable for Telegram bots.” I was a founding engineer. The work followed the product.

I started on a TypeScript/oclif CLI and Telegram bot-building skills for coding agents. The CLI was dropped. It is not a product I would point to. The skills were largely AI-generated; they are not handcrafted IP and not a flagship result.

I then instrumented the builder with Langfuse. That was observability, not evaluation. There was no functioning eval suite, and I am not claiming it improved generation quality. During the instrumented period Langfuse recorded about **8.4K traces**, **44K LLM calls**, around **10 models**, and **4 agent harnesses**.

I tested OpenCode, Pi, Claudish, and grok-build/agent_runner against several models. Bake-offs ran on real user briefs. One documented run had OpenCode + MiniMax M3 at 3/3 and DeepSeek at 0/3. That is a single comparison, not a platform success rate.

In the last stretch I owned the builder path: blueprint generation, agent execution, model selection and integration, deployment. Production bot quality stayed a problem. The company did not find users that way.

This page is about agent infrastructure, instrumentation, and what it looks like to swap harnesses and models in a live builder. It is not a startup-growth story.
