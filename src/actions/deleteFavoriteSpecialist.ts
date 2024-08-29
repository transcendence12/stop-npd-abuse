"use server";

import prisma from "@/lib/prismaClient";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const deleteFavoriteSpecialist = async (specialistId: string) => {
  const userId = auth();

  const user = await currentUser();
  if (!userId || !user) {
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

    // sprawdzenie czy rekord istnieje:
    const checkFavorite = await prisma.favorite.findUnique({
      where: {
        userId_specialistId: {
          userId: user.id,
          specialistId: specialistId,
        },
      },
    });
    if (!checkFavorite) {
      console.log(`Rekord z userId: ${user.id} i specialistId: ${specialistId} nie istnieje.`)
      throw new Error("Nie można znaleźć rekordu do usunięcia.");
    }

    await prisma.favorite.delete({
      where: {
        userId_specialistId: {
          userId: user!.id,
          specialistId: specialistId,
        },
      },
    });
    console.log(`USUNIĘTO!!!!! Rekord z userId: ${user.id} i specialistId: ${specialistId}`);
    revalidatePath(`/favorites`)
  } catch (error) {
    console.error(
      "Błąd podczas usuwania specialisty z listy ulubionych specjalistów.",
      error
    );
    throw new Error(
      "Nie udało się usunąć specialisty z listy ulubionych specjalistów. Spróbuj ponownie później."
    );
  }
};
