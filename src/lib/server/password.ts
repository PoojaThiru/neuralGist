import { argon2id, argon2Verify } from 'hash-wasm';

// Argon2id (OWASP recommendation). WASM build, so no native module to compile in the container image.
const PARAMS = { parallelism: 1, iterations: 3, memorySize: 19456, hashLength: 32 } as const;

export async function hashPassword(password: string): Promise<string> {
	const salt = crypto.getRandomValues(new Uint8Array(16));
	return argon2id({ password, salt, ...PARAMS, outputType: 'encoded' });
}

export async function verifyPassword(hash: string, password: string): Promise<boolean> {
	try {
		return await argon2Verify({ password, hash });
	} catch {
		return false;
	}
}

// Burn roughly the same time when the account doesn't exist, so timing can't reveal registered emails.
const DUMMY_HASH = '$argon2id$v=19$m=19456,t=3,p=1$c29tZXNhbHR2YWx1ZQ$3hHquZ8s3n0Vp2m0d8H0Yy3q8mQ0h3Zk1u2v3w4x5y6';
export async function fakeVerify(password: string): Promise<void> {
	await verifyPassword(DUMMY_HASH, password);
}
