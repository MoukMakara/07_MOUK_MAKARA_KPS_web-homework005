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
  return (
    <div>
      <div>
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
