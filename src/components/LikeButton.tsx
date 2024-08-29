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
    <div>
      <p>Suma polubień: {likes}</p>
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleLikes}>
        {hasVoted ? "Odlub 👎" : "Polub 👍"}
      </button>
    </div>
  );
};
