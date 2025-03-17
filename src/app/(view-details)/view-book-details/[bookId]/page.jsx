// src/app/(view-details)/view-book-details/[bookId]/page.jsx

import { formatDate } from "@/lib/formatDate";
import { getBookById } from "@/services/bookService";
import Image from "next/image";
import React from "react";

export default async function ViewBookDetails({ params }) {
  const { bookId } = await params;
  const book = await getBookById(bookId);
  console.log("Book : ", book);

  return (
    <div className="relative space-y-4 flex justify-center gap-10">
      {/* book title */}
      <div>
        <h2 className="text-2xl font-semibold text-steel-blue">
          {book?.bookTitle}
        </h2>
        <p className="text-teal text-lg">{book?.description}</p>

        {/* date */}
        <div className=" font-medium text-teal">
          <p>Date : {formatDate(book?.createdAt)}</p>
        </div>
      </div>

      <Image
        src={
          "https://i.pinimg.com/736x/bf/67/73/bf6773ba023c70afe6caf83e88744d61.jpg"
        }
        alt="book cover"
        width={400}
        height={400}
        className="rounded-3xl"
      />
    </div>
  );
}
