"use client";
import { addFavoriteSpecialist } from "@/actions/addFavoriteSpecialist";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { checkUser } from "@/lib/checkUser";
import { Button } from "@/components/ui/button";
import { LoginAlert } from "./LoginAlert";


interface ButtonAddToFavoriteProps {
  specialistId: string;
  userId?: string;
}
export const ButtonAddToFavorite: React.FC<ButtonAddToFavoriteProps> = ({
  specialistId,
  userId,
}) => {
  const [isPending, startTransition] = useTransition();
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const router = useRouter();

  const handleAddToFavorites = () => {
    if (!userId) {
      setShowLoginMessage(true);
      return;
    }
    startTransition(() => {
      addFavoriteSpecialist(specialistId)
        .then(() => {
          router.refresh();
        })
        .catch((error) => {
          console.error("Nie udało się dodać do ulubionych: ", error);
          // wyświetlenie powiadomienia o błędzie tutaj...
        });
    });
  };
  return (
    <div>
      <Button
        className=""
        onClick={handleAddToFavorites}
        disabled={isPending}
      >
        {isPending ? "Dodawanie..." : "❤ Dodaj do ulubionych"}
      </Button>
      {showLoginMessage && (
        // <p className="text-red-500 mt-2">
        //   Aby dodać specjalistę do ulubionych musisz być zalogowany.
        // </p>
        <LoginAlert />
      )}
    </div>
  );
};
