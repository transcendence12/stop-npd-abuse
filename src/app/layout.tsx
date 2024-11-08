import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stop narcystycznej przemocy",
  description:
    "Lista kontaktów do psychologów, psychoterapeutów, trenerów i prawników, którzy udzielają wsparcia i pracują z osobami dotkniętymi specyficznym rodzajem przemocy, tzw.przemocą narcystyczną. Znajdują się tutaj również linki do mediów społecznościowych poszczególnych specjalistów, ich strony internetowe, publikacje i bazy wiedzy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* bg-zinc-100 text-zinc-900 min-h-screen */}
        <body
          className={`${inter.className} antialiased bg-base-200 min-h-screen flex flex-col justify-between`}
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
