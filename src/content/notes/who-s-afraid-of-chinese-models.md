---
title: "Who’s Afraid of Chinese Models?"
type: "longform"
format: "article"
publish: false
author: "Ben Thompson (Stratechery)"
url: "https://stratechery.com/2026/whos-afraid-of-chinese-models/"
source_published: "2026-07-20"
confidence: "medium"
created: "2026-07-23"
updated: "2026-07-23"
last_updated_by: "agent"
sources:
  - "raw/archive/clippings/Who’s Afraid of Chinese Models?.md"
tags: []
aliases:
  - "Who’s Afraid of Chinese Models?"
  - "Who's Afraid of Chinese Models?"
related:
  - "[[Ben Thompson]]"
  - "[[Stratechery]]"
  - "[[Distillation (AI)]]"
  - "[[Nvidia]]"
  - "[[Jensen Huang]]"
  - "[[OpenAI]]"
  - "[[China]]"
  - "[[America’s Open-Model Paradox]]"
---

# Who’s Afraid of Chinese Models?

**Author:** [Ben Thompson](/notes/ben-thompson) ([Stratechery](/notes/stratechery))
**URL:** https://stratechery.com/2026/whos-afraid-of-chinese-models/
**One-line:** *Chinese open-weight models like Kimi K3 have reintroduced marginal-cost economics to AI, and Thompson argues the frontier labs' panic is mostly overblown — except on cybersecurity, where U.S. policy restricting defenders' access to frontier models while leaving Chinese open models freely available is "insane."*

## Key claims

- Open-weight models are not actually "free" — R&D is a sunk/fixed cost, but running inference (COGS) scales with revenue; Kimi K3 costs $3/million input and $15/million output tokens, cheaper than a comparison model ("Sol") at $5/$30, but token-hungriness can erase that advantage since reasoning models use different amounts of chain-of-thought tokens to reach an answer.
- Intelligence, not tokens, is the true commodity: two models that reach the same correct answer produce a fungible result even if their token cost to get there differs — so as AI capability commoditizes for many tasks (e.g. basic CRUD apps), competitive advantage shifts from price to cost structure, the classic dynamic of a commodity market (illustrated with a worked supplier-cost-curve example).
- Right now demand exceeds compute supply, which is why [Nvidia](/notes/nvidia) and its resellers can command high margins and closed labs like Anthropic and OpenAI can charge premium markups — not because Chinese models are actually cheaper on a marginal-cost basis.
- Frontier labs' apparent panic about Chinese models has multiple sources: (1) legacy anchoring to a training-cost-dominated financial model that required high inference prices, (2) intelligence isn't a perfect commodity because inference collects data that improves the next model iteration, (3) labs differentiate via integrated product experience (Claude Code, Codex "stickiness"), and (4) Anthropic's safety-focused identity is threatened by the mere existence of capable open alternatives.
- China's strategic motive for releasing open weights is to "commoditize your complements" — Xi Jinping's WAIC-adjacent speech tied openness explicitly to AI "moving from the digital world into the physical world" (i.e., robotics, where China already leads), and China has no interest in ceding the U.S. an asymmetric AI advantage.
- Engages directly with [America’s Open-Model Paradox](/notes/america-s-open-model-paradox) (quoted at length) on the distillation asymmetry: Western open-weight makers must respect frontier labs' terms of service (no distillation from GPT/Claude), so they end up "distilling the distillation" via a Chinese detour. Thompson proposes the U.S. pass a law making data-collection-for-training fair use and barring anti-distillation terms of service domestically. See [Distillation (AI)](/notes/distillation-ai).
- The one area Thompson says genuine concern is warranted: cybersecurity. A Hugging Face breach response was reportedly hampered because U.S. frontier model guardrails "cannot distinguish an incident responder from an attacker," forcing defenders to fall back on China's open-weight GLM-5.2 (Z.ai) run on their own infrastructure. Thompson calls the Trump administration's restriction of Fable/Sol cybersecurity use "insane" if it leaves defenders dependent on Chinese models instead.

## Notable quotes

> "What is fascinating about AI, however, is the extent to which those old universal principles are coming back to the forefront... marginal costs are back in a big way, both in terms of short-term implications of state-of-the-art free models, and in terms of the long-term structure of the industry."

> "Supplier A has a great business, Supplier B has a good business, and Supplier C is going to go bankrupt." (on commodity-market cost curves)

> "I highly doubt that Chinese models are cheaper to serve on a marginal cost basis, they just seem cheaper because Anthropic and OpenAI are so supply constrained that they are charging far more than they would if there were sufficient supply to meet the demand for intelligence."

> "Because U.S. open weight model makers must follow the frontier labs' terms of service, they (1) are worse than Chinese alternatives and (2) end up distilling the distillation, just with a detour through Chinese labs. Wouldn't it be better if western open weight model makers could go to the source?"

> "Right now defenders are effectively banned from using Fable or Sol for cybersecurity because of Trump administration directives; that means the best alternative is using models from a country which has been trying to weaken our cyber defenses for years. This is insane!"

## How it connects

- [Ben Thompson](/notes/ben-thompson) — author; this is a current Stratechery piece extending his Aggregation-Theory-style analysis to AI model economics.
- [Stratechery](/notes/stratechery) — the publication.
- [Distillation (AI)](/notes/distillation-ai) — Thompson's central engagement with the distillation-asymmetry argument, quoting [America’s Open-Model Paradox](/notes/america-s-open-model-paradox) directly.
- [America’s Open-Model Paradox](/notes/america-s-open-model-paradox) — the piece Thompson quotes and responds to on Western labs' lawful-distillation disadvantage.
- [Nvidia](/notes/nvidia) / [Jensen Huang](/notes/jensen-huang) — Huang's "token factories" framing of Nvidia GPUs is engaged and partly complicated by the reasoning-era token-inefficiency point.
- [OpenAI](/notes/openai) — named alongside Anthropic as a compute-constrained frontier lab currently commanding premium inference pricing.
- [China](/notes/china) — Xi Jinping's WAIC-era open-source strategy and its "commoditize your complements" logic.
