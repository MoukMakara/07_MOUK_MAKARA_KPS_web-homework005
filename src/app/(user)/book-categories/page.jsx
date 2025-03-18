import React from "react";
import CardBookComponent from "@/components/CardBookComponent";
import { getAllBookCategories, getAllBooks } from "@/services/bookService";
import SearchComponent from "@/components/SearchComponent";
import NavbarFilterComponent from "@/components/NavbarFilterComponent";

const BookPage = async () => {
  // get all books from api
  const books = await getAllBooks();
  console.log("books: ", books);

  // Get all book categories
  const bookCategories = await getAllBookCategories();
  console.log("book categories: ", bookCategories);

  return (
    <div className="p-4 sm:ml-80">
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <div className="w-full">
          <SearchComponent />
        </div>

        <div className="relative mt-4 flex items-center justify-center h-screen mb-4 rounded-sm  dark:bg-gray-800">
          {/* content */}
          <NavbarFilterComponent />

          {/* hr */}
          <hr className="absolute w-full top-16  border-gray-200 dark:border-gray-700" />

          <div className="mt-28 ">
            <CardBookComponent bookItem={books} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
