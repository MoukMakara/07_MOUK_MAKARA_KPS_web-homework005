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
        <SelectCategoriesCartoon selectCategorieCartoon={cartoonsGenres} />
      </div>
    </>
  );
};

export default NavbarFilterCartoonComponent;
