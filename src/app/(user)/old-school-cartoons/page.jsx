import React from "react";
// import Image from "next/image";
// import proflie from "../../../../public/profile.png";
// import eye from "../../../../public/eye.svg";
import CardBookComponent from "@/components/CardBookComponent";
import { getAllCartoons } from "@/services/bookService";
import CardOldSchoolCartoon from "@/components/CardOldSchoolCartoonComponent";
import SearchComponent from "@/components/SearchComponent";
import NavbarFilterBookComponent from "@/components/FilterBookComponent";
import NavbarFilterCartoonComponent from "@/components/NavbarFilterCartoonComponent";
import SearchCartoonComponent from "@/components/SearchCartoonComponent";

const OldSchollPage = async ({ searchParams }) => {
  const oldSchoolCartoons = await getAllCartoons();
  console.log("oldSchoolCartoons: ", oldSchoolCartoons);

  // search cartoon by title
  const searchQuery = searchParams.search || "";
  const searchBookCategories = searchParams.genre;

  // search
  let cartoonSearchs;
  if (searchQuery) {
    cartoonSearchs = oldSchoolCartoons.filter((cartoon) =>
      cartoon.ct_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("search cartoon results: ", cartoonSearchs);
  } else {
    cartoonSearchs = oldSchoolCartoons;
  }

  // check condition search filters
  if (searchBookCategories && searchBookCategories.length > 0) {
    cartoonSearchs = cartoonSearchs.filter(
      (book) => searchBookCategories == book.ct_genre_id
    );
    console.log("filtered results: ", cartoonSearchs);
  }
  return (
    <div className="p-4 sm:ml-80">
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <div className="w-full">
          <SearchCartoonComponent />
        </div>

        <div className="relative mt-4 flex items-center justify-center h-screen mb-4 rounded-sm  dark:bg-gray-800">
          {/* content */}
          <NavbarFilterCartoonComponent />
          {/* hr */}
          <hr className="absolute w-full top-16  border-gray-200 dark:border-gray-700" />

          <div className="mt-28">
            <CardOldSchoolCartoon
              oldSchoolCartoon={oldSchoolCartoons}
              oldSchoolCartoons={cartoonSearchs}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldSchollPage;
