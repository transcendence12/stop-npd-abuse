export const Hero: React.FC = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Znajdź wsparcie w stawieniu czoła narcystycznej przemocy
          </h1>
          <p className="py-6">
            Skorzystaj z listy kontaktów do psychologów, psychoterapeutów, trenerów i
            prawników, którzy udzielają wsparcia i pracują z osobami dotkniętymi
            specyficznym rodzajem przemocy, tzw.przemocą narcystyczną.
          </p>
          <button className="btn btn-primary">Wyświetl specjalistów</button>
        </div>
      </div>
    </div>
  );
};
