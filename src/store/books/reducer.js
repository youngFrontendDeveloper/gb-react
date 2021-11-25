import { STATUS } from "../../constants/status";
import { BOOKS_LOADING, BOOKS_FAILURE, BOOKS_SUCCESS } from "./actions";

const initialBooks = {
  booksList: [],
  request: {
    status: STATUS.IDLE,
    error: ""
  }
};

export const booksReducer = (state = initialBooks, action) => {
  switch( action.type ) {
    case BOOKS_LOADING:
      return {
        ...state,
        request: {
          ...state.request,
          status: STATUS.LOADING
        }
      };

    case BOOKS_SUCCESS:
      return {
        ...state,
        booksList: action.payload,
        request: {
          error: "",
          status: STATUS.SUCCESS
        }
      };

    case BOOKS_FAILURE:
      return {
        ...state,
        request: {
          error: action.payload,
          status: STATUS.FAILURE
        }
      };

    default:
      return state;
  }
};



