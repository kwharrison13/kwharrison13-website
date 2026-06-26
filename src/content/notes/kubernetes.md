---
title: "Kubernetes"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Noname Security - Diligence.md"
  - "wiki/diligence-research/Coder - Diligence.md"
tags:
  - "devops"
  - "infrastructure"
aliases:
  - "Kubernetes"
  - "k8s"
related:
  - "[[Coder - Diligence]]"
  - "[[Noname Security - Diligence]]"
reference_count: 2
---

# Kubernetes

Kubernetes shows up across Kyle's diligence research as core infrastructure context for two cloud/DevOps deals. In Coder - Diligence, Kubernetes is the deployment substrate — Coder "is currently deployed on Kubernetes," installed via the customer's Kubernetes provider of choice — but the diligence also flags a strategic risk: longer term, Coder aims to "shift away from reliance on Kubernetes" to stay compatible with dev teams that don't use it. One pilot user (a Lead Data Scientist & MLOps lead at Roche) frames the appeal as "since we already have a Kubernetes cluster running it seemed like a nice take on scaling the dev in the cloud," keeping compute close to data hosted in AWS.

In Noname Security - Diligence, Kubernetes appears on the threat-surface side of the API-security landscape (2021): the company has "k8s-based security needs," and an expert flags that parts of the security domain are "oversaturated" with "a lot of Kubernetes security plays" — i.e., k8s security as a crowded sub-market.

**Context:** Kubernetes (often "k8s") is an open-source container-orchestration platform originally developed at Google and donated to the Cloud Native Computing Foundation. It automates deployment, scaling, and management of containerized applications and has become the de facto standard for cloud-native infrastructure.

## Where this appears

- Coder - Diligence — Coder's Kubernetes deployment model, the strategic goal to reduce Kubernetes dependence, and a pilot user's "compute close to data" rationale.
- Noname Security - Diligence — Kubernetes as both a security need (k8s-based) and an oversaturated security sub-domain in the API-security landscape.
