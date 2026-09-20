---
title: Workflows vs. Agents: Pick the Boring One First
topic: workflows
featured: false
excerpt: Most "agent" use cases are workflows in disguise. Knowing the difference saves money, latency, and a lot of debugging.
---
Two ways to get a model to do a multi-step job:

- **Workflow**: *you* decide the steps in code. The model fills in each step. Deterministic control flow, non-deterministic content.
- **Agent**: the *model* decides the steps. You give it tools and a goal; it loops until done.

Agents are more impressive in demos. Workflows are what most shipped systems actually are.

## The workflow patterns

- **Chain**: step 1 output → step 2 input → step 3. Extract → transform → format.
- **Router**: classify the input, dispatch to a specialized prompt. Support tickets → billing/fraud/login handlers.
- **Parallel**: fan out N independent calls, fan in. Summarize each of 10 documents, then merge.
- **Evaluator–optimizer**: generate, critique, revise, up to K times. Writing tasks love this.
- **Orchestrator–workers**: one call plans subtasks, workers execute them, orchestrator merges. The bridge to agents.

Each of these is testable, debuggable, and has bounded cost. You know exactly how many model calls will happen.

## When you actually need an agent

- The number of steps isn't known up front (debugging, research, open-ended coding).
- The path depends heavily on intermediate results.
- The task tolerates variance in cost and time.

If you can write the steps down on a whiteboard, it's a workflow. Build that.

## A workflow, concretely

```python
def handle_ticket(text):
    kind = llm("Classify: billing|fraud|login|other", text, schema=Kind)
    if kind == "fraud":
        return escalate(text)                       # no model needed
    facts = llm(PROMPTS[kind].extract, text, schema=Facts)
    draft = llm(PROMPTS[kind].reply, facts)
    ok = llm("Does this reply resolve the ticket? yes/no", (text, draft))
    return draft if ok else llm(PROMPTS[kind].reply_v2, (facts, draft))
```

Five calls max, every path visible, every step unit-testable with a fixed input.

## Durable execution

Multi-step LLM workflows run for minutes and touch external systems. They *will* crash halfway. Use a durable workflow engine (Temporal, Inngest, Step Functions, or a job table with idempotent steps) so a restart resumes from step 3 instead of re-running steps 1–2 and double-charging someone.

## The graduation path

Start as a workflow. When you find yourself adding the fifth `if` branch to handle a case the model could have figured out, extract that branch into a small agent with a tight budget. Keep the workflow around it. Agents inside workflows, not workflows inside agents.
