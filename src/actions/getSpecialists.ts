"use server";
import prisma from "@/lib/prismaClient";
import { Specialist } from "@/types/Specialist";
import { auth } from "@clerk/nextjs/server";


async function getSpecialists(): Promise<Specialist[]> {
  // pobierz userId z sesji usera
  const {userId} = auth()
  try {
    const specialists = await prisma.specialist.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        specialisationTypes: true,
        email: true,
        phoneNumber: true,
        votes: {
          select: {
            userId: true
          }
        },
      },
    });
    return specialists.map((specialist)=>({
        ...specialist,
        specialisation: specialist.specialisationTypes.map(type => type.toString()),
        votes: specialist.votes.length,
        // czy user polubił:
        hasVoted: userId ? specialist.votes.some((vote)=> vote.userId === userId) : false,
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
