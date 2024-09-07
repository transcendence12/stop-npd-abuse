import getSpecialists from "@/actions/getSpecialists";
import { SpecialistsList } from "@/components/SpecialistsList";
import prisma from "@/lib/prismaClient";
import { Suspense } from "react";

interface SpecialistsPageProps {
  searchParams: { page?: string; query?: string };
}
const SpecialistsPage = async ({ searchParams }: SpecialistsPageProps) => {
  const currentPage = parseInt(searchParams.page || "1", 10); // Pobierz numer strony z parametrów URL
  const limit = 4; // Ustal limit na stronę
  const offset = (currentPage - 1) * limit;
  const query = searchParams.query || "";
  // Pobierz specjalistów z serwera
  const { specialists, totalCount, totalPages } = await getSpecialists({
    offset,
    limit,
    query
  });

  return (
    <main className="pt-12 px-5 bg-base-200 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mt-12 mb-12 text-center">
        Wszyscy specjaliści({totalCount})
      </h1>
      <Suspense fallback="Ładowanie...">
        <SpecialistsList
          specialists={specialists}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </Suspense>
    </main>
  );
};

export default SpecialistsPage;
