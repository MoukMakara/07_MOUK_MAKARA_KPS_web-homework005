"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SelectCategories({ bookCategories }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    // book-categories?query=3
    if (value === "") {
      router.push("/book-categories");
    } else {
      router.push(`/book-categories?query=${value}`);
    }
    setSelectedCategory(value);
    console.log("Selected category ID:", value);
  };
  // Find the selected category name
  const selectedCategoryName =
    bookCategories.find(
      (category) => String(category.id) === String(selectedCategory)
    )?.book_cate_name || "All Books";

  console.log("Selected category name:", selectedCategoryName);

  return (
    <div>
      <button
        type="button"
        className="absolute left-3 top-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-[#087E8B] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {selectedCategoryName}
      </button>
      <select
        value={selectedCategory}
        onChange={handleChange}
        className="absolute right-3 top-3 py-2 px-4 rounded-md border border-gray-300 focus:ring-2 text-gray-900"
      >
        <option value="" disabled className="text-gray-700">
          Filter by category
        </option>
        {bookCategories.map((category, index) => (
          <option key={index} value={category.id} className="text-gray-700">
            {category.book_cate_name}
          </option>
        ))}
      </select>
    </div>
  );
}
