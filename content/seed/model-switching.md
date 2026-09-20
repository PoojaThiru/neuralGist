---
title: Model Switching and Routing: Use the Smallest Model That Works
topic: model-switching
featured: false
excerpt: One model for everything is the expensive default. Routing tasks to different models by difficulty, cost, and latency is how real systems stay affordable.
---
Nobody runs one model in production anymore. The question is how you decide which model handles which request, and how you switch without your prompts breaking.

## Why route at all

A frontier model might cost 10–30× a small one and be 3–5× slower. For "extract the invoice number from this email" that's waste. For "refactor this module across six files" the small model will make a mess that costs more to clean up. Routing matches the model to the job.

## Routing strategies, simplest first

1. **Static by task type.** Classification → small. Summarization → medium. Agentic coding → large. You pick in code. Boring and effective; start here.
2. **Cascade.** Try the small model, check its confidence or run a validator, escalate to the big one only on failure. Great when most inputs are easy.
3. **Learned router.** Train a tiny classifier on (prompt → which model succeeded). Needs data you probably don't have yet.
4. **Model-in-the-loop.** A cheap model reads the request and picks. Adds latency; only worth it for genuinely mixed workloads.

## Switching without pain

Every model has quirks: tool-call formats, how it handles system prompts, tolerance for long context, preferred JSON style. Isolate them.

```python
class ModelAdapter:
    def __init__(self, name): ...
    def complete(self, messages, tools=None, schema=None) -> Response: ...

MODELS = {
    "fast":  ModelAdapter("small-model"),
    "smart": ModelAdapter("frontier-model"),
}

def route(task):
    if task.kind in {"classify", "extract"}: return MODELS["fast"]
    if task.estimated_tokens > 50_000:      return MODELS["smart"]
    return MODELS["fast"]
```

Behind the adapter, keep prompts model-agnostic where possible, and keep a per-model overrides file for the rest. When a new model ships, you add one adapter and run your evals; nothing else changes.

## The eval is the whole game

You can't route without knowing which model is good at what *on your data*. Build a small eval set per task type (50 examples is fine) and score every candidate model on it. Rerun monthly; models change under you.

## Fallbacks are routing too

Provider outage, rate limit, content filter false positive: your router should degrade to a second provider automatically. Treat model choice like any other dependency with a failover plan.
