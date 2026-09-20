---
title: The Semantic Layer Is What Makes "Chat With Your Data" Not Lie
topic: semantic-layer
featured: false
excerpt: Text-to-SQL demos fall over the moment two people define "revenue" differently. A semantic layer is where you write down what words mean before the model guesses.
---
Every company tries the demo: "ask questions about your data in plain English." It works on the sample database. It fails on the real one, and not because the model is bad at SQL. It fails because *the model doesn't know what your words mean.*

"Active users" — daily? Monthly? Excluding internal accounts? "Revenue" — booked, recognized, or collected? Net of refunds? Two analysts in the same company will give you different numbers, and the model will confidently pick a third.

## What a semantic layer is

A semantic layer is a machine-readable dictionary that sits between raw tables and anyone asking questions. It defines:

- **Entities**: customer, order, subscription, and how they join.
- **Metrics**: `revenue = sum(order.amount) where status = 'paid' and not refunded`, with a name, a description, and an owner.
- **Dimensions**: the legal ways to slice a metric (by region, by plan, by month).
- **Synonyms**: "sales", "bookings", and "revenue" map to which metric, or are flagged as ambiguous.

Tools like dbt's semantic layer, Cube, LookML, or a plain YAML file all work. The format matters less than the fact that it exists and is owned.

## How the model uses it

Instead of raw schema → SQL, the flow becomes:

```text
question → (model) → metric query {metric: revenue, by: month, filter: region=EU}
                   → (semantic layer) → validated SQL → result
```

The model's job shrinks to *mapping intent onto defined terms*. It cannot invent a definition of revenue because it can only reference the ones that exist. If the question doesn't map, the right answer is "I don't have a metric for that; here are the closest ones."

## Why this is an AI topic and not just a BI topic

Because it's the highest-leverage context-engineering move for data questions. Dumping 400 table schemas into the window doesn't work. Dumping 30 well-described metrics does. The semantic layer *is* your retrieval corpus, and it's small, curated, and versioned.

## Getting started

1. Pick the ten questions leadership actually asks.
2. Define the metrics behind them, with owners, in one file.
3. Expose them as tools or a query grammar to the model.
4. Log every question the model *couldn't* map. That log is your backlog.

You'll find that half the value shows up before any AI is involved, just from finally agreeing on what the words mean.
