import { Specialist } from "@/types/Specialist";
import Link from "next/link";
import { ButtonSeeMore } from "./ButtonSeeMore";
import { ButtonAddToFavorite } from "./ButtonAddToFavorite";
import { checkUser } from "@/lib/checkUser";
import { auth } from "@clerk/nextjs/server";
import { LikeButton } from "./LikeButton";
import { Pagination } from "./Pagination";
import { SearchSpecialist } from "./SearchSpecialist";

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
                  {" "}
                  {specialist.specialisation[0].replace("_", " ").toLowerCase()}
                </div>
                <p className="flex gap-2">
                  <span>
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
                </p>
                <p className="flex gap-2">
                  <span>
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="hover:underline">
                    <a href={`mailto:${specialist.email}`}>
                      {specialist.email}
                    </a>
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
