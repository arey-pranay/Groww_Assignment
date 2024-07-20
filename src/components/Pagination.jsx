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
  const maxPageNumbersToShow = 5;
  const currentPageGroup = Math.ceil(currentPage / maxPageNumbersToShow);
  const firstPageInGroup = (currentPageGroup - 1) * maxPageNumbersToShow + 1;
  const lastPageInGroup = Math.min(
    currentPageGroup * maxPageNumbersToShow,
    totalPages
  );

  const prevPageGroup = () => paginate(firstPageInGroup - 1);
  const nextPageGroup = () => paginate(lastPageInGroup + 1);

  return (
    <nav className="mt-8 w-full ">
      <ul className="flex justify-between w-full sm:gap-12">
        {firstPageInGroup > 1 && (
          <li className=" text-white cursor-pointer ">
            <a
              onClick={prevPageGroup}
              className="bg-primary-dark hover:bg-primary-light  px-4 py-2 border border-gray-300 rounded"
            >
              {"<-"}Prev
            </a>
          </li>
        )}
        {pageNumbers
          .slice(firstPageInGroup - 1, lastPageInGroup)
          .map((number) => (
            <li
              key={number}
              className={`${
                currentPage === number ? "font-bold " : "dark:text-gray-100"
              } cursor-pointer `}
            >
              <a
                onClick={() => paginate(number)}
                className={` px-4 py-2 border border-gray-300 rounded ${
                  currentPage === number
                    ? "font-bold text-white bg-primary-dark border-4"
                    : "hover:bg-primary-light"
                }  `}
              >
                {number}
              </a>
            </li>
          ))}
        {lastPageInGroup < totalPages && (
          <li className=" text-white cursor-pointer">
            <a
              onClick={nextPageGroup}
              className=" bg-primary-dark hover:bg-primary-light px-4 py-2 border border-gray-300 rounded"
            >
              Next {"->"}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
