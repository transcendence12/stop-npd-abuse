import { GithubIcon } from "@/assets/icons/GithubIcon";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer footer-center bg-neutral text-neutral-content p-4">
      <small className="flex gap-2">
        &copy; {new Date().getFullYear()} - All rights reserved. Pomysł i
        wykonanie:
        <span>Małgorzata Krawczuk</span>
        <span className="link link-hover tooltip tooltip-info" data-tip="Link do profilu na GitHub">
          <Link href="https://www.github.com/transcendence12">
            <GithubIcon />
          </Link>
        </span>
      </small>
    </footer>
  );
};
