---
title: "AWS API Gateway"
type: "concept"
publish: false
confidence: "low"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/concepts/API Gateways.md"
tags: []
aliases:
  - "AWS API Gateway"
related:
  - "[[API Gateways]]"
---

# AWS API Gateway

Amazon's managed API gateway, cited in [API Gateways](/notes/api-gateways) as one example of the gateway category alongside [Kong](/notes/kong), [MuleSoft](/notes/mulesoft), [Apigee](/notes/apigee), Azure API Management, and GCP. The wiki's framing — drawn from the Salt Security Diligence — 2021 notes — is that all of these tools "originally [solved] management/governance, not security." API gateways enforce authentication and handle routing/publishing, but they "can't baseline normal behavior or detect anomalies," which is the gap Salt Security's API-security thesis exploits. The diligence note also observes that the number of APIs an enterprise actually runs on its gateways "are very minimal," so the gateway alone gives no visibility into the full API surface that exists.

**Context:** Amazon API Gateway is an AWS managed service for creating, publishing, and securing REST, HTTP, and WebSocket APIs at scale, handling traffic management, authorization, throttling, and monitoring for backend services (often AWS Lambda).

## Where this appears

- [API Gateways](/notes/api-gateways) — listed as a gateway example that solves management/governance rather than API security, per the Salt Security diligence framing.
