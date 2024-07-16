import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/src/components/global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stop narcystycznej przemocy",
  description: "Lista kontaktów do psychologów, psychoterapeutów, trenerów i prawników, którzy udzielają wsparcia i pracują z osobami dotkniętymi specyficznym rodzajem przemocy, tzw.przemocą narcystyczną. Znajdują się tutaj również linki do mediów społecznościowych poszczególnych specjalistów, ich strony internetowe, publikacje i bazy wiedzy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
