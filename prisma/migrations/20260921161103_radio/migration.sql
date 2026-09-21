-- CreateEnum
CREATE TYPE "EpisodeStatus" AS ENUM ('QUEUED', 'GENERATING', 'READY', 'PUBLISHED', 'FAILED');

-- CreateTable
CREATE TABLE "Episode" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "summary" TEXT NOT NULL DEFAULT '',
    "theme" TEXT,
    "sourceSlugs" TEXT[],
    "transcript" JSONB,
    "audioPath" TEXT,
    "durationSec" INTEGER NOT NULL DEFAULT 0,
    "characters" INTEGER NOT NULL DEFAULT 0,
    "status" "EpisodeStatus" NOT NULL DEFAULT 'QUEUED',
    "auto" BOOLEAN NOT NULL DEFAULT false,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "error" TEXT,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Setting" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("key")
);

-- CreateIndex
CREATE INDEX "Episode_status_publishedAt_idx" ON "Episode"("status", "publishedAt");
