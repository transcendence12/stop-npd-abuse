"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  //   const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="join flex items-center justify-center mt-8 space-x-2">
      {currentPage > 1 ? (
        <Link href={createPageURL(currentPage - 1)}>
          <button className="join-item btn">«</button>
        </Link>
      ) : (
        <button className="join-item btn btn-disabled">«</button>
      )}

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return pageNumber === currentPage ? (
          <button key={pageNumber} className="join-item btn btn-active">
            {pageNumber}
          </button>
        ) : (
          <Link key={pageNumber} href={createPageURL(pageNumber)}>
            <button className="join-item btn">{pageNumber}</button>
          </Link>
        );
      })}

      {currentPage < totalPages ? (
        <Link href={createPageURL(currentPage + 1)}>
          <button className="join-item btn">»</button>
        </Link>
      ) : (
        <button className="join-item btn btn-disabled">»</button>
      )}
    </div>
  );
};
