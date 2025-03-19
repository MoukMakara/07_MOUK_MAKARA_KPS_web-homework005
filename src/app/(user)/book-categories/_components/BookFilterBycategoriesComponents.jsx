import React from "react";

const BookFilterBycategoriesComponents = () => {
  return (
    <>
      <div className="p-4 sm:ml-80">
        <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="w-full">
            <SearchComponent />
          </div>

          <div className="relative mt-4 flex items-center justify-center h-screen mb-4 rounded-sm  dark:bg-gray-800">
            {/* content */}
            <NavbarFilterBookComponent />

            {/* hr */}
            <hr className="absolute w-full top-16  border-gray-200 dark:border-gray-700" />

            <div className="mt-28 ">
              <CardBookComponent books={bookSearchs} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookFilterBycategoriesComponents;
