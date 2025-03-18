"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SearchComponent = () => {
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    const searchData = e.target.elements["default-search"].value;

    if (searchData) {
      router.push(`/book-categories?search=${encodeURIComponent(searchData)}`);
    } else {
      router.push(`/book-categories`);
    }
  };
  return (
    <>
      <div className="">
        <form className="relative w-full" onSubmit={handleSearch}>
          {" "}
          <button
            type="button"
            className="cursor-pointer absolute top-3 left-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-primary-text"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m2.35-6.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/* Search input */}
          <input
            id="searchInput"
            name="default-search"
            type="text"
            placeholder="Search assignment here"
            className="w-full bg-white py-3 pl-14 pr-5 rounded-xl h-12 border-none focus:ring-0 focus:outline-custom-sky-blue"
          />
        </form>
      </div>
    </>
  );
};

export default SearchComponent;
