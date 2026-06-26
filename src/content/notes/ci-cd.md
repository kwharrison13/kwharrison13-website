---
title: "CI/CD"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Noname Security - Diligence.md"
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
  - "wiki/companies/Snyk.md"
tags:
  - "devops"
aliases:
  - "CI/CD"
  - "Continuous Integration"
  - "Continuous Delivery"
related:
  - "[[Noname Security - Diligence]]"
  - "[[David Mark]]"
  - "[[Jenkins]]"
  - "[[Traceable.ai]]"
  - "[[DevSecOps]]"
  - "[[Snyk]]"
---

# CI/CD

CI/CD (continuous integration / continuous delivery) is the automated build-test-deploy pipeline, and in Kyle's security diligence it functions as the **integration test** for whether a security tool actually fits developer workflows. The recurring lesson from the Salt Security Diligence — 2021 reference calls is that alerts have to live inside the pipeline: [Snyk](/notes/snyk) is held up as the model precisely because it's integrated into CI/CD so issues are "tested and linked or else people won't be aware," whereas Salt's chief critique (from [David Mark](/notes/david-mark)) is that its alerts require manual triage, aren't integrated into CI/CD / developer workflows, primarily serve security teams rather than DevOps, and carry a high false-positive rate. "Shift-left" tools that integrate into the pipeline can flag issues before production — capturing ~75% of the problems early.

CI/CD is also the differentiating axis between API-security vendors: [Traceable.ai](/notes/traceable-ai) is positioned as covering the full [DevSecOps](/notes/devsecops) lifecycle — CI/CD testing *and* production monitoring — which is its angle against Salt Security ([Nir Rothenberg](/notes/nir-rothenberg), CISO at Rapyd). [Jenkins](/notes/jenkins) appears as the legacy open-source automation server representing the older CI/CD ecosystem.

**Context:** CI/CD automates merging code changes (continuous integration), then testing and releasing them (continuous delivery/deployment), via pipeline tools such as Jenkins, GitHub Actions, GitLab CI, and CircleCI. "Shift-left" security means embedding scanning into these pipelines so vulnerabilities are caught before production.

## Where this appears

- Salt Security Diligence — 2021 — Snyk's CI/CD integration as the model; Salt's manual-triage alerts criticized for not fitting CI/CD
- Noname Security - Diligence — pipeline integration flags issues pre-production (~75% caught); Traceable's full-lifecycle CI/CD focus
- [Snyk](/notes/snyk) — held up as the model for CI/CD-integrated, developer-facing security alerts
- [Traceable.ai](/notes/traceable-ai) — differentiates on spanning CI/CD testing plus production monitoring
- [DevSecOps](/notes/devsecops) — the discipline that plugs security into the CI/CD pipeline
- [Jenkins](/notes/jenkins) — legacy open-source CI/CD automation server
- [David Mark](/notes/david-mark) — reference source whose critique of Salt centered on its lack of CI/CD integration
