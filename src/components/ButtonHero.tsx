"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ErrorMessageDisplay } from "./ErrorMessageDisplay";

export const ButtonHero = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleRedirectToSpecialistList = () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      // Rzucenie błędu do testowania:
      // throw new Error("Testowy błąd przekierowania");
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

  const handleCloseErrorMessage = () => {
    setErrorMessage(null);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleRedirectToSpecialistList}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="loading loading-spinner loading-sm mr-2"></span>
            Ładowanie...
          </>
        ) : (
          'Wyświetl specjalistów'
        )}
      </button>
      {errorMessage && (
        <ErrorMessageDisplay
          errorMessage={errorMessage}
          onCloseErrorMessage={handleCloseErrorMessage}
        />
      )}
    </>
  );
};
