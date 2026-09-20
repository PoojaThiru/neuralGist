// Tiny in-memory sliding-window limiter. Enough for one node; swap for Redis/DynamoDB if you scale out.
const buckets = new Map<string, number[]>();

export function limited(key: string, max: number, windowS: number): boolean {
	const now = Date.now();
	const since = now - windowS * 1000;
	const hits = (buckets.get(key) ?? []).filter((t) => t > since);
	if (hits.length >= max) {
		buckets.set(key, hits);
		return true;
	}
	hits.push(now);
	buckets.set(key, hits);
	if (buckets.size > 10_000) buckets.clear();
	return false;
}

export function clientIp(request: Request): string {
	return (
		request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
		request.headers.get('cf-connecting-ip') ||
		'local'
	);
}
