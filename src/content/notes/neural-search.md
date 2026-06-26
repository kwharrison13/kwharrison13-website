---
title: "Neural Search"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-25"
last_updated_by: "agent"
sources:
  - "wiki/meetings/November 8th, 2021 — George Sivulka (Hebbia).md"
tags:
  - "ai"
  - "enterprise-search"
aliases:
  - "Neural Search"
related:
  - "[[Hebbia]]"
  - "[[George Sivulka]]"
reference_count: 1
---

# Neural Search

Neural search is the core technology behind [Hebbia](/notes/hebbia), the enterprise-search startup Kyle diligenced in his November 8, 2021 call with founder [George Sivulka](/notes/george-sivulka). In contrast to keyword search, Hebbia's neural (semantic) search lets a user ask a natural-language question — e.g. "what are the risks to the business?" — over a corpus of unstructured documents (SEC filings, data rooms, legal contracts, even recipes) and get a direct answer rather than a list of hits. Sivulka described using the same semantic capability to auto-fill pre-existing fields and surface all the relevant information, which is what made it valuable to data analysts and others synthesizing across large document sets (e.g. parsing 1M LP agreements to work out a waterfall).

The distinctive claim from the call was **generality**: Sivulka said his PhD work was aimed not just at ML search but at "a better way for neural search to be general" — so the product already works across medical-school textbooks, legal agreements, and PE/insurance data rooms without per-use-case training. The competitive question Kyle noted was specificity vs. generality — whether Hebbia should narrow down (they could "model [Elastic](/notes/elastic) and sell it as an API") or stay broad.

**Context:** Neural / semantic search uses learned vector embeddings of text so that retrieval is based on meaning rather than literal keyword overlap, typically paired with a language model to generate answers — the retrieval-augmented pattern underpinning many enterprise AI document tools.

## Where this appears

- November 8th, 2021 — George Sivulka (Hebbia) — product deep-dive on Hebbia's neural search: natural-language Q&A over unstructured docs, target customers, and the goal of a general (untrained) search.
