import { getSpecialistById } from "@/actions/getSpecialistById";
import Link from "next/link";
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
        <strong>Specjalizacje: </strong>
        {specialist.specialisation &&
          specialist.specialisation.join(", ").replace("_", " ").toLowerCase()}
      </p>
      <p>
        <strong>Miasto: </strong>
        {specialist.city}
      </p>
      <p>
        <strong>Email: </strong><a href={`mailto:${specialist.email}`}>{specialist.email}</a>
      </p>
      <p>
        <strong>Numer telefonu: </strong><a href={`tel:${specialist.phoneNumber}`}>{specialist.phoneNumber}</a>
        
      </p>
      {specialist.website && (
        <p>
          <strong>Strona internetowa: </strong>
          <Link href={specialist.website}>{specialist.website}</Link>
        </p>
      )}
      <p>
        <strong>WhatsApp: </strong>
        {specialist.isWhatsApp ? "Tak" : "Nie"}
      </p>
      <p>
        <strong>Online: </strong>
        {specialist.isOnline ? "Tak" : "Nie"}
      </p>
      <p>
        <strong>Na NFZ: </strong>
        {specialist.isAcceptedNfz ? "Tak" : "Nie"}
      </p>
      <p>
        <strong>Płatnie: </strong>
        {specialist.isPaid ? "Tak" : "Nie"}
      </p>
      <p>
        <strong>Nazwa firmy: </strong>
        {specialist.company || "Brak danych"}
      </p>
      <div>
        {specialist.socialMediaLinks && specialist.socialMediaLinks.length > 0 ? (
          <div>
          <strong>Media społecznościowe: </strong>
          {
            specialist.socialMediaLinks.map((link, index)=>(
              <span key={index}>
              <Link href={link.url}>{link.platform || link.url}</Link>
              {specialist.socialMediaLinks && index < specialist.socialMediaLinks.length - 1 ? ", " : "" }
              </span>
            ))
          }
        </div>
        ) : "Brak danych"}

      </div>
      <p>
        <strong>Książki: </strong>
        {specialist.books?.map((book) => book.title + ", ")}
      </p>
    </main>
  );
}

export default SpecialistItemPage;
