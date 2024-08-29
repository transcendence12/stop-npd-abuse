"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/specialists", label: "Specjaliści" },
  { href: "/favorites", label: "Moi ulubieni" },
];
export const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex justify-between items-center py-4 px-8 border-b">
      <Link href="/">
        <Image
          src="/logo-placeholder-mark-adriane-unsplash.jpg"
          alt="Photo by MARK ADRIANE on Unsplash"
          className="w-[45px] h-[45px] rounded-md"
          width="45"
          height="45"
        />
      </Link>
      <ul className="flex gap-x-5 text-[14px]">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className={`${
                pathname === link.href ? "text-zinc-900" : "text-zinc-400"
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton showName={true} />
        </SignedIn>
      </ul>
    </nav>
  );
};
