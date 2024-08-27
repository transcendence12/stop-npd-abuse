"use client";
import { incrementOrDecrementLike } from "@/actions/incrementOrDecrementLike";
import { useUser } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";
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
  const { isSignedIn } = useUser();

  const handleLikes = async () => {
    if (!isSignedIn) {
      return <SignIn />;
    }
    try {
      const updatedLikes = await incrementOrDecrementLike(specialistId);
      setLikes(updatedLikes);
      setHasVoted(!hasVoted)
    } catch (error) {
      console.error("Błąd podczas aktualizacji polubień.", error);
    }
  };
  return (
    <div>
      <p>Suma polubień: {likes}</p>
      {/* {error && <p className="text-red-500">{error}</p>} */}
      <button onClick={handleLikes}>
        {hasVoted ? "Odlub 👎" : "Polub 👍"}
      </button>
    </div>
  );
};
