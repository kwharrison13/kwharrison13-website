---
title: "Zero Trust"
type: "concept"
publish: false
confidence: "low"
created: "2026-06-17"
updated: "2026-06-19"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
tags:
  - "cybersecurity"
  - "identity"
  - "network-security"
aliases:
  - "Zero Trust"
  - "Zero-Trust"
related:
  - "[[Salt Security Diligence — 2021]]"
  - "[[API Security]]"
  - "[[Identity & Access Management Diligence — 2021]]"
  - "[[Salt Security]]"
  - "[[Michael Isbitski]]"
---

# Zero Trust

**One-line definition:** *Security model that assumes no implicit trust for any actor inside or outside the network perimeter; focuses on identity verification and least-privilege access.*

## How sources describe it

- "The security org for a lot of companies is access-focused (e.g. authenticate and authorize the user) à la Zero Trust." — explains why API gateway teams focus on authentication rather than behavioral security. ([Michael Isbitski](/notes/michael-isbitski), Salt Security Diligence — 2021)
- Zero Trust / identity-focused security is what API gateway management typically addresses; behavioral anomaly detection (what [Salt Security](/notes/salt-security) does) is a distinct layer on top.

## Where it shows up

- Salt Security Diligence — 2021 — referenced as the default security paradigm that API security tools extend beyond.
- Identity & Access Management Diligence — 2021 — core concept in IAM market.

## Related concepts

- [API Security](/notes/api-security) — the runtime behavioral layer that Zero Trust alone doesn't cover
- Identity & Access Management Diligence — 2021 — IAM is the identity-verification core of the Zero Trust model
- [Salt Security](/notes/salt-security) — frames Zero Trust as the access-focused paradigm its behavioral anomaly detection extends beyond
- [Michael Isbitski](/notes/michael-isbitski) — characterizes most security orgs as access-focused "à la Zero Trust" rather than behavioral
