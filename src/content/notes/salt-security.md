---
title: "Salt Security"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-19"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
tags:
  - "api-security"
  - "cybersecurity"
  - "saas"
aliases:
  - "Salt Security"
related:
  - "[[Salt Security Diligence — 2021]]"
  - "[[Noname Security]]"
  - "[[Traceable.ai]]"
  - "[[Kong]]"
  - "[[API Security]]"
  - "[[API Gateways]]"
  - "[[Developer-Led Security]]"
  - "[[Sequoia]]"
  - "[[Alkeon]]"
  - "[[Tenaya Capital]]"
  - "[[Advent International]]"
  - "[[September 22nd, 2021 — API Security Transcript (Salt Security)]]"
  - "[[Snyk]]"
  - "[[Postman]]"
  - "[[Mulesoft]]"
  - "[[Splunk]]"
---

# Salt Security

**One-line definition:** *API security platform that discovers all APIs, detects attacks via ML behavioral analysis, and surfaces remediation insights — the "CrowdStrike to Kong's ServiceNow" in API security.*

## How sources describe it

- "Not just a one-time assessment, but really a full encapsulation of this environment to make sure that APIs are not just secure, but they're effectively working." (Salt Security Diligence — 2021)
- Phases: Discover (find all known/unknown APIs, identify sensitive data exposure) → Prevent (analyze all API activity, flag suspicious behavior) → Remediate (turn attackers into penetration testers, surface insights). (Salt Security Diligence — 2021)
- Patented platform: no agents, no software changes, no inline code; deploys via traffic mirror; no impact on application performance.
- Started agent-based, shifted to agentless/traffic-mirroring model prior to 2021 — critical shift that customers noted.
- Key differentiator over [API Gateways](/notes/api-gateways): baselines normal API usage at scale; catches authenticated API attacks (95% of exploits happen on authenticated APIs). (Salt Security Diligence — 2021)
- Integrations: [Kong](/notes/kong), [MuleSoft](/notes/mulesoft), [Splunk](/notes/splunk), Jira, Slack, PagerDuty.

## Funding & traction (as of October 2021)

- Series A: [Tenaya Capital](/notes/tenaya-capital)
- Series B: $30M from [Sequoia](/notes/sequoia) (Dec 2020)
- Series C: $70M from [Alkeon](/notes/alkeon) and [Advent International](/notes/advent-international) (May 2021); post-money valuation $625M
- ARR: $2M → $10M in 2021 (400% revenue growth in prior 12 months)
- 86 FTE, growing 121% YoY (data science signal, September 29, 2021)

## Where it shows up

- Salt Security Diligence — 2021 — full investment diligence dossier, September–October 2021.
- September 22nd, 2021 — API Security Transcript (Salt Security) — annotated API-security transcript framing Salt's full-encapsulation approach vs. [Snyk](/notes/snyk), [Postman](/notes/postman), and the API firewall players.

## Related concepts

- [Noname Security](/notes/noname-security) — primary competitor; stronger on posture management
- [Traceable.ai](/notes/traceable-ai) — competitor with CI/CD / full DevSecOps focus
- [API Security](/notes/api-security) — the category Salt Security pioneered
- [API Gateways](/notes/api-gateways) — complementary infrastructure; Salt detects what gateways miss
- [Developer-Led Security](/notes/developer-led-security) — Salt's surface-area approach vs. Snyk's command-line approach
- [Snyk](/notes/snyk) — adjacent DevSecOps player contrasted with Salt's full-encapsulation approach in the API-security transcript
- [Postman](/notes/postman) — API tooling vendor framed against Salt alongside the API firewall players
- [Mulesoft](/notes/mulesoft) — integration partner; Salt ingests its API traffic
- [Splunk](/notes/splunk) — SIEM integration target where Salt surfaces detected API attacks
