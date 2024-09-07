import Link from "next/link";

export const Footer = () => {
  return (
    // mt-auto text-center text-zinc-400 py-5 px-7 border-t
    <footer className="footer footer-center bg-neutral text-neutral-content p-4">
      <small>
        &copy; {new Date().getFullYear()} - All rights reserved. Pomysł i
        wykonanie:{" "}
        <span className="link link-hover">
          <Link href="https://www.github.com/transcendence12">
            Małgorzata Krawczuk
          </Link>
        </span>
      </small>
    </footer>
  );
};
