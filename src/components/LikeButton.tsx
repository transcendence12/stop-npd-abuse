"use client";
import { incrementOrDecrementLike } from "@/actions/incrementOrDecrementLike";
import { useState } from "react";

export const LikeButton = ({
  initialLikes,
  specialistId,
  userId,
}: {
  initialLikes: number;
  specialistId: string;
  userId?: string;
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [error, setError] = useState<string | null>(null)

  const handleLikes = async () => {
    try {
        const updatedLikes = await incrementOrDecrementLike(specialistId, userId);
    setLikes(updatedLikes);
    setError(null)
    } catch(error){
        if(error instanceof Error){
            setError(error.message)
        } else {
            setError("An unexpected error occured!")
        }
        
    }
  };
  return (
    <div>
      <p>Suma polubień: {likes} 👍</p>
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleLikes}>{likes > initialLikes ? "Odlub 👎" : "Polub 👍"}</button>
    </div>
  );
};
