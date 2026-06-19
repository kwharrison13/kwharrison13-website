---
title: "Salt Security"
type: "company"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-19"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
  - "wiki/meetings/September 22nd, 2021 — API Security Transcript (Salt Security).md"
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

**One-line:** *API security platform that discovers all APIs, detects attacks via ML behavioral analysis, and surfaces remediation insights — read in Kyle's diligence as the "CrowdStrike to Kong's ServiceNow" of API security.*

## What we know

- Product phases: **Discover** (continuously find all known/unknown APIs, identify sensitive-data exposure) → **Prevent** (analyze all API activity, flag suspicious behavior) → **Remediate** (turn attackers into penetration testers, surface insights). (Salt Security Diligence — 2021)
- Started agent-based, then shifted to an agentless / traffic-mirroring model — a change customers explicitly noted (early evaluators rejected the agent-based version; [Informatica](/notes/informatica)'s [Atanu Dasgupta](/notes/atanu-dasgupta) found the cloud-native managed-service version "more mature"). (Salt Security Diligence — 2021)
- Key differentiator over [API Gateways](/notes/api-gateways): baselines normal API usage at scale and catches behavioral/authenticated attacks a gateway or WAF can't dissect; "we've detected 50%+ of APIs that access sensitive data but aren't built through the API Gateway." (Salt Security Diligence — 2021)
- Integrations: [Kong](/notes/kong) (plug-in, traffic mirror + blocking), [MuleSoft](/notes/mulesoft), [Splunk](/notes/splunk) (SIEM), Jira, Slack, PagerDuty; agentless API-based connectivity that [TripActions](/notes/tripactions) had "up and running" in about a week. (Salt Security Diligence — 2021)
- Funding: Series A from [Tenaya Capital](/notes/tenaya-capital); **$30M Series B** from [Sequoia](/notes/sequoia) (Dec 2020); **$70M Series C** from [Alkeon](/notes/alkeon) + [Advent International](/notes/advent-international) (May 2021) at a **$625M** post-money. (Salt Security Diligence — 2021)
- Traction: **$2M → $10M ARR** in 2021; named customers include Home Depot, Armis, Payoneer, Ally Bank, Takeda, Equinix. (Salt Security Diligence — 2021)
- Recurring critique across reference calls: "shows you the data but doesn't solve the problem" — false-positive noise, remediation not wired into day-to-day developer workflow, built for security teams more than [DevOps](/notes/devops); some customers ([Appsflyer](/notes/appsflyer)) began evaluating [Noname Security](/notes/noname-security) / [Traceable.ai](/notes/traceable-ai) as a result. (Salt Security Diligence — 2021)

## Context hub

- Salt Security Diligence — 2021 — full investment diligence dossier (Sept–Oct 2021): six expert/customer reference calls ([Prabhakar Kasu](/notes/prabhakar-kasu)/AON, [Atanu Dasgupta](/notes/atanu-dasgupta)/[Informatica](/notes/informatica), [David Mark](/notes/david-mark)/[Appsflyer](/notes/appsflyer), [Nir Rothenberg](/notes/nir-rothenberg)/[Rapyd](/notes/rapyd), [Prabhath Karanth](/notes/prabhath-karanth)/[TripActions](/notes/tripactions), David Dean), an analyst session, and a Salt technical-evangelist call.
- September 22nd, 2021 — API Security Transcript (Salt Security) — annotated API-security transcript framing Salt's full-encapsulation approach vs. [Snyk](/notes/snyk), [Postman](/notes/postman), and the API-firewall players.
- Competitors: [Noname Security](/notes/noname-security) (stronger on posture management), [Traceable.ai](/notes/traceable-ai) (CI/CD / full DevSecOps focus).
- Categories: [API Security](/notes/api-security) (the category Salt pioneered), [API Gateways](/notes/api-gateways) (complementary infra), [Developer-Led Security](/notes/developer-led-security).
- Investors: [Tenaya Capital](/notes/tenaya-capital), [Sequoia](/notes/sequoia), [Alkeon](/notes/alkeon), [Advent International](/notes/advent-international).

## Mentioned in

- Salt Security Diligence — 2021 — the central diligence dossier.
- September 22nd, 2021 — API Security Transcript (Salt Security) — annotated transcript on Salt's approach.
- Recurs as the head-to-head comparison in [Noname Security](/notes/noname-security)'s diligence and across the API-security company pages ([Kong](/notes/kong), [CrowdStrike](/notes/crowdstrike), [Palo Alto Networks](/notes/palo-alto-networks), [Wiz.io](/notes/wiz-io)).
