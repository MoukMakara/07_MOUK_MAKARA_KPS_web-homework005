// import React from "react";
// import CardBookComponent from "@/components/CardBookComponent";
// import { getAllBookCategories, getAllBooks } from "@/services/bookService";

// const BookPage = async () => {
//   // get all books from api
//   const books = await getAllBooks();
//   console.log("books: ", books);

//   // Get all book categories
//   const bookCategories = await getAllBookCategories();
//   console.log("book categories: ", bookCategories);

//   return (
//     <div className="p-4 sm:ml-80">
//       <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
//         <div className="w-full">
//           {/* search bar width 100% */}
//           <div className="">
//             <form className="relative w-full">
//               {" "}
//               {/* Change w-9/12 to w-full */}
//               {/* Search button */}
//               <button
//                 type="button"
//                 className="cursor-pointer absolute top-3 left-4"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6 text-primary-text"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21 21l-4.35-4.35m2.35-6.65a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </button>
//               {/* Search input */}
//               <input
//                 id="searchInput"
//                 type="text"
//                 placeholder="Search assignment here"
//                 className="w-full bg-white py-3 pl-14 pr-5 rounded-xl h-12 border-none focus:ring-0 focus:outline-custom-sky-blue"
//               />
//             </form>
//           </div>
//         </div>

//         <div className="relative mt-4 flex items-center justify-center h-screen mb-4 rounded-sm  dark:bg-gray-800">
//           {/* content */}
//           <button
//             type="button"
//             className="absolute left-3 top-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//           >
//             All Books
//           </button>
//           {/* Button for filtering by category */}
//           <select className="absolute right-3 top-3 py-2 px-4 rounded-md border border-gray-300 focus:ring-2  text-gray-900">
//             <option value="" className="text-gray-700">
//               Filter by category
//             </option>
//             {bookCategories.map((category, index) => {
//               return (
//                 <option
//                   key={index}
//                   value={category.id}
//                   className="text-gray-700"
//                 >
//                   {category.book_cate_name}
//                 </option>
//               );
//             })}
//           </select>

//           {/* hr */}
//           <hr className="absolute w-full top-16  border-gray-200 dark:border-gray-700" />

//           <div className="mt-28 ">
//             <CardBookComponent bookItem={books} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookPage;
