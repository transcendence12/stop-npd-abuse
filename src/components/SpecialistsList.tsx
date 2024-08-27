import { Specialist } from "@/types/Specialist";
import Link from "next/link";
import { ButtonSeeMore } from "./ButtonSeeMore";
import { ButtonAddToFavorite } from "./ButtonAddToFavorite";
import prisma from "@/lib/prismaClient";
import { checkUser } from "@/lib/checkUser";
import { auth } from "@clerk/nextjs/server";
import { LikeButton } from "./LikeButton";

interface SpecialistsPageProps {
  specialists: Specialist[];
}

export const SpecialistsList: React.FC<SpecialistsPageProps> = async () => {
  const { userId } = auth();
  if (userId) {
    // Query DB for user specific information or display assets only to signed in users
  }
  const specialists = await prisma.specialist.findMany({
    include: {
      votes: true,
    }
  });
  const user = await checkUser();
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
                  {specialist.specialisationTypes
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
                <LikeButton initialLikes={specialist.votes.length} specialistId={specialist.id} hasJustLiked={specialist.hasVoted} />
                {(
                  <ButtonAddToFavorite
                    specialistId={specialist.id}
                    userId={user?.id}
                  />
                )}
                <ButtonSeeMore specialistId={specialist.id} />
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
};
