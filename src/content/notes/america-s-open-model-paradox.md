---
title: "America’s Open-Model Paradox"
type: "longform"
format: "article"
publish: false
author: "Dean Meyer and Konstantine Buhler"
url: "https://x.com/DeanMeyerrr/status/2077834267086729674"
source_published: "2026-07-16"
confidence: "medium"
created: "2026-07-23"
updated: "2026-07-23"
last_updated_by: "agent"
sources:
  - "raw/archive/clippings/America’s Open-Model Paradox.md"
tags: []
aliases:
  - "America’s Open-Model Paradox"
  - "America's Open-Model Paradox"
related:
  - "[[Distillation (AI)]]"
  - "[[Open Source]]"
  - "[[China]]"
  - "[[OpenAI]]"
  - "[[Who’s Afraid of Chinese Models?]]"
---

# America’s Open-Model Paradox

**Author:** Dean Meyer and Konstantine Buhler
**URL:** https://x.com/DeanMeyerrr/status/2077834267086729674
**One-line:** *Chinese open-weight models (Qwen, Kimi, GLM, DeepSeek) have become the default base, teacher, and synthetic-data source for Western AI builders — because U.S. terms of service block the equivalent lawful use of GPT or Claude outputs — and the authors propose a licensed domestic alternative.*

## Key claims

- Qwen's share of new open-model fine-tunes and adaptations rose from 1% in January 2024 to 69% by February 2026, according to an ATOM report; most American AI startups reportedly use Chinese open weights somewhere in their stack.
- The dependence now runs upstream too: Western application companies build on Chinese open models, and Western labs use Chinese models as **teachers** and sources of synthetic training data. Thinking Machines pre-trained "Inkling" independently but used synthetic data from Moonshot's Kimi K2.5 to bootstrap supervised fine-tuning.
- The asymmetry is legal, not just technical: a Western lab has a lawful path to learn from a Chinese open model, while equivalent use of [OpenAI](/notes/openai) (GPT) or Anthropic (Claude) outputs is prohibited by terms of service. See [Distillation (AI)](/notes/distillation-ai).
- Open weights provide control over a specific model version but not continued access to better future versions, alignment guarantees, or auditability — the weights don't reveal the training corpus, filtering choices, or whether rare trigger-dependent behavior was embedded. Reuters reportedly found Chinese authorities discussing restricting overseas access to advanced (including unreleased) Chinese models.
- Proposes a three-part framework: (1) keep building Western base models (cites Reflection, TML, Nemotron), (2) create controlled/licensed teacher access — frontier labs selling structured, metered, audited training rights to qualifying Western/allied companies, and (3) keep raising the cost of foreign distillation via identity verification, access controls, and enforcement.
- Frames the stakes as being about who becomes "the substrate on which global enterprises build and improve digital intelligence" — not just model revenue, but the default base for synthetic data, post-training, evals, and applied AI generally.

## Notable quotes

> "Distillation does not explain China's entire open-model lead. Chinese labs have world-class researchers, substantial compute, strong pre-trained models, software-hardware codesign, and rapidly improving post-training capabilities. But distillation compresses the costly final gap between a strong base and a near-frontier system."

> "The weights are the compressed result of training. They do not reveal the full pre-training corpus, which data was filtered or poisoned, what interventions were made during training, or whether rare trigger-dependent behavior was embedded... possessing the weights cannot prove the absence of one [a backdoor]."

> "American companies need a legal way to turn American frontier capability into cheaper, ownable models."

> "To distill or not to distill is not the question. The question is whether the West creates a legal domestic path for capability transfer - or relies on an indirect path through China."

## How it connects

- [Distillation (AI)](/notes/distillation-ai) — the central mechanism the piece is about; this article is one of its two primary sources.
- [Who’s Afraid of Chinese Models?](/notes/who-s-afraid-of-chinese-models) — Ben Thompson directly quotes this piece and engages the same distillation asymmetry, arguing for a similar U.S. policy fix.
- [Open Source](/notes/open-source) — the broader open-weight-models dynamic this piece is a case study of.
- [China](/notes/china) — the source of the open-weight models (Qwen, Kimi, GLM, DeepSeek) discussed throughout.
- [OpenAI](/notes/openai) — named as one of the Western frontier labs whose terms of service block the equivalent lawful distillation route.
