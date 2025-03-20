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

  return (
    <div>
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
