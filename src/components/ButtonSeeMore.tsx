"use client"

import { Specialist } from "@/types/Specialist";
import Link from "next/link"

interface ButtonSeeMoreProps {
    specialistId: string;
  }

export const ButtonSeeMore:React.FC<ButtonSeeMoreProps> =({specialistId,}) => {
  return (
    <Link href={`specialists/${specialistId}`}>
      <button type="button" className="btn mt-2 text-blue-600">
        Zobacz więcej
      </button>
    </Link>
  )
}
