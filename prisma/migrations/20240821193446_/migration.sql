/*
  Warnings:

  - The values [psycholog_kliniczny,psycholozka_kliniczna,psycholog_sadowy,psycholozka_sadowa,kuratorka_sadowa,kurator_sadowy,specjalista_pomocy_ofiarom_przemocy_domowej,specjalistka_pomocy_ofiarom_przemocy_domowej] on the enum `Specialisation_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MODERATOR', 'USER');

-- AlterEnum
BEGIN;
CREATE TYPE "Specialisation_type_new" AS ENUM ('PSYCHOLOG', 'PSYCHOLOZKA', 'PSYCHOLOG_KLINICZNY', 'PSYCHOLOZKA_KLINICZNA', 'TERAPEUTA', 'PSYCHOTERAPEUTKA', 'COACH', 'PRAWNIK', 'PRAWNICZKA', 'MEDIATOR', 'MEDIATORKA', 'SEX_COACH', 'NAUCZYCIEL', 'NAUCZYCIELKA', 'TRENER', 'TRENERKA', 'PEDAGOG', 'PEDAGOZKA', 'PSYCHOLOG_SADOWY', 'PSYCHOLOZKA_SADOWA', 'KURATORKA_SADOWA', 'KURATOR_SADOWY', 'FACYLITATOR', 'FACYLITATORKA', 'MENTOR', 'MENTORKA', 'SPECJALISTA_POMOCY_OFIAROM_PRZEMOCY_DOMOWEJ', 'SPECJALISTKA_POMOCY_OFIAROM_PRZEMOCY_DOMOWEJ');
ALTER TABLE "specialists" ALTER COLUMN "specialisationTypes" TYPE "Specialisation_type_new"[] USING ("specialisationTypes"::text::"Specialisation_type_new"[]);
ALTER TYPE "Specialisation_type" RENAME TO "Specialisation_type_old";
ALTER TYPE "Specialisation_type_new" RENAME TO "Specialisation_type";
DROP TYPE "Specialisation_type_old";
COMMIT;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "clerkUserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "text" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "specialistId" TEXT NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "specialistId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "User"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Vote_userId_idx" ON "Vote"("userId");

-- CreateIndex
CREATE INDEX "Vote_specialistId_idx" ON "Vote"("specialistId");

-- CreateIndex
CREATE INDEX "Favorite_userId_idx" ON "Favorite"("userId");

-- CreateIndex
CREATE INDEX "Favorite_specialistId_idx" ON "Favorite"("specialistId");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_specialistId_key" ON "Favorite"("userId", "specialistId");

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerkUserId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "specialists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerkUserId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "specialists"("id") ON DELETE CASCADE ON UPDATE CASCADE;
