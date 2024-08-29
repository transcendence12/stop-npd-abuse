"use server";

import prisma from "@/lib/prismaClient";
import { auth, currentUser } from "@clerk/nextjs/server";

export const deleteFavoriteSpecialist = async (specialistId: string) => {
  const userId = auth();

  const user = await currentUser();
  if (!userId) {
    throw new Error(
      "Musisz być zalogowany żeby usunąć specjalistę z listy ulubionych specialistów."
    );
  }

  try {
    const isUserExist = await prisma.user.findUnique({
      where: {
        clerkUserId: user?.id,
      },
    });
    if (!isUserExist) {
      throw new Error("Użytkownik nie istnieje. Zaloguj się.");
    }
    if (userId) {
      await prisma.favorite.delete({
        
          where: {
            userId_specialistId: {
                userId: user!.id,
                specialistId: specialistId,
            }
            
          },
      });
    }
  } catch (error) {
    console.error(
      "Błąd podczas usuwania specialisty z listy ulubionych specjalistów.", error
    );
    throw new Error(
      "Nie udało się usunąć specialisty z listy ulubionych specjalistów. Spróbuj ponownie później."
    );
  }
};
