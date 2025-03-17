import Link from "next/link";
import React from "react";
const CardBookComponent = ({ bookItem }) => {
  return (
    <div className="flex flex-wrap justify-around h-screen mt-28 gap-10">
      {bookItem.map((books, index) => {
        return (
          <div
            key={index}
            className="relative w-[527px] h-[210px] bg-white mt-20 rounded-xl shadow-md py-4 px-8 flex space-x-6"
          >
            <div className="flex flex-col justify-between">
              <img
                src={books.image}
                alt="Book Cover"
                className="absolute object-cover -top-20 w-[176px] h-[221px] shadow-md rounded-lg"
              />
              <Link href={`/book-categories/${books.id}`}>
                <button className="mt-36 w-[176px] py-2 bg-blue-100 text-blue-600 text-[14px] font-semibold rounded-3xl">
                  READ FULL ARTICLE
                </button>
              </Link>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-[24px] line-clamp-1 font-semibold text-gray-900">
                  {books.book_title}
                </h2>
                <p className="text-[18px] line-clamp-5 text-gray-600 leading-[28px]">
                  {books.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardBookComponent;
