"use client";

import { deleteFavoriteSpecialist } from "@/actions/deleteFavoriteSpecialist";
import { getFavoriteSpecialist } from "@/actions/getFavoriteSpecialist";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  // const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleDelete = async () => {
    // const loggedInUser = await checkUser()
    try {
      setIsPending(true);
      
      await deleteFavoriteSpecialist(specialistId);
      console.log("SPECIALIST IS DELETED NOW");
      // opcja z useTransition i getFavoriteSpecialist tez nie działa
      // await getFavoriteSpecialist()
      // startTransition(()=> {
      //   router.refresh()
      // })
      // router.push('/favorites')
      // router.refresh();
      // router.refresh() nie działa. Tymczasowe rozwiązanie, które DZIAŁA to:
      window.location.reload()
      // tez nie działa ponowne pobranie specjalistów bo usunięci nie znikają z ui:
      // await getFavoriteSpecialist()
    } catch (error) {
      console.error(
        "Nie udalo się usunąć specjalisty z Twojej listy ulubionych specjalistów.",
        error
      );
      setError(
        "Nie udalo się usunąć specjalisty z Twojej listy ulubionych specjalistów. Spróbuj ponownie później."
      );
    } finally {
      setIsPending(false);
      setIsModalOpen(false);
      
    }
  };
  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => setIsModalOpen(true)}
        disabled={isPending}
      >
        Usuń z ulubionych
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <p className="mb-4">
              Czy na pewno chcesz usunąć {specialistName} z listy ulubionych?
            </p>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded mr-2"
              onClick={handleDelete}
              disabled={isPending}
            >
              {isPending ? "Usuwanie..." : "Usuń"}
            </button>
            <button
              className="btn"
              onClick={() => setIsModalOpen(false)}
              disabled={isPending}
            >
              Anuluj
            </button>
          </div>
        </div>
      )}

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
