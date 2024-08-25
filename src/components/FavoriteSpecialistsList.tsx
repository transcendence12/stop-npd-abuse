"use client";
import { getFavoriteSpecialist } from "@/actions/getFavoriteSpecialist";
import { useEffect, useState } from "react";
import { SpecialistItem } from "@/types/SpecialistItem";

export const FavoriteSpecialistsList:React.FC = () => {
  const [favorites, setFavorites] = useState<SpecialistItem[]>([]);
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
            {specialist.specialisation && specialist.specialisation.join(", ").replace(/_/g, " ")}
          </li>
        ))
      )}
    </ul>
  );
};
