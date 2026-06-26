---
title: "ETL"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-25"
last_updated_by: "agent"
sources:
  - "wiki/companies/Starburst.md"
  - "wiki/diligence-research/Starburst - Diligence.md"
  - "wiki/meetings/September 17th, 2021 — Monad Pre-Brief (Max Rimpel).md"
tags:
  - "data-infrastructure"
aliases:
  - "ETL"
  - "Extract, Transform, Load"
related:
  - "[[Starburst]]"
  - "[[Presto]]"
  - "[[Monad]]"
  - "[[Data Lake]]"
reference_count: 3
---

# ETL

Extract, Transform, Load — "the general procedure of copying data from one or more sources into a destination system that represents the data differently from the source," as defined in Kyle's [Starburst](/notes/starburst) diligence. ETL is the foil for the data-infrastructure theses Kyle tracks: it is the expensive, IT-heavy step companies want to avoid.

In the [Starburst](/notes/starburst) / Presto thesis, the whole pitch is that a federated SQL query layer lets you "run analytics on any data set without needing to do ETL" — querying data wherever it lives (warehouse, Data Lake, on-prem) instead of paying to move and reshape it into a warehouse first. The diligence notes ETL cost as the reason most enterprises split storage between a warehouse and a cheaper data lake (S3/Hadoop): moving data in is expensive and not all data is queried often enough to justify it. Notably, the next milestone Kyle flags for Starburst runs the other way — adding write/edit and transformation (ETL-like) capability to reach feature parity with data warehouses. In the [Monad](/notes/monad) pre-brief ("Fivetran for security") from [Max Rimpel](/notes/max-rimpel), ETL is the core verb: Monad builds a common set of integrations to ETL relevant security data into a normalized repository so teams can run standard tools (SQL, data warehouses) on top.

**Context:** ETL is a foundational data-integration pattern: data is extracted from source systems, transformed into a target schema/format, and loaded into a destination (typically a data warehouse). It is contrasted with newer ELT and federated-query approaches that defer or avoid the transform/move step.

## Where this appears

- [Starburst](/notes/starburst) — the company's value prop is analytics without ETL (federated SQL over data wherever it lives)
- Starburst - Diligence — defines ETL; frames its cost as why enterprises split warehouse + data lake; flags adding ETL/write capability as a key Starburst milestone
- September 17th, 2021 — Monad Pre-Brief (Max Rimpel) — Monad ETLs security data into a normalized repository ("Fivetran for security")
