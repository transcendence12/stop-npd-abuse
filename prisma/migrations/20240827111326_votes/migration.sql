/*
  Warnings:

  - A unique constraint covering the columns `[userId,specialistId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[anonymousId,specialistId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ipAddress,specialistId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `anonymousId` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vote" ADD COLUMN     "anonymousId" TEXT NOT NULL,
ADD COLUMN     "ipAddress" TEXT,
ALTER COLUMN "userId" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Vote_anonymousId_idx" ON "Vote"("anonymousId");

-- CreateIndex
CREATE INDEX "Vote_ipAddress_idx" ON "Vote"("ipAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_userId_specialistId_key" ON "Vote"("userId", "specialistId");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_anonymousId_specialistId_key" ON "Vote"("anonymousId", "specialistId");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_ipAddress_specialistId_key" ON "Vote"("ipAddress", "specialistId");
