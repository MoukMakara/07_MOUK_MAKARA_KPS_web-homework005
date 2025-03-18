import React from "react";
import Image from "next/image";
import proflie from "../../public/profile.png";
import book from "../../public/book.svg";
import home from "../../public/home.svg";
import emoji from "../../public/emoji-happy.svg";
import Link from "next/link";

const sidebarItems = [
  { name: "Home", href: "/", icon: home },
  { name: "Book Categories", href: "/book-categories", icon: book },
  {
    name: "Old-School Cartoons",
    href: "/old-school-cartoons",
    icon: emoji,
  },
  { name: "Movies & TV Shows", href: "#", icon: book },
  { name: "Music", href: "#", icon: book },
  { name: "Photography", href: "#", icon: book },
  { name: "Sports & Fitness", href: "#", icon: book },
  { name: "Technology & Gadgets", href: "#", icon: book },
  { name: "Travel & Exploration", href: "#", icon: book },
  { name: "Writing & Journaling", href: "#", icon: book },
];

const SidebarComponent = () => {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {/* profile */}
          <div className="flex flex-col items-center mb-4">
            <Image
              src={proflie}
              alt="Profile"
              className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
            />
            <h1 className="text-xl font-bold">Mouk Makara</h1>
            <p className="text-gray-700">makaramouk@gmail.com</p>
          </div>
          <ul className="space-y-2 font-medium">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                  <span className="ms-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarComponent;
