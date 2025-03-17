import { getBookById } from "@/services/bookService";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import home from "../../../../public/home.svg";
import bookimg from "../../../../public/book.svg";
import book2 from "../../../../public/book2.svg";
import arrow from "../../../../public/arrow-right.svg";

const BookDetailsPage = async ({ params }) => {
  console.log("params : ", params);
  const { bookId } = params;
  console.log("bookId : ", bookId);
  const book = await getBookById(bookId);
  console.log("book : ", book);

  return (
    <div className="mx-auto px-40">
      <div className="p-4">
        <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="w-full">
            {/* nav */}
            <nav className="mb-4 flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Image
                      src={home}
                      alt="home icon"
                      className="me-2 h-4 w-4"
                    ></Image>
                    Home
                    <Image
                      src={arrow}
                      alt="arrow icon"
                      className="me-2 ml-3 h-4 w-4"
                    ></Image>
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <Image
                      src={bookimg}
                      alt="bookimg icon"
                      className="me-2 h-4 w-4"
                    ></Image>
                    <Link
                      href="/book-categories"
                      className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                    >
                      Book Categories
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <Image
                      src={arrow}
                      alt="arrow icon"
                      className="me-2 h-4 w-4"
                    ></Image>
                    <Image
                      src={book2}
                      alt="book2 icon"
                      className="me-2 h-4 w-4"
                    ></Image>
                    <span className="ms-1 text-sm font-medium text-[#C81D25] dark:text-gray-400 md:ms-2">
                      {book.book_title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* details */}
      <div className="relative mt-20 flex justify-center items-center  rounded-4xl shadow-2xl">
        <div className="flex flex-col justify-start items-start px-4 py-8">
          <img
            className="absolute -top-32 right-16 w-[301px] h-[407px] rounded-4xl shadow-2xl "
            src="https://s3-alpha-sig.figma.com/img/a58b/a7b5/56c0b55beb6f5293b7ad9065c7eca3d1?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XNz67n2zz-jnN7oEejs2bsJjm6vewr28UzXYN0bLva2qtKt8qCnKQXTBtM9M8smBHL2IoDuAv3JExWpA0C~7Jpn0NxZcN0ICnDlu6fDX64n5vgsuyaSh3cfbQMgNCsq45Y2fEF7Jqr65-oRCJfPWKJF4WoYWu~F-T1lh6ewxPsGqEeeuvxnT7tYgXzXeSvKss0Q7kMK~GHGIYffr9LM85UIx4nhhGlKazlz5D36fB~dGZvrn7qJwiCvaGkGAz2sa1VvB9jEVulXSPN7B1wEw3ub7o2ATr3OyqdObRv9~5Jnbc~c5b~gocjz9sLXR0HUgFhTFXJDeqaEBJRWr6dOS7A__"
            alt=""
          />

          <section className="bg-white mt-48 px-16">
            <header className=" mb-8">
              <h1 className="text-4xl font-bold">{book.book_title}</h1>
              <p className="text-xl text-gray-600">
                by <span className="text-[#087E8B]">{book.book_author}</span>{" "}
              </p>
            </header>
            <p className=" leading-[28px]">{book.description}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
