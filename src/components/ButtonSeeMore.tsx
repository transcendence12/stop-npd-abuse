"use client";

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
          <svg
            className="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};
