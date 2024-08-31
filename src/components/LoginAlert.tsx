
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";

export const LoginAlert = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Wymagane logowanie</AlertTitle>
      <AlertDescription>
        Aby dodać specjalistę do ulubionych musisz być zalogowany.
      </AlertDescription>
      <Button
        variant="ghost" // Lub inny styl przycisku, zależnie od preferencji
        onClick={() => setVisible(false)} // Zamknij alert po kliknięciu
        className="ml-auto"
      >
        Zamknij
      </Button>
    </Alert>
  );
};
