-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "auth";

-- CreateEnum
CREATE TYPE "public"."Specialisation_type" AS ENUM ('PSYCHOLOG', 'PSYCHOLOZKA', 'psycholog_kliniczny', 'psycholozka_kliniczna', 'TERAPEUTA', 'PSYCHOTERAPEUTKA', 'COACH', 'PRAWNIK', 'PRAWNICZKA', 'MEDIATOR', 'MEDIATORKA', 'SEX_COACH', 'NAUCZYCIEL', 'NAUCZYCIELKA', 'TRENER', 'TRENERKA', 'PEDAGOG', 'PEDAGOZKA', 'psycholog_sadowy', 'psycholozka_sadowa', 'kuratorka_sadowa', 'kurator_sadowy', 'FACYLITATOR', 'FACYLITATORKA', 'MENTOR', 'MENTORKA', 'specjalista_pomocy_ofiarom_przemocy_domowej', 'specjalistka_pomocy_ofiarom_przemocy_domowej');

-- CreateTable
CREATE TABLE "public"."specialists" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "website" TEXT,
    "email" TEXT NOT NULL,
    "phone_number" TEXT,
    "is_whats_app" BOOLEAN,
    "city" TEXT,
    "is_online" BOOLEAN,
    "is_accepted_nfz" BOOLEAN,
    "is_paid" BOOLEAN,
    "company" TEXT,
    "specialisationTypes" "public"."Specialisation_type"[],

    CONSTRAINT "specialists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."social_media_links" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "specialist_id" TEXT NOT NULL,

    CONSTRAINT "social_media_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."books" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "specialist_id" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "specialists_email_key" ON "public"."specialists"("email");

-- AddForeignKey
ALTER TABLE "public"."social_media_links" ADD CONSTRAINT "social_media_links_specialist_id_fkey" FOREIGN KEY ("specialist_id") REFERENCES "public"."specialists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."books" ADD CONSTRAINT "books_specialist_id_fkey" FOREIGN KEY ("specialist_id") REFERENCES "public"."specialists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
