"use client";

import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { Specialist } from "@/types/Specialist";
import Link from "next/link";

interface ButtonSeeMoreProps {
  specialistId: string;
}

export const ButtonSeeMore: React.FC<ButtonSeeMoreProps> = ({
  specialistId,
}) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link href={`specialists/${specialistId}`}>
        <button type="button" className="btn btn-primary">
          Zobacz więcej
          <ArrowRightIcon />
        </button>
      </Link>
    </div>
  );
};
