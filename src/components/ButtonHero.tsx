"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const ButtonHero = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleRedirectToSpecialistList = () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      router.push("/specialists");
    } catch (error) {
      console.error("Błąd podczas przechodzenia do strony specjalistów", error);
      setErrorMessage(
        "Wystąpił problem podczas przekierowywania. Spróbuj ponownie."
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  return (
    <>
      {loading ? (
        <p>Ładowanie....</p>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleRedirectToSpecialistList}
        >
          Wyświetl specjalistów
        </button>
      )}
      {errorMessage && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{errorMessage}.</span>
        </div>
      )}
    </>
  );
};
