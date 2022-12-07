import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  search: "",
  status: "idle",
  error: null,
};

export const getBooks = createAsyncThunk("books/getBooks", async (search) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&download=epub&key=${process.env.REACT_APP_GOOGLE_API}`
    );
    return response.data.items;
  } catch (err) {
    return err.message; 
  }
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.status = "loading";
        return state;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = "success";
        state.books=action.payload;
        return state;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        return state;
      });
  },
});

export const booksSelector = (state) => state.books
export default booksSlice.reducer
