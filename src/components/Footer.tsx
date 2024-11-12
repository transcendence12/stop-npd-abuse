import { GithubIcon } from "@/assets/icons/GithubIcon";
import Link from "next/link";
import { ButtonBuyMeCoffe } from "./ButtonBuyMeCoffee";

export const Footer = () => {
  return (
    <footer className="footer items-center bg-neutral text-neutral-content p-4 md:px-10">
      <aside className="grid-flow-col items-center">
        <small className="flex gap-2">
          &copy; {new Date().getFullYear()} - All rights reserved. Pomysł i
          wykonanie:
          <span>Małgorzata Krawczuk</span>
          <span
            className="link link-hover tooltip tooltip-info"
            data-tip="Link do profilu na GitHub"
          >
            <Link href="https://www.github.com/transcendence12">
              <GithubIcon />
            </Link>
          </span>
        </small>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div className="flex items-center gap-4">Moja praca wnosi wartość? <ButtonBuyMeCoffe /></div>
      </nav>
    </footer>
  );
};
