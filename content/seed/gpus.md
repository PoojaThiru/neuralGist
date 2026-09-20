---
title: GPUs for People Who Just Want Their Model to Run
topic: gpus
featured: false
excerpt: You don't need to write CUDA to make good decisions about GPUs. You need to understand memory, bandwidth, and why batch size is the only knob that matters.
---
Most AI students meet GPUs through a "CUDA out of memory" error. Here's the mental model that would have saved me a semester.

## Why GPUs and not CPUs

Neural nets are mostly matrix multiplications. A CPU has a few dozen powerful cores optimized for branching logic. A GPU has thousands of simple cores optimized for doing the same arithmetic on lots of numbers at once. Matmul is exactly that. A modern data-center GPU does on the order of a petaflop of low-precision math; a CPU does a few teraflops.

## The three numbers that matter

1. **Memory capacity (GB).** Your model's weights, activations, optimizer state, and KV cache all have to fit. A 7B-parameter model in 16-bit is ~14 GB just for weights. Training needs 3–4× that for gradients and optimizer state.
2. **Memory bandwidth (TB/s).** For inference, this is usually the bottleneck, not compute. Generating one token means reading *every weight* once. At 3 TB/s, a 14 GB model streams in ~5 ms; that's your per-token floor with batch size 1.
3. **Compute (TFLOPS).** Matters for training and for large-batch inference. Matters less than you think for chat.

## The one knob: batch size

Reading the weights once and using them for one token wastes the GPU. Reading them once and using them for 64 tokens (64 concurrent requests) is nearly free extra throughput. This is why serving frameworks (vLLM, TensorRT-LLM, SGLang) obsess over *continuous batching*: keep the GPU fed with as many in-flight sequences as memory allows.

Latency vs. throughput is the trade: bigger batches → more tokens/sec total, slightly slower per user.

## Precision

- **FP32**: training reference; almost never used end-to-end now.
- **BF16/FP16**: default for training and serving. Half the memory of FP32.
- **INT8 / FP8**: serving. Small quality cost, ~2× throughput.
- **INT4**: aggressive quantization for fitting big models on small cards. Quality varies by method; test on your evals.

## Rules of thumb

- Inference memory ≈ weights + KV cache. KV cache grows with (batch × context length); long-context serving is memory-bound.
- If GPU utilization is low, you're bottlenecked on data loading or on small batches, not on the GPU.
- Rent before you buy. Cloud GPUs by the hour let you find your real requirements first.
- For a student laptop: a good 8–16 GB card runs 7B–8B models quantized comfortably. Beyond that, use an API or the cloud.

## What's changing

Interconnect (NVLink, InfiniBand) is now as important as the chip for multi-GPU training. Inference is moving toward disaggregated prefill/decode. And the memory wall is the wall: bandwidth improves slower than compute every generation, which is why every serving trick is really a memory trick.
