---
title: "Microservices"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/companies/Kong.md"
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
tags: []
aliases:
  - "Microservices"
related:
  - "[[API Gateways]]"
  - "[[Kong]]"
  - "[[Salt Security Diligence — 2021]]"
---

# Microservices

A software-architecture pattern that recurs in Kyle's API-infrastructure and API-security diligence as the thing that made [API Gateways](/notes/api-gateways) and API-management tooling necessary. [Kong](/notes/kong) is described as an open-source API gateway and API-mesh platform built "mainly for [Microservices](/notes/microservices) architecture," and over the period of the diligence it leaned further into microservices, observability, and service mesh. In the Salt Security Diligence — 2021 reference calls, the move to microservices is framed as both cause and complication: at [Adobe](/notes/adobe), [Prabhath Karanth](/notes/prabhath-karanth) recounts that moving to the cloud meant breaking "a giant monolith" into "hundreds of microservices" — leaving "millions of APIs, thousands of microservices, and no real way to manage that scale," which is the gap API-security tools like Salt exist to fill.

**Context:** Microservices architecture decomposes an application into small, independently deployable services that communicate over the network (often via APIs), in contrast to a single monolithic codebase. The proliferation of services-talking-to-services is a major reason API gateways, service meshes, and API-security tooling exist.

## Where this appears

- [Kong](/notes/kong) — described as an API gateway / API-mesh platform built mainly for microservices architecture.
- Salt Security Diligence — 2021 — reference calls cite the monolith-to-microservices shift as the source of unmanageable API sprawl that API-security tools address.
