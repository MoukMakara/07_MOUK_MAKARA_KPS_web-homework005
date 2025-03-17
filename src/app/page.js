import Image from "next/image";
import proflie from "../../public/profile.png";

import eye from "../../public/eye.svg";

import BookCategoriesComponent from "@/components/BookCategoriesComponent";
import OldSchoolCartoonsComponent from "@/components/OldSchoolCartoonsComponent";
import CardBookComponent from "@/components/CardBookComponent";
import SidebarComponent from "@/components/SidebarComponent";
import HomePageComponent from "./(user)/home/page";

export default function Home() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <>
      <SidebarComponent />
      <HomePageComponent />
    </>
  );
}
