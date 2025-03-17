import React from "react";
import Image from "next/image";
import book_categories from "../../public/book-categories.png";
import tag from "../../public/tag-2.svg";
import Link from "next/link";

const BookCategoriesComponent = () => {
  return (
    <div>
      {/* card 1 */}
      <Link href="/book-categories">
        <div className="relative w-72 h-96 bg-white rounded-4xl p-6 flex flex-col justify-center items-center shadow-lg transition-transform duration-300 group">
          <div className="absolute inset-0 bg-opacity-60 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          <Image
            src={book_categories}
            alt="book_categories"
            className="absolute inset-0 w-full h-full object-cover rounded-4xl"
          />
          <div className="absolute flex gap-2 top-3 left-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
            <Image src={tag} alt="tag" />
            Book
          </div>
          <div className="relative z-10 text-white text-center opacity-0 transform translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <h1 className="text-xl w-[90px] font-bold">
              View All Available Books
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCategoriesComponent;
