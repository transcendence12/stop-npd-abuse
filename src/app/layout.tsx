import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { ClerkProvider } from "@clerk/nextjs";
import GoogleAnalytics from "@/components/CookiesBanner/GoogleAnalytics";
import { Suspense } from "react";
import CookiesBannerWrapper from "@/components/CookiesBanner/CookiesBannerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stop narcystycznej przemocy",
  description: "Lista kontaktów do psychologów, psychoterapeutów, trenerów i prawników, którzy udzielają wsparcia i pracują z osobami dotkniętymi specyficznym rodzajem przemocy, tzw.przemocą narcystyczną. Znajdują się tutaj również linki do mediów społecznościowych poszczególnych specjalistów, ich strony internetowe, publikacje i bazy wiedzy",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="pl">
        <GoogleAnalytics
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""}
        />
        <body
          className={`${inter.className} antialiased bg-base-200 min-h-screen flex flex-col justify-between`}
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />

          <CookiesBannerWrapper />
        </body>
      </html>
    </ClerkProvider>
  );
}
