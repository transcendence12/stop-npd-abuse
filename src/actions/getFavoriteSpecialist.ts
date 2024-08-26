"use server";

import prisma from "@/lib/prismaClient";
import { SpecialistItem } from "@/types/SpecialistItem";
import { auth } from "@clerk/nextjs/server";

// console.log(auth().userId)
export const getFavoriteSpecialist = async () => {
  const userId = auth().userId;

  if (!userId) {
    throw new Error("User not authenticated!");
  }

  const favorites = await prisma.favorite.findMany({
    where: {
      userId: userId,
    },
    include: {
      specialist: true,
    },
  });
  // console.log(favorites)
  return favorites.map((favorite)=>favorite.specialist)
};
