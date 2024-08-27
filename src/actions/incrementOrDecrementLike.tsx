"use server";
import prisma from "@/lib/prismaClient";
import { checkUser } from "@/lib/checkUser";



export const incrementOrDecrementLike = async (
  specialistId: string,
):Promise<number> => {
  // sprawdzam usera za pomocą checkUser()
  // czekam na zakonczenie funkcji checkUser()
  const user = await checkUser(); 

  if(!user){
    throw new Error("Musisz być zalogowany żeby polubić specjalistę.")
  }
  // uzyskuje dostep do właściwości user po "odpakowaniu" Promise
  const userId = user.clerkUserId;
  //   sprawdzenie czy user już polubił specjalistę:
  const existingVote = await prisma.vote.findFirst({
    where: {
      specialistId,
      userId,
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
        }
    })
  }
//   zwróć zaktualizowaną liczbe polubień:
  const totalLikes = await prisma.vote.count({
    where: {specialistId}
  })
  return totalLikes;
};
