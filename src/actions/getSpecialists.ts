"use server";
import prisma from "@/lib/prismaClient";
import { Specialist } from "@/types/Specialist";
import { auth } from "@clerk/nextjs/server";
import { SpecialisationType } from "@prisma/client";

// interface GetSpecialistsParams {
//  searchParams: string;
// }
async function getSpecialists(): Promise<Specialist[]> {
  // pobierz userId z sesji usera
  const { userId } = auth();
  const params = new URLSearchParams();
  // const query = params.get("query" || "");
  // const page = parseInt(params.get(("page") || "1", 4));
  // const pageSize = 4;
  try {
    // const skip = (page - 1) * pageSize;
    const specialists = await prisma.specialist.findMany({
      // skip,
      // take: pageSize,
      // where: 
      //     {specialisationTypes: SpecialisationType},
      select: {
        id: true,
        firstName: true,
        lastName: true,
        specialisationTypes: true,
        email: true,
        phoneNumber: true,
        votes: {
          select: {
            userId: true,
          },
        },
      },
    });
    // const specialistsCount = await prisma.specialist.count()
    return specialists.map((specialist) => ({
      ...specialist,
      specialisation: specialist.specialisationTypes.map((type) =>
        type.toString()
      ),
      votes: specialist.votes.length,
      // czy user polubił:
      hasVoted: userId
        ? specialist.votes.some((vote) => vote.userId === userId)
        : false,
      // specialistsCount: specialistsCount,
    }));
  } catch (error) {
    console.error("Error fetching specialists:", error);
    return [];
  }
}

export default getSpecialists;
