// import { createClient } from "@/utils/supabase/server";
import prisma from "@/lib/prismaClient";
import { createClient } from "@supabase/supabase-js";

interface Specialist {
  id: string;
  firstName: string;
  lastName: string;
}
interface SpecialistsPageProps {
  specialists: Specialist[];
}

export async function fetchSpecialists(): Promise<Specialist[]> {
  try {
    const specialists = await prisma.specialist.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
    });
    return specialists;
  } catch (error) {
    console.error("Error fetching specialists:", error);
    return [];
  }
}
interface SpecialistsPageProps {
  specialists: Specialist[];
}

const SpecialistsPage: React.FC<SpecialistsPageProps> = ({ specialists }) => {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        Wszyscy specjaliści
      </h1>
      <ul>
        {specialists.map((specialist) => (
          <li key={specialist.id}>
            {specialist.firstName} {specialist.lastName}
          </li>
        ))}
      </ul>
    </main>
  );
};

const Page = async () => {
  const specialists = await fetchSpecialists();
  return <SpecialistsPage specialists={specialists} />;
};

export default Page;
