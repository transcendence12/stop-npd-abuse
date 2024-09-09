"use client";
import { incrementOrDecrementLike } from "@/actions/incrementOrDecrementLike";
import { HeartFilledIcon } from "@/assets/icons/HeartFilledIcon";
import { HeartNonFilledIcon } from "@/assets/icons/HeartNonFilledIcon";
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
          <span className="tooltip" data-tip="Wycofaj swoje polubienie">
            <HeartFilledIcon />
          </span>
        ) : (
          <span className="tooltip" data-tip="Polub">
            <HeartNonFilledIcon />
          </span>
        )}
      </button>
    </div>
  );
};
