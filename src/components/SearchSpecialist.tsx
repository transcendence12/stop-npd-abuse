"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";

export const SearchSpecialist = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isSearching, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);
  const q = searchParams.get("query")?.toString();

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
//   useEffect(() => {
//     if (inputRef.current) {
//         inputRef.current.value = q || "";
//     }
// }, [q]);

  return (
    <section className="flex justify-center items-center">
        <div className="join mb-8">
      <div>
        <div>
          <input
            className="input input-bordered join-item"
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
              className="btn btn-ghost btn-circle btn-xs"
              onClick={handleClearInput}
            >
              &#10005;
            </button>
          )}
        </div>
      </div>
      {/* <select className="select select-bordered join-item">
        <option disabled selected>
          Kategoria
        </option>
        <option>Psychologia</option>
        <option>Prawo</option>
        <option>Inne</option>
      </select> */}
      <div className="indicator">
        <button className="btn btn-accent join-item">
          {isSearching ? <span>Szukanie...</span> : <span>Szukaj</span>}
        </button>
      </div>
    </div>
    </section>
    
  );
};
