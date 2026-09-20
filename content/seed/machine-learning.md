---
title: Machine Learning in One Sitting
topic: machine-learning
featured: false
excerpt: The whole field compresses to a loop: guess, measure error, adjust, repeat. Everything else is engineering around that loop.
---
Strip machine learning to its core and you get one loop:

1. Make a model with adjustable parameters.
2. Make a prediction.
3. Measure how wrong it was (the **loss**).
4. Nudge the parameters to be slightly less wrong.
5. Repeat on lots of data.

That's it. Linear regression, random forests, and trillion-parameter language models are all this loop with different choices for "model" and "nudge".

## The vocabulary you actually need

- **Features**: the inputs. **Labels**: the correct answers (for supervised learning).
- **Training set / validation set / test set**: what you learn from, what you tune on, what you never touch until the end. Mixing these up is the most common beginner mistake and it makes your results fiction.
- **Overfitting**: the model memorized the training set and fails on new data. Symptom: training loss keeps dropping while validation loss rises.
- **Regularization**: any trick that fights overfitting (penalties on parameter size, dropout, early stopping, more data).
- **Generalization**: performing well on data you've never seen. The only thing that matters.

## Three families

| Family | Learns from | Example |
|---|---|---|
| Supervised | (input, label) pairs | spam detection, image classification |
| Unsupervised | inputs only | clustering customers, compression |
| Reinforcement | rewards from an environment | game playing, robot control, RLHF |

Language models blur these: pretraining is self-supervised (predict the next token; the label is the data itself), then fine-tuning and RL shape behavior.

## Bias and variance, in one sentence each

**High bias**: the model is too simple to capture the pattern (a line through a curve). **High variance**: the model is so flexible it fits noise. You trade one for the other; more data lets you afford more variance.

## The practical workflow

```text
look at the data (really look)  →  baseline (mean, majority class, logistic regression)
→ better model  →  measure on validation  →  error analysis: what does it get wrong?
→ fix data/features/model  →  repeat  →  test set once, at the end
```

Most wins come from the "look at the data" and "error analysis" steps, not the model. A senior ML engineer spends most of their time there.

## What to learn next

Gradient descent (how the nudge works), then [deep learning](/topics/deep-learning) (what happens when the model is a stack of layers), then evaluation (how not to fool yourself). Skip the zoo of classical algorithms until you need one.
