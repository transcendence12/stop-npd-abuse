"use server"
import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";

export async function addFavoriteSpecialist(specialistId: string, userId: string){
    await prisma.favorite.create({
        data: {
            specialistId,
            userId
        }
    })

    revalidatePath('/specialists')
}