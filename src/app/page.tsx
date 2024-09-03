import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    // className="text-center pt-32 px-5"
    <main>
      {/* <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-10">
        Witaj i znajdź wsparcie w stawieniu czoła narcystycznej przemocy
      </h1>
      <p className="max-w-[750px] mx-auto leading-8">
        Lista kontaktów do psychologów, psychoterapeutów, trenerów i prawników,
        którzy udzielają wsparcia i pracują z osobami dotkniętymi specyficznym
        rodzajem przemocy, tzw.przemocą narcystyczną. Znajdują się tutaj również
        linki do mediów społecznościowych poszczególnych specjalistów, ich
        strony internetowe, publikacje, a w miarę rozwoju aplikacji dołączę bazę wiedzy.
      </p> */}
      <Hero />
    </main>
  );
}
