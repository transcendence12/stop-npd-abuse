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
    <nav className="flex justify-between items-center py-4 px-8 navbar bg-base-100">
      <Link href="/">
        <Image
          src="/stop-hand-2.png"
          alt="Open hand on purple background."
          className="w-[50px] h-[50px]"
          width="50"
          height="50"
        />
      </Link>
      <ul className="flex gap-x-5 text-[14px]">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className={`${
                pathname === link.href ? "text-primary" : "text-base-content"
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
