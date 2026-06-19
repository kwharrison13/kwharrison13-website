---
title: "Snyk"
type: "company"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-19"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
  - "wiki/meetings/September 22nd, 2021 — API Security Transcript (Salt Security).md"
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
  - "[[Prabhath Karanth]]"
  - "[[DevSecOps]]"
  - "[[David Mark]]"
---

# Snyk

**One-line:** *Developer security platform; in Kyle's Salt Security diligence it's the "command-line" pole of [Developer-Led Security](/notes/developer-led-security) — scanning code and dependencies at build time, contrasted with [Salt Security](/notes/salt-security)'s runtime / surface-area approach.*

## What we know

- One of two ways to play [Developer-Led Security](/notes/developer-led-security): at the command line (Snyk) vs. around the surface (Salt Security). (Salt Security Diligence — 2021)
- Integrated into the [CI/CD](/notes/ci-cd) pipeline so everything is linked and developers stay aware — held up by reference [David Mark](/notes/david-mark) as the model for how API-security alerts should reach developers. (Salt Security Diligence — 2021)
- Has a false-positive problem similar to Salt Security: identifies many vulnerabilities but leaves the user to decide whether each is high-risk. (Salt Security Diligence — 2021)
- Cited as the expansion trajectory API-security vendors should follow: *"When Snyk started they had a specific process around code policy, but they've expanded pretty significantly."* (Salt Security Diligence — 2021)
- Named alongside SonarCloud under [Application Security](/notes/application-security) as part of writing code securely. (Salt Security Diligence — 2021)

## Context hub

- Salt Security Diligence — 2021 — diligence dossier where Snyk recurs as the developer-security comparison.
- September 22nd, 2021 — API Security Transcript (Salt Security) — transcript framing Snyk vs. Salt as the two ways to play developer-led security.
- [David Mark](/notes/david-mark) — reference-call source citing Snyk's CI/CD integration, false-positive problem, and expansion trajectory.
- [Developer-Led Security](/notes/developer-led-security) · [CI/CD](/notes/ci-cd) · [DevSecOps](/notes/devsecops) — Snyk's category and integration point.
- [Salt Security](/notes/salt-security) · [Traceable.ai](/notes/traceable-ai) · [Noname Security](/notes/noname-security) — the API-security companies compared against Snyk's model.

## Mentioned in

- Salt Security Diligence — 2021 — recurring developer-security comparison throughout customer reference calls.
- September 22nd, 2021 — API Security Transcript (Salt Security) — "two ways to play developer-led security: Snyk at the command line, Salt around the surface."
