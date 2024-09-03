import { FavoriteSpecialistsList } from "@/components/FavoriteSpecialistsList";

function MyFavoriteSpecialistListPage() {
  return (
    <main className="mt-10 text-center min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        Lista Twoich ulubionych specialistów
      </h1>
      <p className="p-5">Widzisz ją bo jesteś zarejestrowanym użytkownikiem aplikacji 🎉</p>
      <FavoriteSpecialistsList />
    </main>
  );
}

export default MyFavoriteSpecialistListPage;
