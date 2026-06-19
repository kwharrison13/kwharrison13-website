---
title: "Venmo"
type: "concept"
publish: false
confidence: "low"
created: "2026-06-17"
updated: "2026-06-19"
last_updated_by: "agent"
sources:
  - "Roam Research daily-note export — September 22nd, 2021 (Index Ventures sourcing/diligence call log): ~/Downloads/September 22nd, 2021.md"
tags:
  - "fintech"
  - "api-security"
  - "data-leakage"
aliases:
  - "Venmo"
related:
  - "[[September 22nd, 2021 — API Security Transcript (Salt Security)]]"
  - "[[API Security]]"
  - "[[Salt Security]]"
  - "[[Payments]]"
  - "[[Index Ventures]]"
---

# Venmo

**One-line definition:** *Payments app; in 2020 ~200M transactions were scraped via its API — characterized as "data leakage," not an official breach.*

## How sources describe it

- In 2020, 200 million Venmo transactions were scraped/pulled out by querying its API; debated whether to call it a breach since it was queryable data leakage, not insider exfiltration. (September 22nd, 2021 — API Security Transcript (Salt Security))

## Where it shows up

- September 22nd, 2021 — API Security Transcript (Salt Security) — example of API data leakage.

## Related concepts

- [API Security](/notes/api-security) — the risk category illustrated
- [Payments](/notes/payments) — Venmo is the payments app whose API was scraped
- [Salt Security](/notes/salt-security) — the API-security vendor that raised the Venmo case in diligence
- [Index Ventures](/notes/index-ventures) — the firm whose sourcing/diligence call surfaced this example
