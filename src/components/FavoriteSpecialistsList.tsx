"use client";
import { getFavoriteSpecialist } from "@/actions/getFavoriteSpecialist";
import { useEffect, useState } from "react";
import { FavoriteSpecialist } from "@/types/FavoriteSpecialist";
import Link from "next/link";

export const FavoriteSpecialistsList: React.FC = () => {
  const [favorites, setFavorites] = useState<FavoriteSpecialist[]>([]);
  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await getFavoriteSpecialist();
      // console.log(data)
      setFavorites(data);
    };
    fetchFavorites();
  }, []);
  return (
    <ul className="w-4/5 text-center m-auto">
      {favorites.map((specialist) => (
        <Link href={`/specialists/${specialist.id}`} key={specialist.id}>
          <li className="mb-4 border-b bg-sky-100 hover:bg-sky-300 hover:underline">
            {specialist.firstName} {specialist.lastName} -{" "}
            {specialist.specialisationTypes &&
              specialist.specialisationTypes.join(", ").replace(/_/g, " ")}
          </li>
        </Link>
      ))}
    </ul>
  );
};
