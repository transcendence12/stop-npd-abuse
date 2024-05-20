/*
  Warnings:

  - You are about to drop the column `specialisation_type` on the `Specialist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Specialist" DROP COLUMN "specialisation_type",
ADD COLUMN     "city" TEXT;

-- DropEnum
DROP TYPE "Specialisation_type";

-- CreateTable
CREATE TABLE "SpecialistSpecialisation" (
    "specialistId" TEXT NOT NULL,
    "specialisationId" TEXT NOT NULL,

    CONSTRAINT "SpecialistSpecialisation_pkey" PRIMARY KEY ("specialistId","specialisationId")
);

-- CreateTable
CREATE TABLE "SpecialisationType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SpecialisationType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SpecialisationType_name_key" ON "SpecialisationType"("name");

-- AddForeignKey
ALTER TABLE "SpecialistSpecialisation" ADD CONSTRAINT "SpecialistSpecialisation_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "Specialist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecialistSpecialisation" ADD CONSTRAINT "SpecialistSpecialisation_specialisationId_fkey" FOREIGN KEY ("specialisationId") REFERENCES "SpecialisationType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
