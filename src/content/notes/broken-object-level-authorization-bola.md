---
title: "Broken Object Level Authorization (BOLA)"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/concepts/API Gateways.md"
  - "wiki/concepts/OWASP.md"
tags: []
aliases:
  - "Broken Object Level Authorization (BOLA)"
  - "BOLA"
related:
  - "[[API Gateways]]"
  - "[[OWASP]]"
  - "[[API Security]]"
  - "[[Salt Security]]"
---

# Broken Object Level Authorization (BOLA)

BOLA is the canonical API-attack class running through Kyle's API-security notes — the threat that traditional infrastructure cannot catch. Per [OWASP](/notes/owasp), it is API1:2019 Broken Object Level Authorization, the most common API threat at roughly 40% of all API attacks. Crucially, it requires behavioral analysis to detect: WAF signature-matching and [API Gateways](/notes/api-gateways) policies miss it because those controls "don't understand API context and don't baseline normal API usage." On the [API Gateways](/notes/api-gateways) page this is the load-bearing example of business-logic attacks gateways can't see — alongside data scraping — which underpins [Salt Security](/notes/salt-security)'s moat thesis that gateway buyers are not security teams and that gateways focus on routing/performance, not behavioral security.

**Context:** BOLA (also called IDOR, Insecure Direct Object Reference) is an access-control flaw where an API fails to verify that the requesting user is authorized for the specific object being accessed, letting an attacker reach other users' data by manipulating an ID. It has topped the OWASP API Security Top 10.

## Where this appears

- [API Gateways](/notes/api-gateways) — cited as a key business-logic attack class gateways cannot catch, central to the Salt Security moat argument.
- [OWASP](/notes/owasp) — identified as API1:2019, the most common API threat (~40% of attacks), requiring behavioral detection.
