import { getSpecialistById } from "@/actions/getSpecialistById";
import { ButtonAddToFavorite } from "@/components/ButtonAddToFavorite";
import { checkUser } from "@/lib/checkUser";
import prisma from "@/lib/prismaClient";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SpecialistByIdProps {
  params: { id: string };
}
async function SpecialistItemPage({ params }: SpecialistByIdProps) {
  const specialist = await getSpecialistById(params.id);

  const user = await checkUser();
  if (!specialist) {
    return notFound();
  }
  return (
    <main className="flex flex-col items-center justify-center mt-8 min-h-screen">
      {/* text-4xl font-bold mb-4 flex items-center justify-center */}
      <h1 className="card-title text-3xl">
        <span>
          {specialist.firstName} {specialist.lastName}
        </span>
        <span className="text-red-800 font-normal text-m ml-7">
          <ButtonAddToFavorite specialistId={specialist.id} userId={user?.id} />
        </span>
      </h1>
      {/* px-12 py-6 flex flex-col justify-center items-start gap-3  */}
      <section className="card-body">
        <p>
          <strong>Specjalizacje: </strong>
          {specialist.specialisation &&
            specialist.specialisation
              .join(", ")
              .replace("_", " ")
              .toLowerCase()}
        </p>
        <p>
          <strong>Miasto: </strong>
          {specialist.city}
        </p>
        <p>
          <strong>Email: </strong>
          <a href={`mailto:${specialist.email}`}>{specialist.email}</a>
        </p>
        <p>
          <strong>Numer telefonu: </strong>
          <a href={`tel:${specialist.phoneNumber}`}>{specialist.phoneNumber}</a>
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
          {specialist.socialMediaLinks &&
          specialist.socialMediaLinks.length > 0 ? (
            <div>
              <strong>Media społecznościowe: </strong>
              {specialist.socialMediaLinks.map((link, index) => (
                <span key={index}>
                  <Link href={link.url}>{link.platform || link.url}</Link>
                  {specialist.socialMediaLinks &&
                  index < specialist.socialMediaLinks.length - 1
                    ? ", "
                    : ""}
                </span>
              ))}
            </div>
          ) : (
            "Brak danych"
          )}
        </div>
        <p>
          <strong>Książki: </strong>
          {specialist.books?.map((book) => book.title + ", ")}
        </p>
        <p>
          <strong>Polubienia: </strong>
          {specialist.votesCount}
        </p>
      </section>
    </main>
  );
}

export default SpecialistItemPage;
