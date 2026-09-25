// The Design section — architecture written up properly, for people who want the whole path rather than a summary.
//
// The first piece is ported from the FledgePath architecture handbook, where it was written after a deploy failed
// for an hour on a wedged Docker daemon. It is kept as a case study rather than generalised into advice: the value
// is in the specifics — the port numbers, the version pins, the failure modes and what each one actually cost.

export type Block =
	| { kind: 'p'; text: string }
	| { kind: 'h'; text: string }
	| { kind: 'list'; items: string[] }
	| { kind: 'code'; caption?: string; text: string }
	| { kind: 'table'; head: string[]; rows: string[][] }
	| { kind: 'note'; title: string; text: string }
	| { kind: 'diagram'; caption: string; src: string };

/** A recorded walkthrough, served from the media bucket alongside the Learn videos. */
export type Watch = {
	slug: string;
	title: string;
	summary: string;
	runs: string;
	chapters: { at: string; title: string }[];
};

/** GENERATED from the finished videos by compose_meta — runtimes measured, chapters taken from the scenes actually
 *  drawn. Regenerate rather than edit. */
export const WATCH: Watch[] = [
 {
  "slug": "runs-everywhere",
  "title": "How Your App Runs Everywhere: Adapters, Containers, and Lambda",
  "summary": "Learn how the same SvelteKit application code runs unchanged on your laptop, in containers, on Lambda, and behind edge networks. This video traces the complete journey from local development through adapters, container images, and cloud deployment, plus the common pitfalls that break portability.",
  "runs": "6:51",
  "chapters": [
   {
    "at": "0:00",
    "title": "The Question"
   },
   {
    "at": "0:42",
    "title": "Part One: adapter-node and the Disappear"
   },
   {
    "at": "1:55",
    "title": "Part Two: What a Container Image Actuall"
   },
   {
    "at": "3:26",
    "title": "Part Three: Lambda, the Edge, and the Re"
   },
   {
    "at": "4:56",
    "title": "Where People Get This Wrong"
   },
   {
    "at": "5:51",
    "title": "Recap"
   }
  ]
 },
 {
  "slug": "trust-automation",
  "title": "How Do You Trust an Automated System to Generate Correct Output?",
  "summary": "Learn the three-layer approach to building AI systems that can't produce wrong output: contracts (schemas that make bad data impossible), guard rails (structural and voice rules), and tests (validation before and after generation). You'll see concrete examples of how each layer catches different kinds of errors and why skipping any one of them leaves your system vulnerable.",
  "runs": "7:36",
  "chapters": [
   {
    "at": "0:00",
    "title": "The Question: How Do You Trust an Automa"
   },
   {
    "at": "0:47",
    "title": "Part One: The Contract That Makes Bad Ou"
   },
   {
    "at": "2:03",
    "title": "Part Two: Structural Rules as Guard Rail"
   },
   {
    "at": "2:54",
    "title": "Part Three: Voice Rules as Guard Rails"
   },
   {
    "at": "3:49",
    "title": "Where This Goes Wrong If You Skip a Laye"
   },
   {
    "at": "4:38",
    "title": "Tests That Run Before Generation"
   },
   {
    "at": "5:30",
    "title": "Tests That Run After Generation"
   },
   {
    "at": "6:26",
    "title": "Recap: Three Layers, One Guarantee"
   }
  ]
 },
 {
  "slug": "preventing-bad-output",
  "title": "Preventing Bad Output: Schema, Validation, and Testing",
  "summary": "Learn how to prevent defects in automatically generated content by building validation at multiple layers: an enforced schema that makes wrong shapes impossible, content guard rails that catch logic errors, and unit and post-build tests that verify both the validator and the final artifact. This video teaches a systematic approach to quality control that catches timing issues, dialogue errors, and rendering failures before they reach users.",
  "runs": "7:29",
  "chapters": [
   {
    "at": "0:00",
    "title": "The Question"
   },
   {
    "at": "0:45",
    "title": "The Contract: Making Bad Output Unrepres"
   },
   {
    "at": "2:08",
    "title": "Guard Rail One: At Generation Time"
   },
   {
    "at": "2:59",
    "title": "Guard Rail Two: The Rules a Schema Can't"
   },
   {
    "at": "3:57",
    "title": "Tests Before: Unit Tests on the Contract"
   },
   {
    "at": "4:49",
    "title": "Tests After: Checking the Finished Video"
   },
   {
    "at": "5:36",
    "title": "Where Teams Get This Wrong"
   },
   {
    "at": "6:32",
    "title": "Recap"
   }
  ]
 }
];

export type Piece = {
	slug: string;
	title: string;
	blurb: string;
	minutes: number;
	tags: string[];
	blocks: Block[];
};

export const PIECES: Piece[] = [
	{
		slug: 'laptop-to-edge',
		title: 'From laptop to edge: how a request is served',
		blurb:
			'adapter-node, the container image, ECR, the Lambda Web Adapter, port 8080 and CloudFront — every hop between a commit and a page, and why each one exists.',
		minutes: 12,
		tags: ['SvelteKit', 'AWS Lambda', 'Docker', 'CloudFront', 'architecture'],
		blocks: [
			{
				kind: 'p',
				text: 'The application is an ordinary Node web server. It listens on a port, takes HTTP requests and returns HTML. It contains no AWS SDK call for the purpose of running, no Lambda handler signature, and no knowledge of the environment it is deployed into — which is the whole design goal, because the moment a framework knows it is on Lambda, moving it costs a rewrite.'
			},
			{
				kind: 'p',
				text: 'Four pieces cooperate to keep that true. Each is invisible until it fails, and each failed at least once while this was being written.'
			},
			{
				kind: 'diagram',
				caption: 'Four stages: build, store, arrive, serve. The response retraces the same path outward.',
				src: `flowchart LR
  subgraph build["1 · Build — CI, on a push to main"]
    direction TB
    SRC[SvelteKit source] --> AN["adapter-node<br/>emits a plain Node server"]
    AN --> IMG["container image<br/>Node 22 · build/ · node_modules<br/>+ the adapter"]
  end
  ECR[("2 · ECR<br/>the handoff point<br/>pinned by digest")]
  subgraph edge["3 · Edge"]
    direction TB
    BR[Browser] --> CF["CloudFront<br/>TLS terminates · caching"]
    CF --> GW[API Gateway]
  end
  subgraph run["4 · Inside one Lambda invocation"]
    direction TB
    LAM["Lambda<br/>runs the image"] --> LWA["Lambda Web Adapter<br/>/opt/extensions"]
    LWA -- "HTTP :8080" --> NODE["node build<br/>listening on :8080"]
    NODE -- "HTML" --> LWA
  end
  IMG -- push --> ECR
  ECR -. "pulled by digest" .-> LAM
  GW --> LAM
  classDef focus fill:#2a2150,stroke:#8b5cf6,stroke-width:3px,color:#eceef6
  classDef store fill:#1a1d28,stroke:#6b7289,color:#9aa1b8
  class AN,LWA focus
  class ECR store`
			},
			{ kind: 'h', text: 'adapter-node: what SvelteKit hands over' },
			{
				kind: 'p',
				text: 'SvelteKit compiles an application but deliberately does not decide where it runs. An adapter makes that decision: adapter-vercel, adapter-cloudflare, adapter-static, adapter-node. This system uses adapter-node, which emits a standalone Node HTTP server into build/, started with `node build`. Nothing platform-specific is baked in.'
			},
			{
				kind: 'note',
				title: 'This is the decision everything else depends on',
				text: 'Because the output is a plain Node server, something else can sit in front and translate for it. Swap to adapter-vercel and the whole Lambda arrangement below stops working, because the build output would be Vercel-shaped instead of server-shaped. It is also why `npm run preview` behaves like production rather than approximating it.'
			},
			{ kind: 'h', text: 'The image, and why CI builds it' },
			{
				kind: 'p',
				text: 'A container image is a filesystem plus a command: Node 22, the compiled build/ directory, the pruned production node_modules, and `CMD ["node", "build"]`. It is not a running thing — it is the sealed box a running thing is started from, and the same box runs identically on a laptop, on Fargate, or on Lambda.'
			},
			{
				kind: 'code',
				caption: 'The two-stage build',
				text: `FROM node:22-slim AS build          # stage 1: compile
WORKDIR /app
COPY package*.json ./
RUN npm ci --ignore-scripts
COPY . .
RUN npm run build && npm prune --omit=dev

FROM node:22-slim                    # stage 2: only what is needed to RUN
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.4 \\
     /lambda-adapter /opt/extensions/lambda-adapter
ENV PORT=8080 AWS_LWA_PORT=8080 AWS_LWA_READINESS_CHECK_PATH=/health
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
CMD ["node", "build"]`
			},
			{
				kind: 'p',
				text: 'Two stages, because the toolchain that compiles the app has no business shipping with it. The second stage copies only the output and the runtime dependencies, so the deployed image carries no compiler, no dev dependencies and nothing that only mattered at build time.'
			},
			{
				kind: 'note',
				title: 'Build it in CI, not on a machine',
				text: 'A laptop build makes the deploy hostage to one machine. On 25 September 2026 this site could not deploy for an hour: a four-day-old Docker daemon process held its sockets and ignored SIGTERM, at 0% CPU the entire time, looking exactly like a slow build. Every retry hit the same wall. A CI runner gets a clean Docker every run, and the deploy stops depending on anybody being at their desk.'
			},
			{ kind: 'h', text: 'ECR: the handoff point' },
			{
				kind: 'p',
				text: 'ECR — Elastic Container Registry — is AWS’s private image registry. It exists because Lambda cannot read a laptop or a CI runner: the image has to sit somewhere both the builder and the runtime can reach. Pushing produces a content digest (sha256:…), and the Lambda is pinned to that digest rather than to a tag.'
			},
			{
				kind: 'p',
				text: 'Pinning by digest rather than by :latest is what makes a deploy reproducible. A tag can be moved to point at different bytes; a digest cannot. The same property is what lets a CDN cache fingerprinted assets forever — if the content changes, the name changes.'
			},
			{ kind: 'h', text: 'The Lambda Web Adapter' },
			{
				kind: 'p',
				text: 'LWA stands for Lambda Web Adapter. Lambda’s native contract is an event in and a JSON response out — nothing like HTTP, and nothing a Node web server understands. The adapter is a small binary copied into /opt/extensions/, a path Lambda scans and starts automatically. It receives the Lambda event, makes a real HTTP request to localhost:8080, waits for the response, and converts it back into the shape Lambda expects.'
			},
			{
				kind: 'table',
				head: ['Environment variable', 'Value', 'What it does'],
				rows: [
					['PORT', '8080', 'Tells the SvelteKit server which port to listen on.'],
					['AWS_LWA_PORT', '8080', 'Tells the adapter which port to knock on. These two MUST agree — this is the whole contract between them.'],
					['AWS_LWA_READINESS_CHECK_PATH', '/health', 'How the adapter knows Node has finished booting before it forwards the first request.']
				]
			},
			{
				kind: 'p',
				text: 'The adapter is pinned at 0.8.4 rather than latest. Something that intercepts every request into the product is not something to let change silently on a rebuild.'
			},
			{ kind: 'h', text: 'CloudFront: TLS and three caching policies' },
			{
				kind: 'p',
				text: 'CloudFront is the CDN in front of everything — roughly 600 edge locations, so a request is answered near the person making it rather than crossing an ocean to one region. It does two jobs, and the second is where the interesting decisions live.'
			},
			{
				kind: 'p',
				text: 'TLS terminates at the edge. The certificate comes from ACM, validated by DNS — a record in the zone that only the domain’s owner could place — which is why it renews itself without anybody remembering. http is redirected to https, and anything below TLS 1.2 is refused. TLS is the protocol; SSL is its deprecated predecessor, and the only reason the word survives is that AWS kept the old setting names.'
			},
			{
				kind: 'table',
				head: ['Path', 'Cache policy', 'Why that one'],
				rows: [
					['/* — every page', 'disabled', 'Pages are server-rendered per signed-in person. Caching them would serve one reader another reader’s page. This is a correctness decision, not a performance one.'],
					['/_app/immutable/*', 'optimized', 'SvelteKit fingerprints these filenames with a content hash, so a changed file gets a new name. The old name can safely be cached forever.'],
					['/media/*', 'optimized', 'Video and audio: large, and their keys never change. Range requests are supported, which is what lets a viewer seek inside a cached video without refetching it.']
				]
			},
			{
				kind: 'note',
				title: 'Compression is on for pages and off for media',
				text: 'Text compresses well. An MP4 is already compressed, so compressing it again spends CPU at every edge to produce a file the same size. Small setting, and it is the difference between a CDN that helps and one that is merely in the way.'
			},
			{ kind: 'h', text: 'Why this shape, and what it costs' },
			{
				kind: 'p',
				text: 'SvelteKit has adapters that target Lambda directly and produce a handler function. They are simpler to deploy, and they couple the application to the platform: the build output is no longer a server, and running it anywhere else means changing the build. Building with adapter-node and putting the Web Adapter in front keeps the application unaware of Lambda entirely.'
			},
			{
				kind: 'p',
				text: 'The same image then runs on a laptop, on Fargate, on ECS, or on any host that runs containers, and `npm run preview` behaves like production rather than approximating it. The cost is one more moving part in the image and a port contract between two environment variables that must agree — a cheap price for not being locked to one runtime.'
			}
		]
	}
];

export const pieceBySlug = (slug: string) => PIECES.find((p) => p.slug === slug);
