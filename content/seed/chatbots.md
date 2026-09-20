---
title: Chatbots and Agents: The Difference Is Who's Holding the Tools
topic: chatbots
featured: false
excerpt: A chatbot answers. An agent acts. Building either well comes down to state, tools, and knowing when to hand off to a human.
---
"Chatbot" and "agent" get used interchangeably. They shouldn't be.

- A **chatbot** turns a conversation into a reply. It may retrieve documents. It does not change the world.
- An **agent** turns a goal into actions: calling APIs, editing files, sending emails. It changes the world, and that's exactly why it's harder.

## Anatomy of a good chatbot

1. **Grounding.** Retrieve the relevant docs, put them in context, instruct the model to answer *from them* and say when they don't cover the question. This is RAG (retrieval-augmented generation), and doing it well is mostly [context engineering](/topics/context-engineering).
2. **Conversation state.** Keep a running summary of what the user wants and what's been established. Don't just replay 40 turns.
3. **Refusal paths.** Off-topic, harmful, or out-of-scope requests need a deliberate response, not whatever the model improvises.
4. **Escalation.** "Let me connect you to a person" should be a first-class action with the transcript attached, not a dead end.
5. **Evaluation.** A set of real questions with acceptable answers, rerun on every change to prompt, retrieval, or model.

## What turns a chatbot into an agent

Tools with side effects. The moment the bot can `refund_order()` you need everything in [harness engineering](/topics/harness-engineering): permissions, sandboxing, confirmation steps, audit logs, and a [loop](/topics/loop-engineering) that knows when to stop.

## Design rules that survive contact with users

- **Show your sources.** Users trust an answer with a link far more than a confident paragraph.
- **Make actions reversible or confirmed.** "I'll cancel your subscription. Confirm?" beats surprise cancellations.
- **Fail loudly to the user, quietly to the model.** Tool errors should become clear next steps in the reply, not silent retries or invented success.
- **Cap the conversation.** Long sessions drift. Summarize and reset after N turns or when the topic changes.
- **Log everything.** See [observability](/topics/observability). You'll need the transcript the first time something goes wrong.

## A minimal architecture

```text
user message
  → guardrails (input classification)
  → state update (summary + last few turns)
  → retrieval (top-k chunks)
  → model call (system + tools + context)
  → tool execution (if any, via harness)
  → guardrails (output check)
  → reply + trace
```

Every box is a place to measure and improve independently. Build it as a workflow first; make it agentic only where you must.
