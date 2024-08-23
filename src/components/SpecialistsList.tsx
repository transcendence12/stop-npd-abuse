import { Specialist } from "@/types/Specialist";
import Link from "next/link";
import { ButtonSeeMore } from "./ButtonSeeMore";
import { ButtonAddToFavorite } from "./ButtonAddToFavorite";

interface SpecialistsPageProps {
  specialists: Specialist[];
}

export const SpecialistsList: React.FC<SpecialistsPageProps> = ({
  specialists,
}) => {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        Wszyscy specjaliści
      </h1>
      <ul className="space-y-4">
        {specialists &&
          specialists.map((specialist) => (
            <li key={specialist.id} className="border p-4 rounded-md shadow-sm">
              <Link href={`/specialists/${specialist.id}`}>
                <p className="text-xl font-semibold">
                  {specialist.firstName} {specialist.lastName}
                </p>
                <p className="text-grey-600">
                  Specjalizacje:{" "}
                  {specialist.specialisation
                    .join(", ")
                    .replace("_", " ")
                    .toLowerCase()}
                </p>
                <p className="text-grey-600">
                  Telefon:{" "}
                  {specialist.phoneNumber
                    ? specialist.phoneNumber
                    : "Brak danych"}
                </p>
                <p className="text-grey-600">Email: {specialist.email}</p>
              </Link>
              <div className="flex gap-6 justify-center items-baseline">
                <ButtonAddToFavorite />
                <ButtonSeeMore specialistId={specialist.id} />
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
};
