"use server";
import prisma from "@/lib/prismaClient";
// aby uzyskać adres IP:
import { headers } from "next/headers";
import { getAnonymousId } from "@/lib/getAnonymousId";

export const incrementOrDecrementLike = async (
  specialistId: string,
  userId?: string
) => {
  const anonymousId = !userId ? getAnonymousId() : undefined;

  //   pobranie IP:
  const ipAddress = headers().get("x-forwarded-for") || "UNKNOWN_IP";

  //   sprawdzenie czy user już polubił specjalistę:
  const existingVote = await prisma.vote.findFirst({
    where: {
      specialistId,
      OR: [{ userId }, { anonymousId }, { ipAddress }],
    },
  });

  if(existingVote){
    await prisma.vote.delete({
        where: {
            id: existingVote.id
        }
    })
  } else {
    await prisma.vote.create({
        data: {
            specialistId,
            userId,
            anonymousId: anonymousId || "",
            ipAddress,
        }
    })
  }
//   zwróć zaktualizowaną liczbe polubień:
  const totalLikes = await prisma.vote.count({
    where: {specialistId}
  })
  return totalLikes;
};
