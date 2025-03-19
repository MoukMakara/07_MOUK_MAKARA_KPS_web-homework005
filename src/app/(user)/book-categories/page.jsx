import React from "react";
import CardBookComponent from "@/components/CardBookComponent";
import { getAllBookCategories, getAllBooks } from "@/services/bookService";
import SearchComponent from "@/components/SearchComponent";
import NavbarFilterBookComponent from "@/components/FilterBookComponent";

const BookPage = async ({ searchParams }) => {
  // get all books from api
  const books = await getAllBooks();
  console.log("books: ", books);

  // search books by title
  const searchQuery = searchParams.search || "";

  // search
  let bookSearchs;
  if (searchQuery) {
    bookSearchs = books.filter((book) =>
      book.book_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("search results: ", bookSearchs);
  } else {
    bookSearchs = books;
  }

  return (
    <div className="p-4 sm:ml-80">
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <div className="w-full">
          <SearchComponent />
        </div>

        <div className="relative mt-4 flex items-center justify-center h-screen mb-4 rounded-sm  dark:bg-gray-800">
          {/* content */}
          <NavbarFilterBookComponent />

          {/* hr */}
          <hr className="absolute w-full top-16  border-gray-200 dark:border-gray-700" />

          <div className="mt-28 ">
            <CardBookComponent books={bookSearchs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
