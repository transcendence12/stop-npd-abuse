-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Specialisation_type" ADD VALUE 'TERAPEUTA_TRANSPERSONALNY';
ALTER TYPE "Specialisation_type" ADD VALUE 'TERAPEUTKA_TRANSPERSONALNA';
ALTER TYPE "Specialisation_type" ADD VALUE 'TERAPEUTKA';
ALTER TYPE "Specialisation_type" ADD VALUE 'PSYCHOTERAPEUTA';
ALTER TYPE "Specialisation_type" ADD VALUE 'ADWOKAT';
ALTER TYPE "Specialisation_type" ADD VALUE 'SPECJALISTKA_W_ZAKRESIE_POMOCY_OFIAROM_PRZEMOCY_DOMOWEJ';
