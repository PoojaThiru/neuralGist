<script lang="ts">
	// Learn — the video series, one collapsible playlist each.
	//
	// A table rather than a grid of cards, because each series is a SEQUENCE: someone arriving wants to see where a
	// lesson sits in the run, how long it is, and what it covers, and a card grid hides all three behind a thumbnail.
	// The numbering is real information here, not decoration.
	//
	// Collapsible because there is more than one series now (owner, 2026-09-25). Twenty lessons in one flat list is a
	// scroll, not a menu — and on a phone, which is where this gets read, it is a very long scroll. The first series
	// opens; the rest are one tap away and announce their size before you commit to them.
	import { Play, Clock, ListVideo, ChevronDown } from '@lucide/svelte';
	import { PROBABILITY, NEO4J, LLM_EVAL, SERVING, LEARNING, COUNTING, PATTERNS, CHANCE, SHIFT, CYPHER, MODELLING, NEPTUNE, RELALG, LANGCHAIN, LANGGRAPH, LANGSMITH, MCP, SYSTEMONE, type Lesson } from '$lib/learn.generated';
	import LessonPlayer from '$lib/components/LessonPlayer.svelte';

	type Series = { key: string; eyebrow: string; title: string; blurb: string; lessons: Lesson[] };

	// A SERIES WITH NO FINISHED LESSON IS NOT LISTED (2026-09-29). Lessons are published continuously as they
	// render, so an export exists — empty — from the moment a course is wired up. An empty card on the page is a
	// promise rather than something to watch, and it would also take the "newest series opens" default with it.
	const ALL: Series[] = [
		{
			key: 'probability',
			eyebrow: 'Series 01',
			title: 'Probability for Data Science',
			blurb:
				'Thirteen lessons, in order, from the five words you need to why a ninety-nine percent accurate test does not mean what you think.',
			lessons: PROBABILITY
		},
		{
			key: 'neo4j',
			eyebrow: 'Series 02',
			title: 'Neo4j from the Ground Up (Graph Databases)',
			blurb:
				'Seven lessons on graph databases: what a knowledge graph is, the property graph model, why traversal stays fast, Cypher for reading and writing, embeddings and GraphRAG, and running it in production.',
			lessons: NEO4J
		},
		{
			key: 'llm-eval',
			eyebrow: 'Series 03',
			title: 'Evaluating Language Models',
			blurb:
				'How to tell whether a language model is actually any good: why the usual accuracy number does not apply, building an evaluation set that means something, using a model as a judge and the biases that come with it, scoring retrieval, and running the whole thing on every commit.',
			lessons: LLM_EVAL
		},
		{
			key: 'serving',
			eyebrow: 'Series 04',
			title: 'Serving the Model (LLM Inference and Deployment)',
			blurb:
				'What happens between a request and a token: why a model server is nothing like a web app, continuous batching, the KV cache and how it is paged, quantisation, speculative decoding, spreading one model across several GPUs, and operating the result.',
			lessons: SERVING
		},
		{
			key: 'learning',
			eyebrow: 'Series 05',
			title: 'Learning From Data (Machine Learning)',
			blurb:
				'Machine learning from the first model to a model somebody else relies on, worked throughout on one dataset of apartment rents near campus: fitting versus memorising, gradient descent, overfitting, classification and how to judge it honestly, features and the leakage that makes a model look too good.',
			lessons: LEARNING
		},
		{
			key: 'counting',
			eyebrow: 'Series 06',
			title: 'From Counting to Bayes (Probability and Combinatorics)',
			blurb:
				'A rigorous first course: the multiplication principle, permutations and combinations, the axioms of probability and what they force, conditional probability, total probability and Bayes. Five of the twenty lessons are problem workshops, because the point is to be able to sit the exam.',
			lessons: COUNTING
		},
		{
			key: 'patterns',
			eyebrow: 'Series 07',
			title: 'Patterns Worth Trusting (Machine Learning)',
			blurb:
				'Twenty lessons on finding a pattern and deciding whether to believe it: exploring data, hypothesis testing and confidence intervals, then k-nearest neighbours, naive Bayes, the perceptron, logistic regression, decision trees, and support vector machines with kernels — judged by cross-validation, precision and recall. Three problem workshops, a one-page cheatsheet and an exam-readiness lesson.',
			lessons: PATTERNS
		},
		{
			key: 'chance',
			eyebrow: 'Series 08',
			title: 'The Shape of Chance (Random Variables and Distributions)',
			blurb:
				'What happens once an outcome has a number attached to it: random variables, expectation and variance, the distributions worth knowing by name — binomial, geometric, Poisson, normal — and how to tell which one a situation is asking for. Then two variables at once, and why averages converge and sums turn normal however the pieces were shaped.',
			lessons: CHANCE
		},
		{
			key: 'shift',
			eyebrow: 'Series 09',
			title: 'Rebuilt Around the Model (AI Systems for Engineering Leaders)',
			blurb:
				'For the people deciding what to build: why bolting AI onto an existing system fails, what an agent actually is, giving tools one interface, grounding answers in your own data with RAG and GraphRAG, the three controls that keep a system honest, what an agent really costs, how these systems fail quietly, and six questions worth asking before you commit.',
			lessons: SHIFT
		},
		{
			key: 'cypher',
			eyebrow: 'Series 10',
			title: 'Cypher in Depth (Querying a Graph Database)',
			blurb:
				'The Neo4j query language taught properly: patterns as the real unit, WITH as a pipeline, aggregation with no GROUP BY, paths of unknown length, lists and UNWIND, subqueries, writing idempotently, loading real data, reading a query plan, and the five mistakes that cost a day each.',
			lessons: CYPHER
		},
		{
			key: 'modelling',
			eyebrow: 'Series 11',
			title: 'Modelling for Neo4j (Graph Data Modelling)',
			blurb:
				'The decisions you make before any query: modelling from the questions rather than the entities, node versus relationship versus property, labels, relationship design, when a relationship has to become a node, time and history, constraints, indexes, embeddings and the vector index, and refactoring a graph that is already live.',
			lessons: MODELLING
		},
		{
			key: 'neptune',
			eyebrow: 'Series 12',
			title: 'Neptune to Neo4j (Migrating a Production Graph)',
			blurb:
				'Moving a live graph between engines, honestly: what actually differs, the two property-graph models, Gremlin and SPARQL translated to Cypher, getting forty million nodes out of Neptune and into Neo4j, rewriting the application layer, and a cutover with dual writes and a rollback you could actually use.',
			lessons: NEPTUNE
		},
		{
			key: 'relational-algebra',
			eyebrow: 'Series 13',
			title: 'Relational Algebra, End to End (Databases)',
			blurb:
				'The language behind every SQL query, taught for someone with an assignment in front of them: selection, projection, rename and assignment, cross products and every kind of join, the set operations and how difference expresses "none" and "every" — then six workshops that work real problems, a recognition quiz, and an exam-readiness pass. Every operator in both the Greek notation you read and the typed form a tool accepts.',
			lessons: RELALG
		},
		{
			key: 'langchain', eyebrow: 'Series 14',
			title: 'LangChain, Piece by Piece (Building with Language Models)',
			blurb:
				'The framework taken apart: models and messages, prompts as objects, structured output, composition with LCEL and the resilience that makes it production-ready, tools, retrieval from ingestion through the strategies that decide answer quality, keeping documents in sync, memory, and streaming. Built throughout on one system — a bicycle repair shop assistant.',
			lessons: LANGCHAIN
		},
		{
			key: 'langgraph', eyebrow: 'Series 15',
			title: 'LangGraph: Agents That Hold State',
			blurb:
				'Where a chain stops being enough: state and reducers, nodes and routing, the agent loop written by hand before the prebuilt one, persistence that survives a crash, long-term memory, human-in-the-loop interrupts, time travel through a conversation, parallel fan-out, subgraphs and multi-agent handoffs, and operating a graph in production.',
			lessons: LANGGRAPH
		},
		{
			key: 'langsmith', eyebrow: 'Series 16',
			title: 'LangSmith: Proving the Agent Works',
			blurb:
				'You cannot debug an agent by reading logs. Traces, datasets built from real traffic, evaluators and their biases, running an evaluation and reading it honestly, regression testing in CI, human feedback and annotation, and what to monitor once it is live.',
			lessons: LANGSMITH
		},
		{
			key: 'mcp', eyebrow: 'Series 17',
			title: 'MCP: One Interface for Every Tool',
			blurb:
				'The Model Context Protocol end to end: hosts, clients and servers over JSON-RPC, transports, the handshake and capability negotiation, tools, resources and prompts, building both a server and a client, sampling and elicitation, the production plumbing, and the security lesson that matters most — a tool result is untrusted input.',
			lessons: MCP
		},
		{
			key: 'system-one', eyebrow: 'Series 18',
			title: 'Deciding in Software: System One Models',
			blurb:
				'The decisions software makes forty times an hour, which a chat model is the wrong tool for. System One and System Two as an architecture, decomposing a judgement into atomic questions, the three primitives, what calibrated confidence actually means, designing act/defer/escalate thresholds, and proving the cost on your own decisions.',
			lessons: SYSTEMONE
		}
	];
	const SERIES: Series[] = ALL.filter((s) => s.lessons.length > 0);

	const secondsOf = (l: Lesson) => {
		const [m, s] = l.runs.split(':').map(Number);
		return (m || 0) * 60 + (s || 0);
	};
	const minutesOf = (ls: Lesson[]) => Math.round(ls.reduce((n, l) => n + secondsOf(l), 0) / 60);

	let playing = $state<Lesson | null>(null);
	let open = $state<string | null>(null);              // which lesson's detail is expanded, as "<series>:<n>"
	// THE NEWEST SERIES OPENS, NOT THE OLDEST (2026-09-27).
	//
	// This opened SERIES[0], which is the first course ever made — so every series added since sat collapsed behind
	// a tap, and the owner twice reported newly published work as missing when it was on the page the whole time,
	// counted and titled. If it happens to the person who commissioned the videos it happens to a student.
	//
	// The newest is also the better editorial default: freshest work forward, and the older courses still announce
	// their size one tap away, which is what the collapsing was for.
	let shown = $state<string[]>([SERIES[SERIES.length - 1].key]);

	const toggle = (key: string) =>
		(shown = shown.includes(key) ? shown.filter((k) => k !== key) : [...shown, key]);

	const totalMinutes = minutesOf(SERIES.flatMap((s) => s.lessons));
</script>

<svelte:head>
	<title>Learn · NeuralGist</title>
	<meta
		name="description"
		content="Video series on probability and counting, graph databases, machine learning, and evaluating and serving language models — two hosts, drawn explanations, {totalMinutes} minutes end to end."
	/>
</svelte:head>

<section class="container-x py-12">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<div>
			<p class="font-mono text-[11px] uppercase tracking-[0.12em] text-violet">Learn</p>
			<h1 class="font-display mt-1 text-4xl font-bold">Watch it explained</h1>
			<p class="mt-2 max-w-2xl text-muted">
				Two hosts — one asking, one explaining — over drawn boards. Pick a series.
			</p>
		</div>
		<dl class="flex gap-6">
			<div>
				<dt class="font-mono text-[10.5px] uppercase tracking-wide text-dim">Series</dt>
				<dd class="font-display text-2xl font-bold tabular-nums">{SERIES.length}</dd>
			</div>
			<div>
				<dt class="font-mono text-[10.5px] uppercase tracking-wide text-dim">Runtime</dt>
				<dd class="font-display text-2xl font-bold tabular-nums">
					{totalMinutes}<span class="text-base font-normal text-muted"> min</span>
				</dd>
			</div>
		</dl>
	</div>

	{#each SERIES as s (s.key)}
		{@const isOpen = shown.includes(s.key)}
		<div class="mt-8">
			<button
				type="button"
				onclick={() => toggle(s.key)}
				aria-expanded={isOpen}
				class="flex w-full items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-4 text-left transition-colors hover:bg-raised sm:px-5"
			>
				<ChevronDown
					size={18}
					class="shrink-0 text-dim transition-transform duration-200 {isOpen ? '' : '-rotate-90'}"
				/>
				<span class="min-w-0 flex-1">
					<span class="font-mono text-[10.5px] uppercase tracking-[0.12em] text-violet">{s.eyebrow}</span>
					<span class="font-display block text-xl font-bold text-ink">{s.title}</span>
					<span class="mt-1 block max-w-3xl text-[13.5px] leading-relaxed text-muted">{s.blurb}</span>
				</span>
				<span class="shrink-0 text-right font-mono text-[11px] text-dim">
					<span class="block tabular-nums">{s.lessons.length} lessons</span>
					<span class="block tabular-nums">{minutesOf(s.lessons)} min</span>
				</span>
			</button>

			{#if isOpen}
				<ol class="mt-3 overflow-hidden rounded-2xl border border-line">
					{#each s.lessons as l (l.n)}
						{@const id = `${s.key}:${l.n}`}
						<li class="border-b border-line last:border-b-0">
							<div class="group flex items-center gap-4 bg-surface px-4 py-4 transition-colors hover:bg-raised sm:px-5">
								<span class="w-8 shrink-0 text-center font-mono text-sm tabular-nums text-dim">
									{String(l.n).padStart(2, '0')}
								</span>

								<button
									type="button"
									onclick={() => (open = open === id ? null : id)}
									class="min-w-0 flex-1 text-left"
									aria-expanded={open === id}
								>
									<span class="font-display block truncate text-[15.5px] font-semibold text-ink">{l.title}</span>
									<span class="mt-0.5 flex items-center gap-3 font-mono text-[11px] text-dim">
										<span class="inline-flex items-center gap-1"><Clock size={11} />{l.runs}</span>
										{#if l.chapters.length}
											<span class="inline-flex items-center gap-1"><ListVideo size={11} />{l.chapters.length} chapters</span>
										{/if}
									</span>
								</button>

								<button
									type="button"
									onclick={() => (playing = l)}
									class="play shrink-0"
									aria-label="Play {l.title}"
									title="Play"
								>
									<Play size={16} fill="currentColor" />
								</button>
							</div>

							{#if open === id}
								<div class="border-t border-line bg-canvas px-4 py-4 sm:px-5 sm:pl-[4.5rem]">
									<p class="max-w-3xl text-sm leading-relaxed text-muted">{l.summary}</p>
									{#if l.chapters.length}
										<ul class="mt-3 flex flex-wrap gap-x-5 gap-y-1">
											{#each l.chapters as c (c.at)}
												<li class="font-mono text-[11.5px] text-dim">
													<span class="text-violet">{c.at}</span>
													<span class="ml-1.5">{c.title}</span>
												</li>
											{/each}
										</ul>
									{/if}
								</div>
							{/if}
						</li>
					{/each}
				</ol>
			{/if}
		</div>
	{/each}

	<p class="mt-8 font-mono text-[11px] text-dim">
		Made with FledgePath’s lesson pipeline — scripted, described against a contract, narrated by two voices, drawn
		with Manim, and checked before anyone watches.
	</p>
</section>

{#if playing}
	<LessonPlayer lesson={playing} onclose={() => (playing = null)} />
{/if}

<style>
	/* The play control is the one thing on each row that must read as pressable at a glance. */
	.play {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 9999px;
		border: 1px solid var(--color-line);
		color: var(--color-muted);
		background: var(--color-raised);
		transition:
			background-color 0.15s,
			color 0.15s,
			border-color 0.15s,
			transform 0.15s;
	}
	.play:hover,
	.play:focus-visible {
		background: var(--color-violet);
		border-color: var(--color-violet);
		color: #fff;
		transform: scale(1.06);
	}
	.group:hover .play {
		border-color: color-mix(in oklab, var(--color-violet) 55%, transparent);
		color: var(--color-ink);
	}
</style>
