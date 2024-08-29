/*
  Warnings:

  - You are about to drop the column `anonymousId` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `ipAddress` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Vote` table. All the data in the column will be lost.
  - Made the column `userId` on table `Vote` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Vote_anonymousId_idx";

-- DropIndex
DROP INDEX "Vote_anonymousId_specialistId_key";

-- DropIndex
DROP INDEX "Vote_ipAddress_idx";

-- DropIndex
DROP INDEX "Vote_ipAddress_specialistId_key";

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "anonymousId",
DROP COLUMN "ipAddress",
DROP COLUMN "text",
ALTER COLUMN "userId" SET NOT NULL;
