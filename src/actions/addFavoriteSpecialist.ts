"use server";
import prisma from "@/lib/prismaClient";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function addFavoriteSpecialist(specialistId: string) {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  const user = await currentUser();
  if (!user) {
    throw new Error(
      "Musisz być zalogowany aby dodać specjalistę do ulubionych."
    );
  }

  try {
    const isUserExist = await prisma.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    if (!isUserExist) {
      throw new Error("Użytkownik nie istnieje. Zaloguj się.");
    }
    if (userId) {
      // Query DB for user specific information or display assets only to signed in users
      await prisma.favorite.create({
        data: {
          specialistId,
          userId: user.id,
        },
      });
    }
  } catch (error) {
    console.error("Błąd podczas dodawania specjalisty do ulubionych.", error);
    throw new Error(
      "Nie udało się dodać specjalisty do ulubionych. Spróbuj ponownie później."
    );
  }

  revalidatePath("/specialists");
}
