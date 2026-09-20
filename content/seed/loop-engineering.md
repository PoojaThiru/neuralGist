---
title: Loop Engineering, or Why Your Agent Goes in Circles
topic: loop-engineering
featured: false
excerpt: An agent is a while-loop around a model. Designing that loop, its stop conditions, its state, and its failure modes, is its own craft.
---
Strip away the marketing and an agent is this:

```python
while not done:
    action = model(context)
    result = execute(action)
    context = update(context, action, result)
```

Loop engineering is the study of that `while`. It sounds trivial. It's where most agents fail.

## The classic failure modes

1. **The infinite retry.** Tool fails, model tries the exact same call, tool fails, repeat. Fix: detect duplicate calls and inject "that failed twice; try a different approach or stop."
2. **The runaway plan.** Model decides it needs 40 sub-steps for a 2-step task. Fix: budgets (turns, tokens, dollars) enforced by the harness, plus a "checkpoint: is this still on track?" prompt every N turns.
3. **Premature victory.** Model declares success without verifying. Fix: require evidence. "Done" must be accompanied by a test run, a diff, a URL that returns 200.
4. **Context bloat.** Every tool result gets appended until the window is full of stale logs. Fix: compaction. Replace old tool results with one-line summaries once they're consumed.
5. **Lost goal.** After 30 turns the original task has scrolled out of view. Fix: pin the goal. Re-inject the task statement near the end of the window each turn.

## Loop shapes that work

- **ReAct** (reason → act → observe): the default. Fine for short tasks.
- **Plan-then-execute**: generate a plan up front, execute steps, re-plan only on failure. More predictable, less adaptive.
- **Reflexion**: after a failure, ask the model to write a lesson, then retry with the lesson in context. Surprisingly effective for coding.
- **Critic loops**: a second model (or the same model with a different prompt) reviews the output before it's accepted. Cheap insurance.
- **Human-in-the-loop checkpoints**: the loop pauses at defined points (before spending money, before deleting things) and waits.

## State: what the loop remembers

The loop needs an explicit state object, not just the message history. At minimum:

- the original goal, verbatim
- the current plan and which step you're on
- facts established so far (file paths, IDs, decisions)
- what has been tried and failed

Keep it small and structured. Regenerate the model's context *from* this state each turn rather than letting history accumulate.

## A test you should run

Give your agent a task that is impossible (a file that doesn't exist, an API that always 500s). A good loop notices within a few turns, reports clearly, and stops. A bad loop burns your budget trying forever. This one test finds more bugs than any benchmark.
