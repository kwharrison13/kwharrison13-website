---
title: "API Gateways"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-19"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
tags:
  - "infrastructure"
  - "api-security"
  - "microservices"
aliases:
  - "API Gateways"
  - "API Gateway"
related:
  - "[[Salt Security Diligence — 2021]]"
  - "[[Kong]]"
  - "[[MuleSoft]]"
  - "[[Apigee]]"
  - "[[API Security]]"
  - "Microservices"
  - "[[Salt Security]]"
  - "[[Atanu Dasgupta]]"
  - "[[Prabhakar Kasu]]"
  - "[[Boomi]]"
  - "[[API]]"
  - "[[Firewall]]"
  - "[[OWASP]]"
---

# API Gateways

**One-line definition:** *Central management and routing layer for APIs; handles authentication, rate limiting, load balancing, and documentation — but lacks the behavioral analysis needed to detect sophisticated API attacks.*

## How sources describe it

- "A gateway's main purpose is to focus on routing your API requests to the right services." ([Atanu Dasgupta](/notes/atanu-dasgupta), Salt Security Diligence — 2021)
- API gateways enforce authentication but can't baseline normal behavior or detect anomalies — "there is often an operational breakdown between teams creating APIs, teams publishing APIs, and teams securing APIs." (Salt Security Diligence — 2021, OWASP)
- The central moat question for [Salt Security](/notes/salt-security): "Why couldn't Kong do this?" — Answer: gateway buyers are not security teams; gateways focus on performance/routing not behavioral security; and 50%+ of APIs that access sensitive data aren't even built through the gateway. (Salt Security Diligence — 2021)
- Examples: [Kong](/notes/kong), [MuleSoft](/notes/mulesoft), [Apigee](/notes/apigee), AWS API Gateway, Azure API Management, GCP — all originally solving management/governance, not security.
- "The number of APIs they have on their API Gateways are very minimal, but that doesn't give them any visibility into how many APIs even exist out there." ([Prabhakar Kasu](/notes/prabhakar-kasu), Salt Security Diligence — 2021)
- Gateway security features cover basic auth, rate limiting, IP blocking — but can't catch business-logic attacks, BOLA (Broken Object Level Authorization), data scraping. (Salt Security Diligence — 2021, OWASP)

## Where it shows up

- Salt Security Diligence — 2021 — the central competitor question in every reference call.

## Related concepts

- [Kong](/notes/kong) — the leading open-source API gateway
- [MuleSoft](/notes/mulesoft) — enterprise API gateway; Salt has an integration
- [Apigee](/notes/apigee) — Google-acquired gateway platform; tried AI/ML for security, not productized
- [API Security](/notes/api-security) — the layer that sits on top of gateways
- Microservices — the architecture that made API gateways necessary
- [Salt Security](/notes/salt-security) — the API security vendor whose moat thesis turns on gateways not doing behavioral security
- [OWASP](/notes/owasp) — source for the gateway gaps (business-logic attacks, BOLA, data scraping) gateways can't catch
- [Atanu Dasgupta](/notes/atanu-dasgupta) — diligence reference who framed a gateway's purpose as routing requests to the right services
- [Prabhakar Kasu](/notes/prabhakar-kasu) — diligence reference noting gateways give minimal visibility into how many APIs actually exist
