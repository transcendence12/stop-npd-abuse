"use client";
import { getFavoriteSpecialist } from "@/actions/getFavoriteSpecialist";
import { useEffect, useState } from "react";
import { FavoriteSpecialist } from "@/types/FavoriteSpecialist";
import Link from "next/link";
import { ButtonDeleteFromFavorite } from "./ButtonDeleteFromFavorite";
import { ButtonSeeMore } from "./ButtonSeeMore";

export const FavoriteSpecialistsList: React.FC = () => {
  const [favorites, setFavorites] = useState<FavoriteSpecialist[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getFavoriteSpecialist();
        // console.log(data)

        setFavorites(data);
      } catch (error) {
        setError("Wystąpił błąd podczas ładowania danych.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);

  if (loading) return <p>Ładowanie..... </p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="md:w-3/4 flex flex-wrap justify-center items-center gap-8 m-auto mb-10">
      {favorites.map((specialist) => (
        <div className="card bg-base-100 w-96 shadow-xl" key={specialist.id}>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <Link href={`/specialists/${specialist.id}`} key={specialist.id}>
                {specialist.firstName} {specialist.lastName}
              </Link>
            </h2>
            <p>
              {specialist.specialisationTypes &&
                specialist.specialisationTypes.join(", ").replace(/_/g, " ")}
            </p>
            <div className="card-actions justify-center items-center gap-8">
              <ButtonDeleteFromFavorite
                specialistId={specialist.id}
                specialistName={`${specialist.firstName} ${specialist.lastName}`}
              />

              <ButtonSeeMore specialistId={specialist.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
