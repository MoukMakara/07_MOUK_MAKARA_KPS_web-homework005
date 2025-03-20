import { getAllBookCategories } from "@/services/bookService";
import React from "react";
import SelectCategoies from "./selectCategoies";

const FilterBookComponent = async () => {
  // Get all book categories
  const bookCategories = await getAllBookCategories();
  console.log("book categories: ", bookCategories);

  return (
    <>
      <div>
        {/* Button for filtering by category */}
        <SelectCategoies bookCategories={bookCategories} />
      </div>
    </>
  );
};

export default FilterBookComponent;
