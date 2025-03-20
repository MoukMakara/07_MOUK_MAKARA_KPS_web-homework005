"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SelectCategoriesCartoon = ({ selectCategorieCartoon }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    // old-school-cartoons?genre=2
    if (value === "") {
      router.push("/old-school-cartoons");
    } else {
      router.push(`/old-school-cartoons?genre=${value}`);
    }
    setSelectedCategory(value);
    console.log("Selected cartoon category ID:", value);
  };

  // Find the selected category name
  const selectedCategoryName =
    selectCategorieCartoon.find(
      (category) => String(category.id) === String(selectedCategory)
    )?.cartoon_genre || "Old School Cartoons";

  console.log("Selected category name:", selectedCategoryName);

  return (
    <div>
      <div>
        <button
          type="button"
          className="absolute left-3 top-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-[#087E8B] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {selectedCategoryName}
        </button>
        {/* Button for filtering by category */}
        <select
          value={selectedCategory}
          onChange={handleChange}
          className="absolute right-3 top-3 py-2 px-4 rounded-md border border-gray-300 focus:ring-2  text-gray-900"
        >
          <option value="" className="text-gray-700">
            Filter by category
          </option>
          {selectCategorieCartoon.map((category, index) => {
            return (
              <option key={index} value={category.id} className="text-gray-700">
                {category.cartoon_genre}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectCategoriesCartoon;
