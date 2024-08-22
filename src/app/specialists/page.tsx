import getSpecialists from "@/actions/getSpecialists";
import { SpecialistsList } from "@/components/SpecialistsList";


const SpecialistsPage = async () => {
  const specialists = await getSpecialists();
  return <SpecialistsList specialists={specialists} />;
};

export default SpecialistsPage;
