---
title: "Gradient Descent"
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
  - "Gradient Descent"
related:
  - "[[What Is ChatGPT Doing and Why Does It Work]]"
---

# Gradient Descent

Gradient descent appears in [What Is ChatGPT Doing and Why Does It Work](/notes/what-is-chatgpt-doing-and-why-does-it-work) as the core training mechanism behind large language models. In Stephen Wolfram's account, training a model like ChatGPT means presenting input→output examples and "adjusting weights via gradient descent ('backprop' using the chain rule of calculus)," repeated across many "epochs." It is the procedure that tunes GPT's roughly 175 billion parameters until they model next-word probabilities "well enough" to produce essay-length text — the knobs that get turned so the network can predict a "reasonable continuation" of whatever text it has so far.

Wolfram frames this within his broader point that there is "never a 'model-less model'" — any model has underlying structure and knobs to tune — and gradient descent is the method by which those knobs are set from data rather than by hand.

**Context:** Gradient descent is an optimization algorithm that iteratively adjusts a model's parameters in the direction that most reduces a loss/error function; backpropagation is the technique for efficiently computing those gradients through a neural network using the chain rule of calculus. Together they are the workhorse of modern deep-learning training.

## Where this appears

- [What Is ChatGPT Doing and Why Does It Work](/notes/what-is-chatgpt-doing-and-why-does-it-work) — named as the training mechanism (backprop via the chain rule) that tunes GPT's billions of parameters across training epochs.
