import {
  getAllBookCategories,
  getAllCartoonsCategories,
} from "@/services/bookService";
import React from "react";
import SelectCategoriesCartoon from "./SelectCategoriesCartoon";

const NavbarFilterCartoonComponent = async () => {
  //   // Get all book categories
  //   const bookCategories = await getAllBookCategories();
  //   console.log("book categories: ", bookCategories);

  // Get all cartoon genres(categories)
  const cartoonsGenres = await getAllCartoonsCategories();
  console.log("cartoons genres: ", cartoonsGenres);
  return (
    <>
      <div>
        <button
          type="button"
          className="absolute left-3 top-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Old School Cartoons
        </button>
        <SelectCategoriesCartoon selectCategorieCartoon={cartoonsGenres} />
      </div>
    </>
  );
};

export default NavbarFilterCartoonComponent;
