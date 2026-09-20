---
title: What a Harness Actually Does
topic: harness-engineering
featured: false
excerpt: The model generates tokens. Everything else that makes it useful, safe, and observable lives in the harness. Here's what's in a real one.
---
People say "the agent did X." The model didn't do X. The model emitted a JSON blob that said it wanted to do X, and a pile of code around it decided whether to allow that, executed it, captured the result, and fed it back. That pile of code is the **harness**.

Harness engineering is the practice of building that layer well. It is, honestly, most of the engineering in "AI engineering."

## Responsibilities of a harness

- **Tool execution.** Parse the tool call, validate arguments against a schema, run it with a timeout, capture stdout/stderr/exceptions, and return a bounded result (truncate 50 MB of logs to something the model can use).
- **Permissions.** Which tools may run without asking? Which need a human? Which are never allowed in this environment? The model should not get to decide this.
- **Sandboxing.** File system scope, network egress rules, resource limits. A coding agent that can `rm -rf` your home directory is a harness bug, not a model bug.
- **Loop control.** Max turns, max cost, stop conditions, detection of "the model is stuck repeating itself."
- **Context management.** Summarization, compaction, tool-result truncation. See [context engineering](/topics/context-engineering).
- **Observability.** Every call, every tool invocation, every token logged with a trace ID. You cannot debug what you did not record.
- **Recovery.** Retries with backoff for transient errors, and a clear message to the model when a tool fails so it can adapt instead of hallucinating success.

## A minimal harness, sketched

```python
def run(agent, task, budget):
    trace = Trace()
    messages = [system(agent.spec), user(task)]
    for turn in range(budget.max_turns):
        resp = llm(messages, tools=agent.tools)
        trace.log(resp)
        if resp.stop_reason == "end_turn":
            return resp.text
        for call in resp.tool_calls:
            if not policy.allows(call):
                result = ask_human(call) or denied(call)
            else:
                result = sandbox.run(call, timeout=30)
            messages.append(tool_result(call.id, truncate(result, 8_000)))
    return trace.summary("budget exhausted")
```

Twenty lines, and every one of them is a place production systems have been burned.

## Why it's a discipline now

Models improved faster than harnesses. The gap between "demo that works once" and "system that works 10,000 times" is entirely harness. Model vendors know this: the same model scores wildly differently across agent frameworks, because the harness is doing a lot of the work.
