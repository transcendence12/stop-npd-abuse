import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prismaClient";

export const checkUser= async() => {
  const user = await currentUser();
  console.log(user)
  // check for current logged in clerk user
  if (!user) return null;

  // check if user is already in the database
  const loggedInUser = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // if user is in the database, return user
  if (loggedInUser) {
    return loggedInUser;
  }

  // if not in database, create new user
  const newUser = await prisma.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
}
