"use client";
import { addFavoriteSpecialist } from "@/actions/addFavoriteSpecialist";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { checkUser } from "@/lib/checkUser";

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

  const ariaLabel = "Zapisz specjaliste na liście ulubionych";

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
  const handleCloseErrorMessage = () => {
    setShowLoginMessage(false);
  };
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        className="btn"
        onClick={handleAddToFavorites}
        disabled={isPending}
        aria-label={ariaLabel}
      >
        {/* {isPending ? "Dodawanie..." : "❤ Zapisz w ulubionych"} */}
        {isPending ? (
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13V7M9 10H15M19 21V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V21L12 17L19 21Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <span className="tooltip" data-tip="Zapisz w ulubionych">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="oklch(var(--pc))"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13V7M9 10H15M19 21V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V21L12 17L19 21Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </button>
      {showLoginMessage && (
        // <p className="text-red-500 mt-2">
        //   Aby dodać specjalistę do ulubionych musisz być zalogowany.
        // </p>
        <div role="alert" className="alert alert-error">
          <svg
            onClick={handleCloseErrorMessage}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Aby dodać specjalistę do ulubionych musisz być zalogowany.
          </span>
        </div>
      )}
    </div>
  );
};
