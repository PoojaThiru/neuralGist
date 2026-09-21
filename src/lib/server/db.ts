// One Prisma client per process (each client owns a connection pool).
import { readFileSync } from 'node:fs';
import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// TLS: when PGSSLROOTCERT names a CA bundle (RDS in production), verify the server against it.
// Otherwise the connection string decides (local Postgres has no TLS).
function sslConfig() {
	return env.PGSSLROOTCERT ? { ca: readFileSync(env.PGSSLROOTCERT, 'utf8'), rejectUnauthorized: true } : undefined;
}

function create() {
	const ssl = sslConfig();
	// pg lets connection-string params override explicit config, so drop sslmode when we supply the CA ourselves.
	const url = new URL(env.DATABASE_URL ?? '');
	if (ssl) url.searchParams.delete('sslmode');
	const adapter = new PrismaPg({ connectionString: url.toString(), ...(ssl ? { ssl } : {}) });
	return new PrismaClient({ adapter, log: dev ? ['warn', 'error'] : ['error'] });
}

export const db: PrismaClient = globalForPrisma.prisma ?? create();
if (dev) globalForPrisma.prisma = db;
