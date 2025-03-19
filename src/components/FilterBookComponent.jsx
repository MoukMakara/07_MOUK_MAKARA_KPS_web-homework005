import { getAllBookCategories } from "@/services/bookService";
import React from "react";

const FilterBookComponent = async () => {
  // Get all book categories
  const bookCategories = await getAllBookCategories();
  console.log("book categories: ", bookCategories);

  return (
    <>
      <div>
        <button
          type="button"
          className="absolute left-3 top-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          All Books
        </button>
        {/* Button for filtering by category */}
        <select className="absolute right-3 top-3 py-2 px-4 rounded-md border border-gray-300 focus:ring-2  text-gray-900">
          <option value="" className="text-gray-700">
            Filter by category
          </option>
          {bookCategories.map((category, index) => {
            return (
              <option key={index} value={category.id} className="text-gray-700">
                {category.book_cate_name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default FilterBookComponent;
