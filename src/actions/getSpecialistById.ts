"use server";

import prisma from "@/lib/prismaClient";
import { SpecialistItem } from "@/types/SpecialistItem";

export async function getSpecialistById(
  id: string
): Promise<SpecialistItem | null> {
  try {
    const singleSpecialist = await prisma.specialist.findUnique({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        website: true,
        email: true,
        phoneNumber: true,
        isWhatsApp: true,
        city: true,
        isOnline: true,
        isAcceptedNfz: true,
        isPaid: true,
        company: true,
        socialMediaLinks: true,
        specialisationTypes: true,
        books: true,
        favorites: true,
        votes: {
          select: {
            id: true
          }
        }
      },
    });
    if(singleSpecialist){
        return {
            ...singleSpecialist,
            specialisation: singleSpecialist.specialisationTypes.map(type=> type.toString()),
            votesCount: singleSpecialist.votes.length
        }
    }
    return null
  } catch (error) {
    console.error("Error while fetching single specialist by id", error);
    return null
  }
}
