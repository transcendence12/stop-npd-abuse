import { Specialist } from "@/types/Specialist";
import Link from "next/link";
import { ButtonSeeMore } from "./ButtonSeeMore";
import { ButtonAddToFavorite } from "./ButtonAddToFavorite";
import { checkUser } from "@/lib/checkUser";
import { auth } from "@clerk/nextjs/server";
import { LikeButton } from "./LikeButton";
import { Pagination } from "./Pagination";
import { SearchSpecialist } from "./SearchSpecialist";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { EmailIcon } from "@/assets/icons/EmailIcon";
import { ButtonCopy } from "./ButtonCopy";

interface SpecialistsListProps {
  specialists: Specialist[];
  totalPages: number;
  currentPage: number;
}

export const SpecialistsList: React.FC<SpecialistsListProps> = async ({
  specialists,
  totalPages,
  currentPage,
}) => {
  const { userId } = auth();
  if (userId) {
    // Query DB for user specific information or display assets only to signed in users
  }

  const user = await checkUser();
  return (
    <section className="container mx-auto max-w-[1100px]">
      <SearchSpecialist />
      <div className="flex justify-center items-center gap-16 flex-wrap">
        {specialists &&
          specialists.map((specialist) => (
            <div
              key={specialist.id}
              className="card bg-base-100 w-96 shadow-xl"
            >
              <div className="card-body">
                <Link href={`/specialists/${specialist.id}`}>
                  <h2 className="card-title">
                    {specialist.firstName} {specialist.lastName}
                  </h2>
                </Link>
                <div className="badge badge-accent capitalize">
                  {specialist.specialisation[0].replace("_", " ").toLowerCase()}
                </div>
                <p className="flex gap-2">
                  <span className="tooltip" data-tip="Numer telefonu">
                    <PhoneIcon />
                  </span>
                  <span>
                    {specialist.phoneNumber ? (
                      <Link
                        href={`tel:${specialist.phoneNumber}`}
                        className="hover:underline"
                      >
                        {specialist.phoneNumber}
                      </Link>
                    ) : (
                      "Brak danych"
                    )}
                  </span>
                  <span className="tooltip" data-tip="Kopiuj">
                    <ButtonCopy textToCopy={specialist.phoneNumber} />
                  </span>
                </p>
                <p className="flex gap-2">
                  <span className="tooltip" data-tip="Adres email">
                    <EmailIcon />
                  </span>
                  <span className="hover:underline">
                    <a href={`mailto:${specialist.email}`}>
                      {specialist.email}
                    </a>
                  </span>
                  <span className="tooltip" data-tip="Kopiuj">
                    <ButtonCopy textToCopy={specialist.email} />
                  </span>
                </p>

                <div className="card-actions justify-center">
                  <LikeButton
                    initialLikes={specialist.votes}
                    specialistId={specialist.id}
                    hasJustLiked={specialist.hasVoted}
                  />

                  <ButtonAddToFavorite
                    specialistId={specialist.id}
                    userId={user?.id}
                  />

                  <ButtonSeeMore specialistId={specialist.id} />
                </div>
              </div>
            </div>
          ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </section>
  );
};
