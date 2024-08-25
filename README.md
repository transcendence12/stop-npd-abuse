## About this app

Application with profiles of professionals providing support to, among others, people affected by a specific type of violence, so-called narcissistic violence. Demo: https://stop-npd-abuse.vercel.app/

###
Features:
- Displaying list of specialists;
- Displaying specialist's details ui;
- Auth with Clerk Provider;
- Saving data in Neon database with Prisma ORM;
- Adding to Favourites:
Purpose: A registered user adds a specialist to his/her favourites list in order to easily find him/her in the future.
Relationship: This is a many-to-many relationship between users and specialists, as multiple users can add the same specialist to their favourites.
Usage: Favourites is a more private feature that allows users to keep track of their preferred specialists.
- Voting:
Purpose: A registered user can vote for a specialist which represents a form of public evaluation of the specialist.
Relationship: As with favourites, it is a many-to-many relationship, but the meaning is different.
Use: Voting can be used for rankings or evaluations of specialists, where the results can be visible to all users.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Database

