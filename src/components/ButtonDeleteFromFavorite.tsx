"use client";

import { deleteFavoriteSpecialist } from "@/actions/deleteFavoriteSpecialist";
import { checkUser } from "@/lib/checkUser";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface ButtonDeleteFromFavoriteProps {
  specialistId: string;
  specialistName: string;
}

export const ButtonDeleteFromFavorite: React.FC<
  ButtonDeleteFromFavoriteProps
> = ({ specialistId, specialistName }) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleDelete = async () => {
    // const loggedInUser = await checkUser()
    try {
      setError(null);
      startTransition(async () => {
        await deleteFavoriteSpecialist(specialistId);
        router.refresh();
      });
    } catch (error) {
      console.error(
        "Nie udalo się usunąć specjalisty z Twojej listy ulubionych specjalistów.",
        error
      );
      setError(
        "Nie udalo się usunąć specjalisty z Twojej listy ulubionych specjalistów. Spróbuj ponownie później."
      );
    }
  };
  return (
    <div>
      <button type="button" className="hover:underline" onClick={handleDelete} disabled={isPending}>
        {isPending ? "Usuwanie..." : "Usuń z ulubionych"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
