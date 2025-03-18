import React from "react";
// import Image from "next/image";
// import proflie from "../../../../public/profile.png";
// import eye from "../../../../public/eye.svg";
import CardBookComponent from "@/components/CardBookComponent";
import { getAllCartoons } from "@/services/bookService";
import CardOldSchoolCartoon from "@/components/CardOldSchoolCartoonComponent";
import SearchComponent from "@/components/SearchComponent";
import NavbarFilterBookComponent from "@/components/NavbarFilterBookComponent";
import NavbarFilterCartoonComponent from "@/components/NavbarFilterCartoonComponent";

const OldSchollPage = async () => {
  const oldSchoolCartoons = await getAllCartoons();
  console.log("oldSchoolCartoons: ", oldSchoolCartoons);
  return (
    <div className="p-4 sm:ml-80">
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <div className="w-full">
          <SearchComponent />
        </div>

        <div className="relative mt-4 flex items-center justify-center h-screen mb-4 rounded-sm  dark:bg-gray-800">
          {/* content */}
          <NavbarFilterCartoonComponent />
          {/* hr */}
          <hr className="absolute w-full top-16  border-gray-200 dark:border-gray-700" />

          <div className="mt-28">
            <CardOldSchoolCartoon oldSchoolCartoon={oldSchoolCartoons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldSchollPage;
