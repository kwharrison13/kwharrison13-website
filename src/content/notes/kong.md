---
title: "Kong"
type: "company"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-19"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
  - "wiki/diligence-research/Noname Security - Diligence.md"
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
  - "[[MuleSoft]]"
  - "[[Apigee]]"
  - "[[Informatica]]"
  - "[[Atanu Dasgupta]]"
  - "[[Gojek]]"
  - "[[George Do]]"
  - "[[Michael Isbitski]]"
  - "[[ServiceNow ($NOW)]]"
  - "[[CrowdStrike ($CRWD)]]"
---

# Kong

**One-line:** *Open-source [API gateway](/notes/api-gateways) and service-mesh platform; in Kyle's API-security diligence it is the most common rebuttal to [Salt Security](/notes/salt-security) ("Kong should own it") and the gateway side of the Kong→Salt :: ServiceNow→CrowdStrike analogy.*

## What we know

- Used as the primary API gateway by [Informatica](/notes/informatica) (per [Atanu Dasgupta](/notes/atanu-dasgupta)) and [Gojek](/notes/gojek) (per [George Do](/notes/george-do)); came out of the [Apigee](/notes/apigee)-era gateway world, focused on performance, deployability, and scalability. (Salt Security Diligence — 2021)
- Focused on API gateways and API mesh for [Microservices](/notes/microservices) architecture; over the prior ~12 months it leaned into microservices, observability/analytics (logs, metrics, KPIs, custom dashboards) and gateway plug-ins — an observability push similar to Noname's approach. (Noname Security - Diligence, per [Vara Imandi](/notes/vara-imandi) of [MuleSoft](/notes/mulesoft))
- Its "Secure and Govern APIs and Services" page reads more like behavior/best-practices than real product functionality — not yet a true API security product. (Salt Security Diligence — 2021)
- Could theoretically add an API-security module, but reference experts argued it's "not the same area" — gateway buyers are not security teams and aren't focused on deep runtime security; security would be "augmentative rather than replacing." (Salt Security Diligence — 2021, per [Michael Isbitski](/notes/michael-isbitski); Noname Security - Diligence, per [Vara Imandi](/notes/vara-imandi))
- The recurring company-building analogy: [ServiceNow ($NOW)](/notes/servicenow) → [CrowdStrike ($CRWD)](/notes/crowdstrike) :: Kong → [Salt Security](/notes/salt-security) (the management layer spawns a dedicated security company on top). (Salt Security Diligence — 2021, per [Atanu Dasgupta](/notes/atanu-dasgupta))
- [Salt Security](/notes/salt-security) has a plug-in integration with Kong (traffic mirroring + blocking). (Salt Security Diligence — 2021)
- Internal read (Kong engineer [Dave Thompson](/notes/dave-thompson)): attracted ex-[MuleSoft](/notes/mulesoft) talent; scaling fast (~100→1K), doubling engineering; sees the API/security layer and service mesh as interesting future plays; views middleware companies as slow-compounding (open source → monetization → enterprise → SaaS). (Noname Security - Diligence)

## Context hub

- Salt Security Diligence — 2021 — Kong is the central competitive-moat question throughout the reference calls.
- Noname Security - Diligence — the [Dave Thompson](/notes/dave-thompson) Kong call and [Vara Imandi](/notes/vara-imandi)/[MuleSoft](/notes/mulesoft) read on Kong's gateway-vs-security positioning.
- Category / comparables: [API Gateways](/notes/api-gateways) (archetype), [MuleSoft](/notes/mulesoft) (competing platform), [Apigee](/notes/apigee) (older-generation predecessor), [Microservices](/notes/microservices).
- Analogy partners: [ServiceNow ($NOW)](/notes/servicenow) (incumbent side) and [CrowdStrike ($CRWD)](/notes/crowdstrike) (security side, mapped to [Salt Security](/notes/salt-security)).
- Customers/users named: [Informatica](/notes/informatica), [Gojek](/notes/gojek).

## Mentioned in

- Salt Security Diligence — 2021 — the recurring "Kong should own it" moat question.
- Noname Security - Diligence — Kong engineer and MuleSoft reference calls.
