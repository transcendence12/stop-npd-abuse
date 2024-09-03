import getSpecialists from "@/actions/getSpecialists";
import { SpecialistsList } from "@/components/SpecialistsList";
import prisma from "@/lib/prismaClient";
import { Suspense } from "react";

const SpecialistsPage = async () => {
  const specialistsCount = await prisma.specialist.count();
  const specialists = await getSpecialists();

  return (
    <main className="pt-12 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Wszyscy specjaliści({specialistsCount})
      </h1>
      <Suspense fallback="Ładowanie...">
        <SpecialistsList specialists={specialists} />
      </Suspense>
    </main>
  );
};

export default SpecialistsPage;
