// import * as url from "url";

import { url } from "../../constants/api_url";

export const BOOKS_LOADING = "BOOKS::BOOKS_LOADING";
export const BOOKS_FAILURE = "BOOKS::BOOKS_FAILURE";
export const BOOKS_SUCCESS = "BOOKS::BOOKS_SUCCESS";

export const getBooksLoading = () => ( {
  type: BOOKS_LOADING
} );

export const getBooksFailure = (err) => ( {
  type: BOOKS_FAILURE,
  payload: err
} );

export const getBooksSuccess = (books) => ( {
  type: BOOKS_SUCCESS,
  payload: books
} );

export const getBooks = () => async(dispatch) => {
  dispatch( getBooksLoading() );

  try {
    const response = await fetch( url );
    console.log( response );

    if( !response.ok ) {
      throw new Error( "Some mistake has occurred. We are already working on it" );
    }

    const result = await response.json();
    dispatch( getBooksSuccess( result ) );
  } catch(err) {
    console.warn(err)
    dispatch(getBooksFailure(err.message))
  }
};