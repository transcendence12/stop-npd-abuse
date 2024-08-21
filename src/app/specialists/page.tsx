// import { createClient } from "@/utils/supabase/server";
import { createClient } from '@supabase/supabase-js'

interface Specialist {
  id: string;
  firstName: string;
  lastName: string;
}
interface SpecialistsPageProps {
  specialists: Specialist[]
}

const SpecialistsPage:React.FC<SpecialistsPageProps> = ({ specialists }) => {
  console.log('Specialists in component:', specialists);
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Wszyscy specjaliści</h1>
      <ul>
        {specialists.map((specialist) => (
          <li key={specialist.id}>
            {specialist.firstName} {specialist.lastName}
          </li>
        ))}
      </ul>
    </main>
  );
}
 async function fetchSpecialists() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  // const supabase = createClient();
  const { data: specialists, error } = await supabase
    .from('specialists')
    .select();

  if (error) {
    console.error('Error fetching specialists:', error);
    return [];
  }
  console.log('Fetched specialists:', specialists);
  return specialists as Specialist[]
}

export default async function Page() {
  
  const specialists = await fetchSpecialists();
  console.log('Specialists in Page:', specialists);
  return <SpecialistsPage specialists={specialists} />;
}
