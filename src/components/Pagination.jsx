import React from "react";

export default function Pagination({
  coinsPerPage,
  totalCoins,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = pageNumbers.length;
  const maxPageNumbersToShow = 10;
  const currentPageGroup = Math.ceil(currentPage / maxPageNumbersToShow);
  const firstPageInGroup = (currentPageGroup - 1) * maxPageNumbersToShow + 1;
  const lastPageInGroup = Math.min(
    currentPageGroup * maxPageNumbersToShow,
    totalPages
  );

  const prevPageGroup = () => paginate(firstPageInGroup - 1);
  const nextPageGroup = () => paginate(lastPageInGroup + 1);

  return (
    <nav className="mt-4 max-w-screen-md">
      <ul className="flex justify-center space-x-2">
        {firstPageInGroup > 1 && (
          <li className=" text-gray-700 cursor-pointer">
            <a
              onClick={prevPageGroup}
              className="px-4 py-2 border border-gray-300 rounded"
            >
              Prev
            </a>
          </li>
        )}
        {pageNumbers
          .slice(firstPageInGroup - 1, lastPageInGroup)
          .map((number) => (
            <li
              key={number}
              className={`${
                currentPage === number ? "text-blue-500" : "text-gray-700"
              } cursor-pointer`}
            >
              <a
                onClick={() => paginate(number)}
                className="px-4 py-2 border border-gray-300 rounded"
              >
                {number}
              </a>
            </li>
          ))}
        {lastPageInGroup < totalPages && (
          <li className="text-gray-700 cursor-pointer">
            <a
              onClick={nextPageGroup}
              className="px-4 py-2 border border-gray-300 rounded"
            >
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
