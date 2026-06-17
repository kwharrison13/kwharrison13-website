---
title: "OWASP"
type: "concept"
publish: false
confidence: "low"
created: "2026-06-17"
updated: "2026-06-17"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
tags:
  - "cybersecurity"
  - "standards"
  - "api-security"
aliases:
  - "OWASP"
  - "Open Web Application Security Project"
related:
  - "[[Salt Security Diligence — 2021]]"
  - "[[API Security]]"
---

# OWASP

**One-line definition:** *Open Web Application Security Project; publishes the OWASP API Security Top 10, which defines the canonical threat taxonomy for API vulnerabilities.*

## How sources describe it

- OWASP API Security Top 10 is the industry standard taxonomy for API threats; [Salt Security](/notes/salt-security) uses it as a reference for their GTM ("Are you vulnerable to the top 10 OWASP-type risks?")
- Most common API threat: API1:2019 Broken Object Level Authorization (BOLA) — ~40% of all API attacks. Requires behavioral analysis to detect; not catchable by WAF signature matching or gateway policies.
- "Traditional security controls like WAFs and [API Gateways](/notes/api-gateways) miss these types of attacks because they don't understand API context and don't baseline normal API usage." (Salt Security Diligence — 2021, OWASP resource)
- CapitalOne used WAF (mod security) for API protection — led to server-side request forgery attacks. ([Michael Isbitski](/notes/michael-isbitski), Salt Security Diligence — 2021)

## Where it shows up

- Salt Security Diligence — 2021 — referenced in GTM section and resources.

## Related concepts

- [API Security](/notes/api-security) — the category OWASP defines the threats for
