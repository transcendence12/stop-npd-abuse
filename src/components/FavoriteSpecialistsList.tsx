"use client";
import { getFavoriteSpecialist } from "@/actions/getFavoriteSpecialist";
import { useEffect, useState } from "react";
import { FavoriteSpecialist } from "@/types/FavoriteSpecialist";

export const FavoriteSpecialistsList:React.FC = () => {
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
    <ul>
      {favorites.map(
        (specialist =>(
          <li key={specialist.id}>
            {specialist.firstName} {specialist.lastName} -{" "}
            {specialist.specialisationTypes && specialist.specialisationTypes.join(", ").replace(/_/g, " ")}
          </li>
        ))
      )}
    </ul>
  );
};
