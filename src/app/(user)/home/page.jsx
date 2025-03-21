import BookCategoriesComponent from "@/components/BookCategoriesComponent";
import OldSchoolCartoonsComponent from "@/components/OldSchoolCartoonsComponent";
import SearchComponent from "@/components/SearchComponent";
import React from "react";

const HomePageComponent = () => {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <div className="p-4 sm:ml-80">
        <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="w-full">
            <SearchComponent />
          </div>

          <div className="relative mt-4 flex items-center justify-center h-screen mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
            {/* content */}
            <button
              type="button"
              className="absolute left-3 top-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Home page
            </button>
            {/* hr */}
            <hr className="absolute w-full top-16  border-gray-200 dark:border-gray-700" />

            <div className="flex w-full justify-around">
              {/* card 1 */}
              <BookCategoriesComponent />
              {/* card 2 */}
              <OldSchoolCartoonsComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageComponent;
