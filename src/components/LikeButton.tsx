"use client";
import { incrementOrDecrementLike } from "@/actions/incrementOrDecrementLike";
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LikeButton = ({
  initialLikes,
  specialistId,
  hasJustLiked,
}: {
  initialLikes: number;
  specialistId: string;
  hasJustLiked: boolean;
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [hasVoted, setHasVoted] = useState(hasJustLiked);
  const [error, setError] = useState<string | null>(null);
  const { isSignedIn } = useUser();

  const router = useRouter();
  const ariaLabel = hasVoted
  ? `Odlub specjalistę. Liczba polubień: ${likes}`
  : `Polub specjalistę. Liczba polubień: ${likes}`;

  const handleLikes = async () => {
    
    if (!isSignedIn) {
      router.push(
        `/sign-in?redirect_url=${encodeURIComponent("/specialists")}`
      );

      // console.log("useerrrr", isSignedIn)

      return;
    }
    try {

      const updatedLikes = await incrementOrDecrementLike(specialistId);
      setLikes(updatedLikes);
      setHasVoted(!hasVoted);
      setError(null);
    } catch (error) {
      console.error("Błąd podczas aktualizacji polubień.", error);
      setError("Wystąpił błąd podczas aktualizacji polubień");
    }
  };
  return (
    <div className="flex justify-center items-center gap-4">
      {/* <p>Suma polubień: {likes}</p> */}
      {error && <p className="text-red-500">{error}</p>}
      <button
        className="btn btn-secondary"
        onClick={handleLikes}
        aria-label={ariaLabel}
      >
        {likes}
        {/* {hasVoted ? "Odlub 👎" : "Polub 👍"} */}
        {hasVoted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="oklch(var(--sc))"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
