---
title: Context Engineering: The Window Is the Product
topic: context-engineering
featured: false
excerpt: A model only knows what's in its context window right now. Deciding what goes in, in what order, and what gets thrown out is most of the job.
---
The single most useful mental model I picked up this year: **the model has no memory, only a window.** Whatever is in that window on this call is the entire universe the model can reason about. Everything you call "memory", "knowledge", or "state" is really a decision about what to put in the window.

Context engineering is the discipline of making that decision well.

## The four buckets

Every token in the window comes from one of these:

| Bucket | Examples | Who controls it |
|---|---|---|
| Instructions | system prompt, tool definitions, output schema | you, at design time |
| Retrieved | search results, docs, database rows | your retrieval layer |
| History | prior turns, tool calls and results | the loop |
| Working state | scratchpad, plan, running summary | the agent itself |

Most production failures are one bucket crowding out another. A 40-turn history leaves no room for retrieval. A wall of tool definitions buries the actual question.

## Practical rules

- **Budget explicitly.** Decide up front: instructions get 2k tokens, retrieval 8k, history 6k, headroom 4k. Enforce it in code.
- **Compress history, don't truncate it.** Dropping the oldest turns loses the goal. Summarize them into a running "what we've established" block instead.
- **Retrieve less, better.** Five highly relevant chunks beat twenty mediocre ones. Rerank. Deduplicate. Cut boilerplate.
- **Load tools lazily.** Give the model a short catalog and let it fetch full definitions for the two it needs (this is what tool search / deferred loading does).
- **Put the freshest, most decision-relevant thing last.** Recency bias is real; use it.
- **Cache the stable prefix.** If your system prompt and tool definitions never change, prompt caching makes them nearly free. Order the window so the stable part comes first.

## A concrete layout

```text
[system: role, rules, output contract]         stable → cached
[tools: catalog]                                stable → cached
[retrieved: top-5 chunks, ranked]               per request
[summary: what's been established so far]       per turn
[recent turns: last 4–6, verbatim]              per turn
[user: the current question]                    per turn
```

## Why it matters more than the model

Switching to a bigger model with a bad window gets you a more expensive wrong answer. Fixing the window with a small model often gets you the right one. Start with the window.
