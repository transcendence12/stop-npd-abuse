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
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="card bg-base-100 md:w-2/5 shadow-xl">
        <h1 className="card-title text-3xl mt-8 ml-8 mr-8 flex justify-between">
          <span>
            {specialist.firstName} {specialist.lastName}
          </span>
          <span className="">
            <ButtonAddToFavorite
              specialistId={specialist.id}
              userId={user?.id}
            />
          </span>
        </h1>
        <p className="badge badge-accent ml-8">
          {specialist.specialisation &&
            specialist.specialisation
              .join(", ")
              .replace("_", " ")
              .toLowerCase()}
        </p>
        <section className="card-body">
          <p>
            <strong>Nazwa firmy: </strong>
            {specialist.company || "Brak danych"}
          </p>
          <p>
            <strong>Miasto: </strong>
            {specialist.city}
          </p>
          <p>
            <strong>Email: </strong>
            <a
              className="link link-hover link-primary"
              href={`mailto:${specialist.email}`}
            >
              {specialist.email}
            </a>
          </p>
          <p>
            <strong>Numer telefonu: </strong>
            <a
              className="link link-hover link-primary"
              href={`tel:${specialist.phoneNumber}`}
            >
              {specialist.phoneNumber}
            </a>
          </p>
          {specialist.website && (
            <p>
              <strong>Strona internetowa: </strong>
              <a
                href={specialist.website}
                className="link link-hover link-primary"
              >
                {specialist.website}
              </a>
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
          <div>
            {specialist.socialMediaLinks &&
            specialist.socialMediaLinks.length > 0 ? (
              <div>
                <strong>Media społecznościowe: </strong>
                {specialist.socialMediaLinks.map((link, index) => (
                  <span key={index} className="link link-hover link-primary">
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
          <div className="flex justify-between">
            <p>
              <strong>Polubienia: </strong>
              <span className="badge badge-accent">
                {specialist.votesCount}
              </span>
            </p>
            <Link
              href="/specialists"
              className="btn btn-outline btn-neutral mb-4 align-left"
            >
              Wróć do listy specjalistów
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SpecialistItemPage;
