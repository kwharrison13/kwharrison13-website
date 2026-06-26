---
title: "Swagger"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Noname Security - Diligence.md"
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
  - "wiki/companies/Postman.md"
tags:
  - "api-security"
aliases:
  - "Swagger"
  - "OpenAPI"
related:
  - "[[Noname Security - Diligence]]"
  - "[[Salt Security Diligence — 2021]]"
  - "[[API Security]]"
  - "[[Postman]]"
---

# Swagger

The OpenAPI specification and tooling for describing and documenting APIs, which surfaces across Kyle's [API Security](/notes/api-security) diligence as both an integration point and an interoperability standard. In the Noname diligence (and the identically-worded passage in the Salt Security diligence), an expert notes Noname-style scanners "do integrate with [Swagger](/notes/swagger)" but maybe not [Postman](/notes/postman) — flagging Postman integration as a possible product gap and feature opportunity. In the Salt diligence, Swagger appears again as a *portability* standard: as long as gateways (MuleSoft, AWS, etc.) "follow Swagger standards you should be able to move your APIs and not have to be distributed across gateways."

Across these notes Swagger functions as connective tissue in the API tooling stack — the spec security and gateway products integrate against, and the reason API definitions can move between vendors.

**Context:** Swagger is the original name for what is now the OpenAPI Specification, a machine-readable format (JSON/YAML) for describing REST APIs, plus a toolset (SwaggerUI, Swagger Editor) for generating docs, clients, and tests from that spec. SmartBear maintains the Swagger tooling; the spec itself is governed by the OpenAPI Initiative.

## Where this appears

- Noname Security - Diligence — Noname integrates with Swagger; Postman integration flagged as a possible feature
- Salt Security Diligence — 2021 — same integration note, plus Swagger as the gateway-portability standard (MuleSoft, AWS)
- [Postman](/notes/postman) — discussed as a potential Swagger-adjacent integration target in the Noname diligence
