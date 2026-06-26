---
title: "SIEM"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-25"
last_updated_by: "agent"
sources:
  - "wiki/meetings/September 17th, 2021 — Monad Pre-Brief (Max Rimpel).md"
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
tags:
  - "security"
  - "cybersecurity"
aliases:
  - "SIEM"
  - "Security Information and Event Management"
related:
  - "[[September 17th, 2021 — Monad Pre-Brief (Max Rimpel)]]"
  - "[[Salt Security Diligence — 2021]]"
  - "[[Splunk]]"
  - "[[Cribl]]"
---

# SIEM

**Security Information and Event Management** — the category for log-aggregation and alerting platforms (the canonical example being [Splunk](/notes/splunk)) — shows up in Kyle's security diligence as both the incumbent these startups compete with and a category they might absorb. In the September 17th, 2021 — Monad Pre-Brief (Max Rimpel) note, [Monad](/notes/monad) ("Fivetran for security") treats traditional and cloud SIEMs like [Splunk](/notes/splunk), Panther, and [Cribl](/notes/cribl) as "mildly competitive," dismissing them as "closed systems that are difficult to manage, can't be accessed outside of the security teams and generally do little more than log aggregation and alerting" — with the upside that Monad could become "the path of least resistance to build functionality that could replace the SIEM."

In the Salt Security Diligence — 2021 dossier, SIEM appears on the integration side: customers run [Splunk](/notes/splunk) as their SIEM and pipe Salt's API-security alerts into it (alongside Slack, Jira), and the notes float that Salt could itself "become a part of SIEM" given how much of the system it already evaluates.

**Context:** A SIEM platform ingests logs and security events from across an organization's systems, correlates them, and generates alerts for threat detection and compliance. Splunk is the best-known vendor; the category is often criticized for cost, complexity, and being siloed within security teams.

## Where this appears

- September 17th, 2021 — Monad Pre-Brief (Max Rimpel) — SIEMs (Splunk, Panther, Cribl) framed as closed, log-aggregation-only systems Monad views as mildly competitive and could eventually replace.
- Salt Security Diligence — 2021 — SIEM (Splunk) as an integration target for Salt's alerts, and a category Salt might expand into.
