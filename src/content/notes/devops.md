---
title: "DevOps"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-25"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
  - "wiki/diligence-research/Coder - Diligence.md"
  - "Roam Research daily-note export — September 17th, 2021 (Index Ventures sourcing/diligence log): ~/Downloads/September 17th, 2021.md"
tags:
  - "devops"
aliases:
  - "DevOps"
related:
  - "[[Developer-Led Security]]"
  - "[[Salt Security]]"
  - "[[Coder - Diligence]]"
  - "[[September 17th, 2021 — Monad Pre-Brief (Max Rimpel)]]"
  - "[[DevSecOps]]"
reference_count: 2
---

# DevOps

In Kyle's security and developer-tooling diligence, DevOps functions as a key buyer/persona that runtime security tooling must serve alongside the security team. The recurring critique of [Salt Security](/notes/salt-security) across reference calls was that it "shows you the data but doesn't solve the problem" — built for security teams more than DevOps, with remediation not wired into day-to-day developer workflow. [David Mark](/notes/david-mark), a DevOps Team Lead at [Appsflyer](/notes/appsflyer), wanted a system serving both DevOps AND security audiences, and faulted vendors for "not paying enough attention to the DevOps part of [DevSecOps](/notes/devsecops)." This ties into the broader [Developer-Led Security](/notes/developer-led-security) thesis: a Salt survey found 52% of respondents putting responsibility for API security on the API team, developers, and DevOps — even though not all API security problems can be caught in code before runtime.

The [Monad](/notes/monad) pre-brief (via [Max Rimpel](/notes/max-rimpel)) frames DevOps as the collaboration counterpart to security: Monad lets companies build modules on top of their security data using common data tools like SQL and data warehouses, which "enables DevOps teams to collaborate much more effectively with Security teams" and to measure things like how effectively different DevOps teams manage vulnerabilities in their codebase. On the infrastructure side, Coder - Diligence sizes the DevOps market (per an IDC study) at $5.2B in 2018, forecast to reach $15B by 2023, and its reference calls surface DevOps engineers as the gatekeepers of cloud dev-environment adoption (setup difficulty, on-prem-vs-cloud security preferences).

**Context:** DevOps is a set of practices combining software development (Dev) and IT operations (Ops) to shorten the delivery cycle through automation, continuous integration/continuous delivery (CI/CD), and infrastructure-as-code. "DevSecOps" extends it by folding security into that automated pipeline rather than bolting it on at the end.

## Where this appears

- [Salt Security](/notes/salt-security) — critiqued for serving security teams over DevOps; remediation not wired into developer workflow.
- Salt Security Diligence — 2021 — the 52%-API-responsibility survey; David Mark's "serve both DevOps and security" demand.
- [Developer-Led Security](/notes/developer-led-security) — the thesis that runtime security must serve the DevOps/developer audience, not just security teams.
- Coder - Diligence — DevOps market sizing ($5.2B→$15B) and DevOps engineers as adoption gatekeepers for cloud dev environments.
- September 17th, 2021 — Monad Pre-Brief (Max Rimpel) — Monad as the bridge letting DevOps and security teams collaborate over shared data.
