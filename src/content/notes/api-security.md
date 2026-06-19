---
title: "API Security"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-19"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
tags:
  - "cybersecurity"
  - "api-security"
  - "devops"
aliases:
  - "API Security"
related:
  - "[[Salt Security Diligence — 2021]]"
  - "[[Salt Security]]"
  - "[[Noname Security]]"
  - "[[Traceable.ai]]"
  - "[[API Gateways]]"
  - "[[Developer-Led Security]]"
  - "[[DevSecOps]]"
  - "[[OWASP]]"
  - "[[Zero Trust]]"
  - "[[Nir Rothenberg]]"
  - "[[Michael Isbitski]]"
  - "[[Prabhakar Kasu]]"
  - "[[George Do]]"
  - "[[KuppingerCole]]"
  - "[[CrowdStrike]]"
---

# API Security

**One-line definition:** *The emerging security category focused on discovering, monitoring, and protecting APIs at runtime — distinct from static code analysis, WAFs, or API gateway policies, because attacks manifest in production behavior, not code.*

## How sources describe it

- "A newer-type company … not just a one-time assessment, but really a full encapsulation of this environment to make sure that APIs are not just secure, but they're effectively working." — Salt Security's differentiation. (Salt Security Diligence — 2021)
- Category is ~5 years old as of 2021; [Salt Security](/notes/salt-security) was the first mover. Started "quite lost" but expanded. ([Nir Rothenberg](/notes/nir-rothenberg), Salt Security Diligence — 2021)
- [KuppingerCole](/notes/kuppingercole) has covered the space since 2014; 31 meaningful vendors by 2021.
- Why WAFs and [API Gateways](/notes/api-gateways) don't solve it:
    - WAFs are binary (stop/allow) and can't understand API business logic. ([Nir Rothenberg](/notes/nir-rothenberg))
    - Gateways enforce authentication but can't baseline normal API behavior or detect behavioral anomalies. ([Michael Isbitski](/notes/michael-isbitski))
    - 95% of API exploits happen on *authenticated* APIs — authentication isn't the problem. (Salt Security Diligence — 2021, Salt data)
    - "We've detected 50%+ of APIs that access sensitive data but aren't built through the API Gateway." (Salt Security Diligence — 2021)
- Gartner: "By 2022, API abuses will move from an infrequent to the most-frequent attack vector, resulting in data breaches for enterprise web applications."
- 94% of survey respondents experienced an API security incident in the past 12 months.
- Must-have framing: "You have to have endpoint security (CrowdStrike, SentinelOne). You have to have a Firewall (Palo Alto, CheckPoint). You need a CSPM (Orca, Wiz.io). You need to have an API security tool." ([Nir Rothenberg](/notes/nir-rothenberg), Salt Security Diligence — 2021)
- TAM estimates across reference calls: $5–10B ([Prabhakar Kasu](/notes/prabhakar-kasu)), $6–10B+ ([Nir Rothenberg](/notes/nir-rothenberg)), $10–20B ([George Do](/notes/george-do)).

## Where it shows up

- Salt Security Diligence — 2021 — the central topic of the entire dossier.

## Related concepts

- [API Gateways](/notes/api-gateways) — the adjacent infrastructure that doesn't solve API security
- [Developer-Led Security](/notes/developer-led-security) — the shift-left angle; API security is the surface-area complement
- [DevSecOps](/notes/devsecops) — the organizational practice API security plugs into
- [OWASP](/notes/owasp) — the OWASP API Security Top 10 defines the threat taxonomy
- [Zero Trust](/notes/zero-trust) — overlapping security philosophy; access-focused vs. behavior-focused
- [CrowdStrike](/notes/crowdstrike-crwd) — cited in the "must-have" stack framing as the endpoint-security counterpart to an API security tool

## People

- [Nir Rothenberg](/notes/nir-rothenberg) — reference call describing why WAFs miss API business logic, the must-have stack framing, and a $6–10B+ TAM estimate
- [Michael Isbitski](/notes/michael-isbitski) — reference call on why API gateways can't baseline normal behavior or detect anomalies
- [Prabhakar Kasu](/notes/prabhakar-kasu) — reference call giving a $5–10B TAM estimate for the category
- [George Do](/notes/george-do) — reference call giving a $10–20B TAM estimate for the category
- [KuppingerCole](/notes/kuppingercole) — analyst firm covering the space since 2014; counted 31 meaningful vendors by 2021
