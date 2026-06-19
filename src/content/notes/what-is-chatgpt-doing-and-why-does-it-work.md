---
title: "What Is ChatGPT Doing and Why Does It Work?"
type: "longform"
format: "article"
publish: true
excerpt: "Stephen Wolfram walks through the mechanics of how ChatGPT generates text — from next-word probability to neural nets to the remarkable fact that meaningful human language may have more structure and simplicity than we ever knew."
author: "Stephen Wolfram"
url: "https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/"
source_published: "2023-02-14"
confidence: "high"
created: "2026-06-17"
updated: "2026-06-19"
last_updated_by: "agent"
sources:
  - "https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/"
tags:
  - "technological-innovation"
  - "language-of-discourse"
aliases:
  - "What Is ChatGPT Doing and Why Does It Work?"
  - "What Is ChatGPT Doing"
related:
  - "[[Stephen Wolfram]]"
  - "[[ChatGPT]]"
  - "[[Neural Nets]]"
  - "[[Large Language Models]]"
  - "[[Capitalism]]"
  - "[[Agriculture]]"
  - "[[Parenting]]"
  - "[[Family]]"
---

## Key Highlights

- ChatGPT is "always fundamentally trying to produce a 'reasonable continuation' of whatever text it's got so far — what one might expect someone to write after seeing what people have written on billions of webpages."
- Generating an essay is just asking "given the text so far, what should the next word be?" — over and over.
- Always picking the highest-probability next word produces "flat" essays with no creativity. Introducing randomness (temperature) yields more interesting output.
- There are ~40,000 commonly used words in English. Even 2-gram probabilities require 1.6 billion estimates; 3-grams: 60 trillion. 20-word fragments: more possibilities than particles in the universe — impossible to enumerate, must be approximated.
- Neural nets — invented in the 1940s in a form close to today's — are "simple idealizations of how brains seem to work."
- GPT's 175 billion parameters are "just" enough to model next-word probabilities "well enough" for essay-length text.
- Training: present input→output examples, adjust weights via gradient descent ("backprop" using the chain rule of calculus). Repeat across many "epochs."
- "There's never a 'model-less model' — any model has particular underlying structure and knobs to tune."
- The same neural net architecture often works for seemingly very different tasks — possibly because the tasks we give nets are "human-like," and nets capture quite general human-like processes.
- "The success of ChatGPT implicitly reveals an important scientific fact: there's actually a lot more structure and simplicity to meaningful human language than we ever knew."
- Wolfram's experiment: decomposing "I bought two pounds of apples for my children" — each phrase connects to deep conceptual underpinnings (individualism/capitalism, measurement/math, agriculture, family/parenting).

## Connections

- [Capitalism](/notes/capitalism) — Wolfram's decomposition of "I bought two pounds of apples" traces the act of buying back to the conceptual underpinnings of individualism and capitalism.
- [Agriculture](/notes/agriculture) — the same sentence-decomposition experiment grounds "apples" in agriculture as one of the deep concepts encoded in everyday language.
- [Family](/notes/family) — "for my children" anchors the example sentence in the concept of family.
- [Parenting](/notes/parenting) — the "my children" phrase connects the example to parenting as one of the human-conceptual layers underlying ordinary speech.
