---
title: "Noname Security"
type: "company"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-19"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Noname Security - Diligence.md"
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
  - "wiki/meetings/November 2nd, 2021 — Oz Golan & Shay Levi (Noname Security).md"
tags:
  - "api-security"
  - "cybersecurity"
  - "saas"
aliases:
  - "Noname Security"
related:
  - "[[Noname Security - Diligence]]"
  - "[[Salt Security Diligence — 2021]]"
  - "[[Salt Security]]"
  - "[[API Security]]"
  - "[[Traceable.ai]]"
  - "[[Nir Rothenberg]]"
  - "[[Atanu Dasgupta]]"
  - "[[Insight Partners]]"
  - "[[DevSecOps]]"
  - "[[November 2nd, 2021 — Oz Golan & Shay Levi (Noname Security)]]"
---

# Noname Security

**One-line:** *API security platform; primary competitor to [Salt Security](/notes/salt-security); differentiated by a broader posture-management vision — end-to-end API lifecycle from development to production, not just runtime traffic analysis.*

## What we know

- Positioned as more than traffic analysis: full packet capture, deploys agents, scans all environments (testing, staging, production), not just gateway traffic. (Salt Security Diligence — 2021, per [Nir Rothenberg](/notes/nir-rothenberg))
- "Noname is the only one doing [posture management]" — evaluating the risk posture of APIs at rest, not just catching active attacks; stronger than Salt on posture (which APIs exist, which are at risk, where risky data flows), similar on anomaly detection. (Salt Security Diligence — 2021, per [Nir Rothenberg](/notes/nir-rothenberg))
- Traffic-mirroring model — mirrors everything inside the customer's own environment rather than sending traffic across the internet; cited as a differentiator over Salt's earlier agent-based model. (Salt Security Diligence — 2021, per David Dean)
- Integrates with Swagger (possibly Postman); roadmap centers on overall API posture and the end-to-end API lifecycle from development to production. (Salt Security Diligence — 2021, per [Nir Rothenberg](/notes/nir-rothenberg))
- Critiqued for ML false positives vs. Salt's stronger detection, and for not being cloud-native (supports hybrid on-prem + cloud — advantageous for some enterprises, less elegant than Salt's cloud-native model); maturity was a concern for some evaluators. (Salt Security Diligence — 2021, per [Atanu Dasgupta](/notes/atanu-dasgupta))
- Funding: **$60M Series B** led by [Insight Partners](/notes/insight-partners) (with Lightspeed also on the cap table); [Gili Raanan](/notes/gili-raanan) of [Sequoia](/notes/sequoia)/Cyberstarts described an outside offer at **$1B**. (Noname Security - Diligence)
- Traction: ~**$3M ARR** in 2021 (logos include Starbucks, Chipotle, FIS, [Rapyd](/notes/rapyd)) with a plan to **$17M ARR** the next year; forecast flagged as inefficient (high burn) to $50M+ ARR; 112 FTE growing 559% YoY (Sept 2021 data-science signal). (Noname Security - Diligence)

## Context hub

- Noname Security - Diligence — the dedicated dossier: $60M Series B from [Insight Partners](/notes/insight-partners), ~$3M→$17M ARR plan, eight reference calls ([Nir Rothenberg](/notes/nir-rothenberg)/[Rapyd](/notes/rapyd), David Dean/DGDean, [Vara Imandi](/notes/vara-imandi)/[MuleSoft](/notes/mulesoft), [Dave Thompson](/notes/dave-thompson)/[Kong](/notes/kong), [Gili Raanan](/notes/gili-raanan)/[Sequoia](/notes/sequoia)·Cyberstarts, [Stuart McClure](/notes/stuart-mcclure)/[Cylance](/notes/cylance), [Ian Buxton](/notes/ian-buxton)/[Vail Resorts](/notes/vail-resorts)) plus a TechCrunch funding write-up.
- Salt Security Diligence — 2021 — Noname appears in every customer reference call as the primary competitor evaluated head-to-head.
- November 2nd, 2021 — Oz Golan & Shay Levi (Noname Security) — direct sourcing call with Noname's founders.
- Competitors: [Salt Security](/notes/salt-security), [Traceable.ai](/notes/traceable-ai), [Cequence.ai](/notes/cequence-ai). Category: [API Security](/notes/api-security) / [DevSecOps](/notes/devsecops). Investor: [Insight Partners](/notes/insight-partners).

## Mentioned in

- Noname Security - Diligence — the dedicated diligence dossier.
- Salt Security Diligence — 2021 — appears in every Salt reference call as the head-to-head competitor.
- November 2nd, 2021 — Oz Golan & Shay Levi (Noname Security) — founder sourcing call.
