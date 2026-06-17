---
title: "Kong"
type: "concept"
publish: false
confidence: "low"
created: "2026-06-17"
updated: "2026-06-17"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
tags:
  - "api-gateways"
  - "infrastructure"
  - "microservices"
aliases:
  - "Kong"
  - "Kong API Gateway"
related:
  - "[[Salt Security Diligence — 2021]]"
  - "[[Salt Security]]"
  - "[[API Gateways]]"
  - "[[Microservices]]"
  - "[[MuleSoft]]"
  - "[[Apigee]]"
---

# Kong

**One-line definition:** *Open-source [API gateway](/notes/api-gateways) and service mesh platform; the most common rebuttal to [Salt Security](/notes/salt-security) ("Kong should own it") and the leading comparison to ServiceNow in the Kong→Salt Security :: ServiceNow→CrowdStrike analogy.*

## How sources describe it

- Used by [Informatica](/notes/informatica) ([Atanu Dasgupta](/notes/atanu-dasgupta)) and [Gojek](/notes/gojek) ([George Do](/notes/george-do)) as their primary API gateway.
- "Secure and Govern APIs and Services" page talks more about behavior / best practices than actual product functionality — not yet a true API security product. (Salt Security Diligence — 2021)
- Focused on API gateways and API mesh (for Microservices architecture); service mesh is their newer business.
- Could theoretically add an API Security module but it's "not the same area" — gateway buyers are not security teams and "aren't focused on runtime security that deep." ([Michael Isbitski](/notes/michael-isbitski), Salt Security Diligence — 2021)
- Analogy: [ServiceNow ($NOW)](/notes/servicenow-now) → [CrowdStrike ($CRWD)](/notes/crowdstrike-crwd) :: Kong → [Salt Security](/notes/salt-security). ([Atanu Dasgupta](/notes/atanu-dasgupta), Salt Security Diligence — 2021)
- Salt Security has a plug-in integration with Kong (traffic mirroring + blocking capability).
- Came out of the world controlled by [Apigee](/notes/apigee) etc.; focused on performance, deployability, scalability.
- Dave Thompson (Director of Engineering) and Eric Reynolds (Engineering Manager) were on the diligence outreach list.

## Where it shows up

- Salt Security Diligence — 2021 — the central competitive moat question throughout all reference calls.

## Related concepts

- [API Gateways](/notes/api-gateways) — Kong is the archetype
- [Salt Security](/notes/salt-security) — the security layer on top of Kong
- [MuleSoft](/notes/mulesoft) — competing gateway platform
- [Apigee](/notes/apigee) — older-generation competitor
- Microservices — the architecture Kong is built for
