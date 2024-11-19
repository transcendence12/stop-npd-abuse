"use client";

import { useState, useEffect } from "react";
import { setCookieConsent } from "@/actions/cookiesActions";
import Link from "next/link";

export const CookiesBannerClient: React.FC = () => {
  const [cookieConsentState, setCookieConsentState] = useState<string | null>(null);

  useEffect(() => {
    const storedConsent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookie_consent="))
      ?.split("=")[1];
    setCookieConsentState(storedConsent || null);
  }, []);

  const handleAcceptCookies = async () => {
    await setCookieConsent("granted"); // Ustawia ciasteczko na serwerze
    setCookieConsentState("granted");
  };

  const handleDeclineCookies = async () => {
    await setCookieConsent("denied"); // Ustawia ciasteczko na serwerze
    setCookieConsentState("denied");
  };

  if (cookieConsentState !== null) {
    return null; // Banner nie powinien być widoczny, jeśli zgoda została już ustawiona
  }

  return (
    <div className="fixed bottom-10 right-9 z-50 flex w-[500px] flex-col items-start gap-6 rounded-lg border border-gray-300 p-14 shadow-md bg-base-300">
      <div className="text-[27px] font-medium leading-[28px]">
        🍪 Wykorzystujemy ciasteczka
      </div>
      <div className="text-lg font-normal leading-[30px]">
        Korzystając z naszej strony, zgadzasz się na używanie plików cookie
        zgodnie z naszą{" "}
        <span>
          <Link href="/privacy-policy" className="text-accent hover:underline">
            Polityką Prywatności
          </Link>
        </span>
        .
      </div>
      <div className="flex w-full items-center gap-4">
        <button className="btn btn-primary" onClick={handleAcceptCookies}>
          Akceptuj wszystkie
        </button>
        <button className="btn btn-neutral" onClick={handleDeclineCookies}>
          Odrzuć
        </button>
      </div>
    </div>
  );
};
