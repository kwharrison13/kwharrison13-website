---
title: "Airbyte"
type: "company"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-25"
last_updated_by: "agent"
sources:
  - "wiki/meetings/November 18th, 2021 — Airbyte (Pre-Brief from Bryan Offutt).md"
  - "wiki/meetings/November 8th, 2021 — Global Deal Flow.md"
tags:
  - "data-infrastructure"
  - "elt"
  - "open-source"
  - "vertical-saas"
aliases:
  - "Airbyte"
related:
  - "[[Fivetran]]"
  - "[[Bryan Offutt]]"
---

# Airbyte

Open-source data-integration company that does ELT (extract, load, transform) — moving data from raw sources into a warehouse like Snowflake, where transformations happen after the fact (often via dbt) rather than before load. The November 18th, 2021 — Airbyte (Pre-Brief from Bryan Offutt) memo describes it as the "air traffic control" for data, and frames its key insight as open-sourcing connector maintenance: rather than trying to build and maintain every connector itself (the painful approach that, per the memo, is degrading [Fivetran](/notes/fivetran)'s quality as it scales), Airbyte incentivizes its community to own connectors through a revenue-share model while Airbyte enforces standards. This is the detail Kyle pulled out in the November 8th, 2021 — Global Deal Flow review — "Airbyte sets up a profit sharing agreement with people who maintain connectors in their ecosystem."

Bryan Offutt's pre-brief traces a near-miss history: he passed multiple times in 2020 (originally a YC "open-source Segment" idea with no adoption) before the open-source community took off and Benchmark led a $25M Series A in spring 2021. By late 2021 the project had grown from 240 to 4,500 GitHub stars, ~3,800 in Slack, and 500 companies syncing data multiple times a day, with early cloud-product conversations (Netflix, Shopify, KeepTruckin). The investment thesis: ELT is a "need to have," open source is the right structural approach, the team executes exceptionally well, and Fivetran is vulnerable on pricing and connector quality despite its $5B valuation — leaving room to steal business and expand into reverse-ETL and change-data-capture.

**Context:** Airbyte is an open-source data-movement platform (YC W20) founded by Michel Tricot and John Lafleur, widely used for ELT pipelines and known for its large community-maintained connector catalog. (General background.)

## Where this appears

- November 18th, 2021 — Airbyte (Pre-Brief from Bryan Offutt) — full investment memo: product, traction, team, thesis, and the Fivetran-vulnerability framing
- November 8th, 2021 — Global Deal Flow — flagged for its connector revenue-share / profit-sharing model
