---
title: "Fivetran"
type: "company"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-25"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Pave Diligence — 2021.md"
  - "wiki/meetings/November 18th, 2021 — Airbyte (Pre-Brief from Bryan Offutt).md"
  - "wiki/meetings/September 17th, 2021 — Monad Pre-Brief (Max Rimpel).md"
tags:
  - "data-infrastructure"
  - "etl"
aliases:
  - "Fivetran"
related:
  - "[[Airbyte]]"
  - "[[Snowflake ($SNOW)]]"
  - "[[Monad]]"
  - "[[Starburst]]"
---

# Fivetran

Fivetran is the incumbent managed-ETL/ELT data-pipeline company that recurs across Kyle's diligence notes as the reference point for data-movement businesses. It moves data from raw sources into warehouses like Snowflake; its per-active-row pricing model is cited as the template others copy (e.g. [Monad](/notes/monad), pitched as "Fivetran for security," planned to charge "per active row, similar to Fivetran"). In the Airbyte pre-brief, Bryan Offutt frames Fivetran as both the benchmark and the vulnerability: valued at ~$5B and generating $100M+ revenue, but with declining connector quality as its closed-source approach struggles to scale connector maintenance, and customers (KeepTruckin, Mapbox, Boulevard) looking for a way out over pricing and degraded support — the open-source thesis for [Airbyte](/notes/airbyte) is built directly against that opening.

Fivetran also shows up as a known customer comp inside diligence: the Pave Diligence — 2021 dossier lists it among Pave's customers, and the [Starburst](/notes/starburst) diligence notes Matillion and Fivetran "helping" on data integration. In the [Munger](/notes/charlie-munger-the-psychology-of-human-misjudgment) long-read, Kyle attached a self-critical note about Fivetran diligence: framing questions as "how does this compare to [Snowflake ($SNOW)](/notes/snowflake-snow)?" was "the wrong question because they're so different that it can make you think Fivetran is bad just because it's not as important as Snowflake" — a worked example of comparison-anchoring bias.

**Context:** Fivetran is an automated data-integration (ETL/ELT) company founded in 2012 that provides managed connectors syncing data from SaaS apps and databases into cloud data warehouses. It is a recognized leader in the modern data stack alongside dbt, Snowflake, and Databricks.

## Where this appears

- Pave Diligence — 2021 — listed among Pave's customers.
- November 18th, 2021 — Airbyte (Pre-Brief from Bryan Offutt) — the incumbent [Airbyte](/notes/airbyte) is positioned against; "Fivetran vulnerable" on pricing and connector quality.
- September 17th, 2021 — Monad Pre-Brief (Max Rimpel) — "[Monad](/notes/monad) = Fivetran for security"; per-active-row pricing comparison; copy-cat risk.
- Starburst - Diligence — Matillion and Fivetran "helping" on data integration.
- Actively - Diligence — cited as the ETL tool normalizing data via APIs; alternative for data-engineering teams.
- [Charlie Munger — The Psychology of Human Misjudgment](/notes/charlie-munger-the-psychology-of-human-misjudgment) — Kyle's note on comparison-anchoring bias in Fivetran-vs-[Snowflake ($SNOW)](/notes/snowflake-snow) diligence.
