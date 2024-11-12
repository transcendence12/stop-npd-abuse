"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState } from "react";
const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/specialists", label: "Specjaliści" },
  { href: "/favorites", label: "Twoi ulubieni" },
];
export const Nav = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const onSignInClick = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };
  return (
    <nav className="flex justify-between items-center py-4 px-10 navbar bg-base-100">
      <Link href="/">
        <Image
          src="/stop-hand-2.png"
          alt="Open hand on purple background."
          className="w-[50px] h-[50px]"
          width="50"
          height="50"
        />
      </Link>
      {/* Menu for desktop */}
      <ul className="hidden md:flex gap-x-5 text-[14px]">
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
          <SignInButton>
            <button className="btn btn-ghost">Zaloguj się</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton showName={true} />
        </SignedIn>
      </ul>
      {/* Hamburger menu icon for mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="btn btn-ghost flex items-center justify-center"
          aria-label="Toggle Mobile Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-lg flex justify-between px-6 md:hidden z-50">
          <ul className="flex flex-col items-start gap-4 p-4">
            {navLinks.map((link) => (
              <li key={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                <Link
                  className={`${
                    pathname === link.href
                      ? "text-primary"
                      : "text-base-content"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <SignedOut>
            <SignInButton>
              <button onClick={onSignInClick} className="btn btn-ghost">Zaloguj się</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton showName={true} />
          </SignedIn>
        </div>
      )}
    </nav>
  );
};
