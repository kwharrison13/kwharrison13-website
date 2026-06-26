---
title: "Application Security"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Noname Security - Diligence.md"
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
  - "wiki/diligence-research/Coder - Diligence.md"
tags:
  - "cybersecurity"
  - "api-security"
aliases:
  - "Application Security"
  - "AppSec"
related:
  - "[[API Security]]"
  - "[[Snyk]]"
  - "[[Developer Productivity]]"
  - "[[Prabhath Karanth]]"
  - "[[Noname Security - Diligence]]"
reference_count: 1
---

# Application Security

Application Security (AppSec) is the discipline of writing and shipping code securely — secure coding, static analysis, web-application and container security, penetration testing, and the [API Security](/notes/api-security) layer — and it recurs across Kyle's security diligence as a sizing-and-priority framework. In the Salt Security Diligence — 2021 expert calls, AppSec is ranked as the **#2 attack-vector priority** (behind [Endpoint Security](/notes/endpoint-security), ahead of compliance), described as "code is written in a secure way" and exemplified by [Snyk](/notes/snyk) and SonarCloud, with API security sitting inside it as a "medium" sub-category. [Prabhath Karanth](/notes/prabhath-karanth) uses the same stack — Endpoint, then AppSec (API security medium within it), then Compliance.

The recurring strategic question in the Noname Security - Diligence notes is whether API security stays a standalone category or gets consolidated into a broader AppSec tool: experts grant that it could fold in, but argue API security "probably is the largest and fastest growing area" within AppSec as APIs become a primary threat vector. The same shift shows up as an investment tailwind in Coder - Diligence, where a "shift left in Application Security" is one of three drivers (with [Developer Productivity](/notes/developer-productivity) and [Remote Work](/notes/remote-work)) behind the thesis that development moves to the cloud.

**Context:** Application security covers the tools and practices for protecting software at the application layer across the development lifecycle — including SAST/DAST scanning, software-composition/dependency analysis, web-application firewalls, and API security. Vendors named in Kyle's notes include Snyk, SonarCloud, Salt Security, and Noname Security.

## Where this appears

- Salt Security Diligence — 2021 — AppSec ranked #2 attack vector; Snyk/SonarCloud as exemplars; API security "medium" within it
- Noname Security - Diligence — debate over whether API security consolidates into broader AppSec; framed as its fastest-growing slice
- Coder - Diligence — "shift left in Application Security" as a driver of cloud-development adoption
- [Snyk](/notes/snyk) — named under AppSec as part of writing code securely
- [Developer Productivity](/notes/developer-productivity) — paired with the AppSec shift-left in the cloud-dev thesis
- November 15th, 2021 — Ken Elefant (API Security) — bear/bull case on AppSec valuations (Salt, Noname)
- [Prabhath Karanth](/notes/prabhath-karanth) — security priority stack placing AppSec second, API security medium within it
