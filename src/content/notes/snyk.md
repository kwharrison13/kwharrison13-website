---
title: "Snyk"
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
  - "developer-tools"
  - "devops"
aliases:
  - "Snyk"
related:
  - "[[Salt Security Diligence — 2021]]"
  - "[[Developer-Led Security]]"
  - "[[Salt Security]]"
  - "[[CI/CD]]"
---

# Snyk

**One-line definition:** *Developer security platform; the "command-line" approach to [Developer-Led Security](/notes/developer-led-security) — scanning code and dependencies at build time vs. [Salt Security](/notes/salt-security)'s runtime/surface-area approach.*

## How sources describe it

- Represents one of two ways to play developer-led security: at the command line (Snyk) vs. around the surface (Salt Security). (Salt Security Diligence — 2021)
- Integrated into [CI/CD](/notes/ci-cd) pipeline — everything is linked so developers are aware; held up as the model for how API security alerts should be delivered to developers. ([David Mark](/notes/david-mark), Salt Security Diligence — 2021)
- Also has a false-positive problem similar to Salt Security — identifies many vulnerabilities but requires manual triage for risk level. ([David Mark](/notes/david-mark), Salt Security Diligence — 2021)
- "When Snyk started they had a specific process around code policy, but they've expanded pretty significantly" — held up as the expansion trajectory API security vendors should follow. ([David Mark](/notes/david-mark), Salt Security Diligence — 2021)

## Where it shows up

- Salt Security Diligence — 2021 — recurring comparison throughout customer reference calls.

## Related concepts

- [Developer-Led Security](/notes/developer-led-security) — Snyk is the defining example of the command-line approach
- [Salt Security](/notes/salt-security) — runtime complement to Snyk's shift-left approach
- [CI/CD](/notes/ci-cd) — Snyk's integration point
