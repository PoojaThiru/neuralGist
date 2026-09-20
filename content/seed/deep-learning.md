---
title: Deep Learning: Stacking Simple Things Until They Get Smart
topic: deep-learning
featured: false
excerpt: A neural network is layers of "multiply, add, squash." Backpropagation figures out which numbers to change. Transformers add one trick: attention.
---
A deep network is embarrassingly simple to describe and surprisingly hard to build intuition for. Let's do both.

## The building block

A **layer** takes a vector, multiplies it by a matrix of weights, adds a bias vector, and applies a nonlinearity (ReLU: replace negatives with zero). That's it.

```python
h = relu(W @ x + b)
```

Stack a few and you can approximate any function. The weights are what training adjusts.

## Backpropagation

Training needs to know: "if I nudge this weight up a bit, does the loss go up or down?" for every weight. Computing that one at a time would be hopeless. Backprop uses the chain rule to compute all of them in one backward pass, layer by layer, reusing intermediate results. Every framework (PyTorch, JAX) does this for you via **autograd**; you write the forward pass, it derives the backward.

Then **gradient descent** (usually Adam, a smarter variant) takes a small step against the gradient. Millions of steps later, the network works.

## Why "deep" matters

Early layers learn simple features (edges, letter shapes, word pieces). Later layers combine them (faces, phrases, meaning). Depth lets the network build a hierarchy instead of memorizing lookup tables. This compositionality is why the same recipe works for images, audio, protein folding, and text.

## The transformer, in one paragraph

Older sequence models processed tokens one at a time and forgot things. The transformer processes all tokens at once and lets each token **attend** to every other: for each token, compute a weighted mix of the other tokens, where the weights come from how relevant they are (a learned similarity between a "query" and "keys"). Stack attention with the standard layers, add position information, repeat 30–100 times. The result scales beautifully with data and compute, which is the actual reason the modern era happened.

## Things that make training work in practice

- **Normalization** (LayerNorm) keeps activations in a sane range so gradients don't explode or vanish.
- **Residual connections** (`x + layer(x)`) let gradients flow through very deep stacks.
- **Learning-rate schedules** (warm up, then decay) are unreasonably important.
- **Mixed precision** halves memory and doubles speed for almost no cost.
- **Data quality** beats architecture tweaks nearly every time.

## Where to go from here

Build a tiny one. A character-level language model in 200 lines of PyTorch will teach you more than any lecture. Then read about scaling laws, then [GPUs](/topics/gpus), then go make something.
