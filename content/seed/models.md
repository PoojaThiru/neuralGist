---
title: What a "Model" Is, and What the Names on the Menu Mean
topic: models
featured: false
excerpt: Base, instruct, reasoning, small, frontier, open-weight, distilled. A guide to the words on the model picker and what they change for you.
---
"Which model should I use?" is unanswerable until you know what the labels mean. Here's the decoder ring.

## A model is a file (plus a recipe)

At rest, a model is a big array of numbers (the **weights**) and a description of the architecture that uses them. At runtime, you feed tokens in, and it produces a probability distribution over the next token. Sampling from that distribution repeatedly is "generation." Everything else (chat, tools, JSON mode) is convention layered on top.

## Training stages, and what each gives you

1. **Base / pretrained**: trained to predict the next token on a huge corpus. Knows a lot, follows instructions badly. Rarely what you want directly.
2. **Instruct / chat**: fine-tuned on conversations, then shaped with preference data (RLHF, DPO, or similar) to be helpful and safe. This is the default you use.
3. **Reasoning**: trained to produce long internal chains of thought before answering. Much better at math, code, and multi-step planning; slower and pricier per query. Use for hard problems, not for "extract the date."
4. **Distilled**: a small model trained to imitate a big one. Cheaper with most of the quality on common tasks.

## Size

Parameter counts (7B, 70B, 400B+) roughly track capability and exactly track cost. Bigger models know more and reason better; smaller models are faster and can run locally. The trend is that small models keep catching up to where big ones were a year ago, so revisit your choices often.

## Open-weight vs. hosted

- **Open-weight**: you can download the file and run it anywhere. Full control, your data never leaves, but you own serving, scaling, and safety.
- **Hosted API**: someone else runs it. Best models are usually here first; you pay per token and trust their data policy.

Many teams use both: hosted frontier for hard tasks, open-weight small model for cheap high-volume ones. See [model switching](/topics/model-switching).

## Modalities

Text-only, vision (images in), audio in/out, and full multimodal. Check what the specific model accepts; "multimodal" on the box doesn't mean every input type.

## The labels that actually change your code

- **Context window**: how many tokens fit. Determines your [context engineering](/topics/context-engineering) budget.
- **Tool calling**: does it emit structured tool calls reliably?
- **Structured output / JSON mode**: can it be constrained to a schema?
- **Knowledge cutoff**: what it doesn't know about. Retrieval fixes this; the model can't.

## How to choose, honestly

Write ten representative examples of your task. Run them on three candidate models. Look at the outputs. This beats every benchmark table, because benchmarks measure someone else's task.
