// One Prisma client per process (each client owns a connection pool).
import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function create() {
	const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
	return new PrismaClient({ adapter, log: dev ? ['warn', 'error'] : ['error'] });
}

export const db: PrismaClient = globalForPrisma.prisma ?? create();
if (dev) globalForPrisma.prisma = db;
