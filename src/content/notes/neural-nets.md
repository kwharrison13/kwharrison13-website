---
title: "Neural Nets"
type: "concept"
publish: false
confidence: "low"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/long-reads/What Is ChatGPT Doing and Why Does It Work.md"
tags: []
aliases:
  - "Neural Nets"
  - "Neural Networks"
related:
  - "[[What Is ChatGPT Doing and Why Does It Work]]"
---

# Neural Nets

In Stephen Wolfram's [What Is ChatGPT Doing and Why Does It Work](/notes/what-is-chatgpt-doing-and-why-does-it-work), neural nets are the technical machinery that makes ChatGPT's next-word prediction possible. Wolfram describes them as inventions of the 1940s — "in a form close to today's" — and as "simple idealizations of how brains seem to work." The piece frames GPT's 175 billion parameters as "just" enough to model next-word probabilities "well enough" for essay-length text, and explains training as presenting input-output examples and adjusting weights via gradient descent ("backprop," using the chain rule of calculus) across many "epochs."

A recurring observation in the essay is that the same neural-net architecture often works across seemingly very different tasks — possibly because the tasks we hand nets are "human-like," so nets end up capturing quite general human-like processes. Wolfram folds this into his larger claim that ChatGPT's success "implicitly reveals an important scientific fact: there's actually a lot more structure and simplicity to meaningful human language than we ever knew."

**Context:** Artificial neural networks are computing systems of interconnected nodes ("neurons") loosely inspired by biological brains, in which connection weights are tuned through training so the network learns to map inputs to outputs. They are the foundational architecture behind modern deep learning and large language models.

## Where this appears

- [What Is ChatGPT Doing and Why Does It Work](/notes/what-is-chatgpt-doing-and-why-does-it-work) — Wolfram presents neural nets (1940s origins, parameters, gradient-descent training) as the core mechanism behind ChatGPT's word-by-word text generation.
