"use server";
import prisma from "@/lib/prismaClient";
import { Specialist } from "@/types/Specialist";


async function getSpecialists(): Promise<Specialist[]> {
  try {
    const specialists = await prisma.specialist.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        specialisationTypes: true,
        email: true,
        phoneNumber: true
      },
    });
    return specialists.map((specialist)=>({
        ...specialist,
        specialisation: specialist.specialisationTypes.map(type => type.toString())
    }));
  } catch (error) {
    console.error("Error fetching specialists:", error);
    return [];
  }
}

// async function getSpecialists(): Promise<{
//   specialists?: Specialist[];
//   error?: string;
  
// }> {
//   try {
//     const specialists = await prisma.specialist.findMany({
//         select: {
//             id: true,
//             firstName: true,
//             lastName: true
//         }
//     });
//     return {specialists};
//   } catch (error) {
//     console.error("Error fetching specialists:", error);
//     return {}
//   }
// }

export default getSpecialists;
