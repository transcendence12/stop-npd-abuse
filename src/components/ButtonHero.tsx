"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ButtonHero = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const handleRedirectToSpecialistList = () => {
    setLoading(true);
    setErrorMessage(null)
    try {
      router.push("/specialists");
    } catch(error) {
      console.error("Błąd podczas przechodzenia do strony specjalistów", error);
      setErrorMessage("Wystąpił problem podczas przekierowywania. Spróbuj ponownie.")
    } finally {
      setLoading(false);
    }
  };
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
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </>
  );
};
