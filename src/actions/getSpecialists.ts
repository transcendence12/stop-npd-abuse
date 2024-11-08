"use server";
import prisma from "@/lib/prismaClient";
import { Specialist } from "@/types/Specialist";
import { auth } from "@clerk/nextjs/server";
import { SpecialisationType } from "@prisma/client";

interface GetSpecialistsParams {
  query?: string | undefined;
  category?: string;
  offset?: number;
  limit?: number;
}

// Promise<Specialist[]>
async function getSpecialists({
  query,
  category,
  offset = 0,
  limit = 4,
}: GetSpecialistsParams) {
  // pobierz userId z sesji usera
  const { userId } = auth();

  const specialisationTypes = Object.values(SpecialisationType)
  console.log("typ specialisty: ", SpecialisationType)

  try {
    const specialists = await prisma.specialist.findMany({
      skip: offset,
      take: limit,
      where: {
        OR: [
          { firstName: { contains: query, mode: "insensitive" } },
          { lastName: { contains: query, mode: "insensitive" } },
          { city: { contains: query, mode: "insensitive"}}
          // { specialisationTypes: { some: { type: { contains: search, mode: "insensitive" } } } },
        ],
        ...(category && {
          specialisationTypes: {
            has: category as SpecialisationType,
          }
        }),
      },
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

    const data = specialists.map((specialist) => ({
      ...specialist,
      specialisation: specialist.specialisationTypes.map((type) =>
        type.toString()
      ),
      votes: specialist.votes.length,
      // czy user polubił:
      hasVoted: userId
        ? specialist.votes.some((vote) => vote.userId === userId)
        : false,
    }));
    const totalCount = await prisma.specialist.count({
      where: {
        OR: [
          { firstName: { contains: query, mode: "insensitive" } },
          { lastName: { contains: query, mode: "insensitive" } },
          { city: { contains: query, mode: "insensitive"}}
          // { specialisationTypes: { some: { type: { contains: query, mode: "insensitive" } } } },
        ],
        ...(category && {
          specialisationTypes: {
            has: category as SpecialisationType,
          }
        })
      },
    });
    console.log("kategoria: ", category)
    const totalPages = Math.ceil(totalCount / limit);
    return { specialists: data, totalCount, totalPages, specialisationTypes };
  } catch (error) {
    console.error("Error fetching specialists:", error);
    return { specialists: [], totalCount: 0, totalPages: 0, specialisationTypes };
  }
}

export default getSpecialists;
