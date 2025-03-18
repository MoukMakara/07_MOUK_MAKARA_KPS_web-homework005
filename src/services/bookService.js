// src/services/bookService.js

export const getAllBooks = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book`);
    const data = await response.json();
    console.log("all books: ", data);
    console.log("all cartoons payload: ", data.payload);

    return data.payload || [];
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};
//Get all book categories
export const getAllBookCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/book_category`
    );
    const data = await response.json();
    console.log("all book categories: ", data);
    console.log("all book categories payload: ", data.payload);

    return data.payload || [];
  } catch (error) {
    console.error("Error fetching book categories:", error);
  }
};
// Get book category by id
// export const getBookCategoryById = async (id) => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/book_category/search?query=${id}`
//     );
//     const data = await response.json();
//     return data.payload || null;
//   } catch (error) {
//     console.error("Error fetching book category:", error);
//   }
// };

// Get all cartoons
export const getAllCartoons = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon`);
    const data = await response.json();
    console.log("all cartoons: ", data);
    console.log("all cartoons payload: ", data.payload);

    return data.payload || [];
  } catch (error) {
    console.error("Error fetching cartoons:", error);
  }
};
// // get Book By Id
// export const getBookById = async (id) => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/book/${id}`
//     );
//     const data = await response.json();
//     return data.payload || null;
//   } catch (error) {
//     console.error("Error fetching book:", error);
//   }
// };

// // Get cartoon by id
// export const getOldSchoolCartoonById = async (id) => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon/${id}`
//     );
//     const data = await response.json();
//     return data.payload || null;
//   } catch (error) {
//     console.error("Error fetching cartoon:", error);
//   }
// };

export const getItemById = async (id, type) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/${id}/${type}`;

    if (type === "book") {
      url = `${process.env.NEXT_PUBLIC_BASE_URL}/book/${id}`;
    } else if (type === "cartoon") {
      url = `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon/${id}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    console.log("daada", data);

    return data.payload || null;
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    return null;
  }
};

// Search book by book title
export const searchBookByTitle = async (title) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/book?search=${title}`
    );
    const data = await response.json();
    return data.payload || null;
  } catch (error) {
    console.error("Error searching book by title:", error);
    return null;
  }
};
// Get books by book category id
export const getBooksByCategoryId = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/book?query=${id}`
    );
    const data = await response.json();
    return data.payload || null;
  } catch (error) {
    console.error("Error fetching books by category id:", error);
    return null;
  }
};
