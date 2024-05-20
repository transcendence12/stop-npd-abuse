-- CreateEnum
CREATE TYPE "Specialisation_type" AS ENUM ('Psycholog', 'Psychoterapeuta', 'Psychoterapeutka', 'Prawnik', 'Coach');

-- CreateTable
CREATE TABLE "Specialist" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "specialisation_type" "Specialisation_type" NOT NULL,
    "website" TEXT,
    "phone_number" TEXT,
    "whats_app" BOOLEAN,
    "youtube_channel" TEXT,
    "online" BOOLEAN,
    "accepts_nfz" BOOLEAN,
    "accepts_private" BOOLEAN,

    CONSTRAINT "Specialist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Specialist_email_key" ON "Specialist"("email");
