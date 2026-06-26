---
title: "Web Application Firewall (WAF)"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/concepts/API Security.md"
  - "wiki/concepts/OWASP.md"
tags: []
aliases:
  - "Web Application Firewall (WAF)"
  - "WAF"
related:
  - "[[API Security]]"
  - "[[OWASP]]"
  - "[[Web Application Firewall]]"
  - "[[API Gateways]]"
---

# Web Application Firewall (WAF)

In the wiki, WAFs recur as the legacy security control that [API Security](/notes/api-security) vendors define themselves against. The [API Security](/notes/api-security) page summarizes the diligence argument: WAFs are binary (stop/allow) and "can't understand API business logic" ([Nir Rothenberg](/notes/nir-rothenberg)) — which is why discovering, monitoring, and protecting APIs at runtime is treated as a distinct, emerging category rather than something a WAF already covers. The [OWASP](/notes/owasp) page sharpens the point with the top API threat, API1:2019 Broken Object Level Authorization (BOLA), which accounts for ~40% of API attacks and "requires behavioral analysis to detect; not catchable by WAF signature matching or gateway policies." The recurring framing: "Traditional security controls like WAFs and [API Gateways](/notes/api-gateways) miss these types of attacks because they don't understand API context and don't baseline normal API usage." The CapitalOne breach is cited as the cautionary case — using a WAF (mod_security) for API protection led to a server-side request forgery attack.

**Context:** A Web Application Firewall is a security layer that filters, monitors, and blocks HTTP traffic to and from a web application, typically using signature- and rule-based detection (e.g. for SQL injection or cross-site scripting). WAFs protect the front-end web surface but, by design, operate on request patterns rather than the application's underlying business logic.

This is the same concept as [Web Application Firewall](/notes/web-application-firewall) — see that page for the [Signal Sciences](/notes/signal-sciences) / [Fastly](/notes/fastly) vendor thread.

## Where this appears

- [API Security](/notes/api-security) — WAFs framed as binary and blind to API business logic, the core reason API security is its own category.
- [OWASP](/notes/owasp) — WAF signature matching can't catch BOLA-class attacks; CapitalOne's WAF-for-APIs choice cited as the cautionary SSRF case.
