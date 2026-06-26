---
title: "Security Operations Center (SOC)"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/people/Prabhath Karanth.md"
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
tags: []
aliases:
  - "Security Operations Center (SOC)"
  - "SOC"
related:
  - "[[Prabhath Karanth]]"
  - "[[Salt Security Diligence — 2021]]"
  - "[[Jira]]"
---

# Security Operations Center (SOC)

The centralized team and function that ingests security signals, triages them, and dispatches action. In Kyle's corpus it appears as the **operational endpoint for API-security tooling** in the Salt Security Diligence — 2021 notes. [Prabhath Karanth](/notes/prabhath-karanth) describes the pattern at TripActions: a product security team runs a centralized SOC that takes in signals "from Salt and all others," does triage to identify actionable risks, and then dispatches the work to engineering via [Jira](/notes/jira). Notably, the SOC responds to those signals "independent of Salt" — the vendor feeds the pipeline but the SOC owns response.

The diligence also surfaces a gap the SOC creates for API-security buyers: "Does your Security Operations Center understand API attacks? They don't know what that looks like, they're too focused on ransomware and other attacks" — the SOC lacks the expertise, which is part of the buying case for a specialized tool like [Salt Security](/notes/salt-security) that translates raw API signals into something a generalist SOC can triage and route into developer tooling (Jira, Slack, PagerDuty, SIEM).

**Context:** A Security Operations Center (SOC) is a centralized unit — staffed by analysts and engineers — that monitors, detects, and responds to cybersecurity threats across an organization, typically using a SIEM and ticketing/alerting integrations to triage and remediate incidents.

## Where this appears

- [Prabhath Karanth](/notes/prabhath-karanth) — at TripActions, Salt signals feed a centralized SOC, triaged by product security, then dispatched to engineering via Jira
- Salt Security Diligence — 2021 — the SOC as the response endpoint for API signals, plus the "SOCs don't understand API attacks" expertise gap that motivates a specialized tool
