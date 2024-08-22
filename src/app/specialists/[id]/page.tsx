import { getSpecialistById } from "@/actions/getSpecialistById";
import { notFound } from "next/navigation";

interface SpecialistByIdProps {
  params: { id: string };
}
async function SpecialistItemPage({ params }: SpecialistByIdProps) {
  const specialist = await getSpecialistById(params.id);
  if (!specialist) {
    return notFound();
  }
  return (
    <main className="mb-5">
      <h1 className="text-4xl font-bold mb-4">
        {specialist.firstName} {specialist.lastName}
      </h1>
      <p>
        <strong>Specjalizacje:</strong>
        {specialist.specialisation &&
          specialist.specialisation.join(", ").replace("_", " ").toLowerCase()}
      </p>
      <p>
        <strong>Miasto:</strong>{specialist.city}
      </p>
      <p>
        <strong>Email:</strong>{specialist.email}
      </p>
      <p>
        <strong>Numer telefonu:</strong>{specialist.phoneNumber}
      </p>
      <p>
        <strong>Strona internetowa:</strong>{specialist.website}
      </p>
      <p>
        <strong>WhatsApp:</strong>{specialist.isWhatsApp ? "Tak" : "Nie"}
      </p>
      <p>
        <strong>Online:</strong>{specialist.isOnline ? "Tak" : "Nie"}
      </p>
      <p>
        <strong>Na NFZ:</strong>{specialist.isAcceptedNfz ? "Tak" : "Nie"}
      </p>
      <p>
        <strong>Płatnie:</strong>{specialist.isPaid ? "Tak" : "Nie"}
      </p>
      <p>
        <strong>Nazwa firmy:</strong>{specialist.company || "N/A" }
      </p>
      <p>
        <strong>Media społecznościowe:</strong>{specialist.socialMediaLinks?.map(link=> link.url)}
      </p>
      <p>
        <strong>Książki:</strong>{specialist.books?.map(book => book.title)}
      </p>
    </main>
  );
}

export default SpecialistItemPage;
