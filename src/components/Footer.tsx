import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-auto text-center text-zinc-400 py-5 px-7 border-t">
      <small>
        &copy; {new Date().getFullYear()} All rights reserved. Pomysł i
        wykonanie:{" "}
        <span className="hover:underline">
          {" "}
          <Link href="https://www.github.com/transcendence12">
            Małgorzata Krawczuk
          </Link>
        </span>
      </small>
    </footer>
  );
};
