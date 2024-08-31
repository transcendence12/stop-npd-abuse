"use client";
import { incrementOrDecrementLike } from "@/actions/incrementOrDecrementLike";
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "./../hooks/use-toast";

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
  const { toast } = useToast();

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
      const errorMessage = "Wystąpił błąd podczas aktualizacji polubień";
      setError(errorMessage);
      toast({
        title: "Uh oh! Coś poszło nie tak.",
        description: errorMessage,
      });
    }
  };
  return (
    <div>
      <p>Suma polubień: {likes}</p>
      <Button onClick={handleLikes}>
        {hasVoted ? "Odlub 👎" : "Polub 👍"}
      </Button>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};
