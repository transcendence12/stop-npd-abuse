"use client";
import { getCookie, setCookie } from "@/lib/cookiesHelper";

import Link from "next/link";
import { useEffect, useState } from "react";

export const CookiesBannerClient: React.FC = () => {
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedConsent = getCookie("cookie_consent");
    setCookieConsent(storedConsent);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (cookieConsent !== null) {
      setCookie("cookie_consent", cookieConsent, 365);

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: cookieConsent === "granted" ? "granted" : "denied",
        });
      }
    }
  }, [cookieConsent]);

  // Do not render the banner if loading or consent is already given
  if (isLoading || cookieConsent !== null) {
    return null;
  }

  const handleAcceptCookies = () => setCookieConsent("granted");
  const handleDeclineCookies = () => setCookieConsent("denied");

  //   const bannerClass = classNames(styles.bannerWrapper, {
  //     [styles.visible]: cookieConsent === null,
  //     [styles.hidden]: cookieConsent !== null,
  //   })

  return (
    <div
      className={`bg-base-300 fixed bottom-10 right-9 z-50 flex w-[500px] flex-col items-start gap-6 rounded-lg border border-gray-300 p-14 shadow-md transition-all ${
        cookieConsent === null ? "visible" : "invisible"
      } md:bottom-4 md:left-1/2 md:w-[343px] md:translate-x-[-50%] md:items-center md:p-9 md:gap-6`}
    >
      <div className="text-[27px] font-medium leading-[28px]">
        🍪 Our website uses cookies
      </div>
      <div className="text-lg font-normal leading-[30px]">
        Our website use cookies. By continuing, we assume your permission to
        deploy cookies as detailed in our{" "}
        <span className="text-accent">
          <Link target="_blank" href="" className="hover:underline">
            Privacy Policy
          </Link>
        </span>
        .
      </div>
      <div className="flex w-full items-center gap-4 md:flex-col md:justify-center md:items-stretch md:gap-2">
        <button className="btn btn-primary" onClick={handleAcceptCookies}>
          Accept all
        </button>
        <button className="btn btn-neutral" onClick={handleDeclineCookies}>
          Decline
        </button>
      </div>
    </div>
  );
};
