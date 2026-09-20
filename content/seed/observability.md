---
title: LLM Observability: If You Didn't Trace It, It Didn't Happen
topic: observability
featured: false
excerpt: Model calls are non-deterministic, expensive, and slow. The only way to debug, cost-control, and improve them is to record everything. Here's what to log and what to look at.
---
The first time an agent does something weird in production, you'll open your logs and find: `POST /v1/messages 200 OK 4.2s`. Congratulations, you know nothing.

Observability for LLM systems means recording enough that you can replay any interaction, attribute any dollar, and explain any bad output.

## What to capture, per model call

- **The full request**: system prompt (or its hash + version), messages, tool definitions, parameters (model, temperature, max tokens).
- **The full response**: text, tool calls, stop reason, token counts (input, output, cached).
- **Timing**: time to first token, total latency.
- **Cost**: computed from tokens and the model's price at the time.
- **Trace context**: a trace ID for the whole user request and a span for each call, so a 12-turn agent run is one tree, not 12 orphan rows.
- **Metadata**: user/tenant ID, feature flag, prompt version, environment.

Yes, this is a lot of data. Sample if you must, but keep 100% of anything that errored or that a user flagged.

## The four dashboards you actually use

1. **Cost by feature by day.** The one that saves you from a surprise bill.
2. **Latency p50/p95 by model.** Where the slow path is.
3. **Error and refusal rate.** Rate limits, timeouts, content-filter hits, JSON parse failures.
4. **Quality signal.** Thumbs up/down, regenerate rate, task completion, eval scores on sampled traffic.

## Tracing an agent run

```text
trace: support-agent  user=u_123  total=$0.041  8.3s
 ├─ llm.call  turn=1   in=2.1k out=140  1.1s  → tool: search_kb
 ├─ tool.run  search_kb  0.4s  results=5
 ├─ llm.call  turn=2   in=3.9k out=310  1.8s  → tool: get_order
 ├─ tool.run  get_order  0.2s
 └─ llm.call  turn=3   in=4.4k out=220  1.5s  → end_turn
```

This view answers "why did it say that?" in seconds. Without it you're guessing.

## Evals are observability too

Log enough that you can turn any production trace into a test case. Bad output → save the inputs → add it to the eval set → fix → prove it's fixed. The trace store is your regression suite waiting to be written.

## Tooling

OpenTelemetry with GenAI semantic conventions is the neutral base. Hosted options (Langfuse, Braintrust, Arize, and others) add the LLM-specific views. Roll your own for a weekend project; use one of these for anything with users.
