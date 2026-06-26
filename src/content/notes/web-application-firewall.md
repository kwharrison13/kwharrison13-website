---
title: "Web Application Firewall"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/concepts/API.md"
  - "wiki/companies/Signal Sciences.md"
tags: []
aliases:
  - "Web Application Firewall"
related:
  - "[[API]]"
  - "[[Signal Sciences]]"
  - "[[Web Application Firewall (WAF)]]"
  - "[[Fastly]]"
---

# Web Application Firewall

In the wiki, the Web Application Firewall is the legacy control that protects an app's front-end while leaving the API surface exposed. The [API](/notes/api) page captures the framing from the September 22nd, 2021 — API Security Transcript (Salt Security): "web application firewalls protect the front-end yet leave the API interface open to brute-forcing, unauthenticated access, and scraping." [Signal Sciences](/notes/signal-sciences) is the concrete WAF vendor in the corpus — a WAF company acquired by [Fastly](/notes/fastly) (competing with [Cloudflare](/notes/cloudflare) on application firewalls) and evaluated during Salt Security diligence. [Nir Rothenberg](/notes/nir-rothenberg)'s verdict captures the WAF-vs-API-security distinction: "Great WAF. Really close to understanding the implications of their business but its a WAF" — good (not great) at API protection, not worth switching to for a marginally better firewall.

**Context:** A Web Application Firewall sits in front of a web application and filters/blocks malicious HTTP traffic via rules and signatures (SQL injection, XSS, etc.). It defends the front-end web layer but does not, on its own, understand or baseline API business logic — the gap that the dedicated API-security category exists to fill.

This is the same concept as [Web Application Firewall (WAF)](/notes/web-application-firewall-waf) — see that page for the [OWASP](/notes/owasp) / [API Security](/notes/api-security) thread.

## Where this appears

- [API](/notes/api) — WAFs protect the front-end but leave the API interface open to brute-forcing, unauthenticated access, and scraping (Salt Security transcript).
- [Signal Sciences](/notes/signal-sciences) — a WAF company (acquired by [Fastly](/notes/fastly)) evaluated during Salt Security diligence; judged a strong WAF but not a full API-security platform.
