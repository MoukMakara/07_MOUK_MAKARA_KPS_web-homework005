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
export const getBookCategoryById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/book_category/search?query=${id}`
    );
    const data = await response.json();
    return data.payload || null;
  } catch (error) {
    console.error("Error fetching book category:", error);
  }
};

export const getBookById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/book/${id}`
    );
    const data = await response.json();
    return data.payload || null;
  } catch (error) {
    console.error("Error fetching book:", error);
  }
};

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
// Get cartoon by id
export const getOldSchoolCartoonById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon/${id}`
    );
    const data = await response.json();
    return data.payload || null;
  } catch (error) {
    console.error("Error fetching cartoon:", error);
  }
};
