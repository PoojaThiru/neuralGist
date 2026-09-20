---
title: Prompt Engineering Is Mostly Specification Writing
topic: prompt-engineering
featured: true
excerpt: The prompts that work in production don't look like magic spells. They look like the spec a good engineer would hand a new teammate.
---
Every semester someone tells me prompt engineering is dead. Then I watch them spend a week debugging an agent that "randomly" ignores instructions, and the fix is always the prompt.

Here's the reframe that made it click for me: **a prompt is a specification.** The model is a very fast, very literal contractor who has read everything but knows nothing about *your* situation. The prompt is where you close that gap.

## What a good spec contains

1. **Role and stakes.** Not "You are a helpful assistant" but "You are triaging support tickets for a fintech app; a wrong category costs a human 20 minutes."
2. **Inputs, explicitly labeled.** Wrap them in tags. `<ticket>…</ticket>` beats "here is the ticket:" because the model can tell where your data ends and your instructions resume.
3. **Output contract.** JSON schema, exact field names, what to do when unsure. If you will parse the output with code, say so and give the shape.
4. **Decision rules for the edge cases.** The model will invent policy where you left gaps. Write the policy.
5. **One or two worked examples** when the format is unusual. Skip examples when the task is obvious; they anchor the model too hard.

## The stuff that actually moves the needle

- **Put instructions after long context, not before.** Models weight the end of the prompt heavily. Data first, ask last.
- **Tell it what to do, not what not to do.** "Answer in under 80 words" beats "don't be verbose."
- **Ask for reasoning only when the task needs it.** For classification with a schema, chain-of-thought can *hurt* consistency. For multi-step math or planning, it helps.
- **Version your prompts like code.** Diff them. Keep a tiny eval set (30 cases is plenty to start) and run it on every change.

```python
SYSTEM = """You classify support tickets for Acme Pay.
Categories: billing, fraud, login, feature_request, other.
Rules:
- Any mention of unrecognized charges -> fraud, even if the user says "billing".
- If two categories fit, pick the one with higher risk (fraud > login > billing).
Return JSON: {"category": str, "confidence": 0-1, "reason": str}"""
```

## Where it stops being enough

Prompting is the cheapest lever, which is why you pull it first. But once the prompt has to carry retrieved documents, tool results, and conversation history, you have left prompt engineering and entered [context engineering](/topics/context-engineering). Different problem, different tools.
