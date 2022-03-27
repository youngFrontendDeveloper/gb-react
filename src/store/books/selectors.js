import { STATUS } from "../../constants/status";

export const selectBooksList = state => state.books.booksList;
export const selectBooksLoading = state => state.books.request.status === STATUS.LOADING;
export const selectBooksError = state => state.books.request.error;