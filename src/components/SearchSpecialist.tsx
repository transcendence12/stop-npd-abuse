"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";

interface SearchSpecialistProps {
  specialisationTypes: string[];
}

export const SearchSpecialist: React.FC<SearchSpecialistProps> = ({
  specialisationTypes,
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isSearching, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);
  const q = searchParams.get("query")?.toString();
  const category = searchParams.get("category") || "";

  // Debugging: Check if specialisationTypes is correctly passed
  specialisationTypes = specialisationTypes || [];

  useEffect(() => {
    console.log("specialisationTypes:", specialisationTypes);
  }, [specialisationTypes]);

  const handleSearch = useDebouncedCallback((query: string) => {
    startTransition(() => {
      //   console.log("Searching...", query);
      const params = new URLSearchParams(searchParams);
      if (query) {
        params.set("query", query);
        // params.set("page", "1");
      } else {
        params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
    });
  }, 300);

  const handleClearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      handleSearch("");
    }
  };

  const handleCategoryChange = (selectedCategory: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (selectedCategory) {
        params.set("category", selectedCategory);
      } else {
        params.delete("category");
      }
      console.log("Updated URL params:", params.toString());
      replace(`${pathname}?${params.toString()}`);
    });
  };
  //   useEffect(() => {
  //     if (inputRef.current) {
  //         inputRef.current.value = q || "";
  //     }
  // }, [q]);

  return (
    <section className="flex justify-center items-center px-4 md:px-0 join join-vertical md:join-horizontal lg:join-horizontal w-full">
      <div className="join mb-8 w-full flex justify-center join-vertical space-y-4 md:space-y-0 md:join-horizontal lg:join-horizontal">
        <label className="input input-bordered join join-item relative flex items-center gap-2 pr-10 w-full max-w-xs">
          <input
            className="join-item grow"
            placeholder="Szukaj specjalisty"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            defaultValue={q}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                inputRef.current?.blur();
              }
            }}
            ref={inputRef}
          />
          {q && (
            <button
              // className="btn btn-ghost btn-circle btn-xs"
              className={`absolute right-2 text-gray-500 ${
                q ? "visible" : "invisible"
              }`}
              onClick={handleClearInput}
            >
              &#10005;
            </button>
          )}
        </label>

        <select
          className="select select-bordered join-item w-full max-w-xs"
          onChange={(e) => handleCategoryChange(e.target.value)}
          value={category}
          aria-label="Filter by specialisation"
        >
          <option value="" selected>
            Kategoria
          </option>
          {/* Check if specialisationTypes is not empty before rendering */}
          {specialisationTypes && specialisationTypes.length > 0 ? (
            specialisationTypes.map((type) => (
              <option key={type} value={type} className="w-full max-w-xs">
                {type.replace(/_/g, " ").toLowerCase()}
              </option>
            ))
          ) : (
            <option disabled>Brak dostępnych kategorii.</option>
          )}
        </select>
        <div className="indicator">
          <button className="btn btn-accent join-item w-full md:w-auto">
            {isSearching ? <span>Szukanie...</span> : <span>Szukaj</span>}
          </button>
        </div>
      </div>
    </section>
  );
};
