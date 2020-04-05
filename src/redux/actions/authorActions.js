import * as types from "./actionTypes";
import * as authorsApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "../actions/apiStatusActions";
export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}
export function updateAuthorSuccess(author) {
  return { type: types.UPDATE_AUTHOR_SUCCESS, author };
}
export function createAuthorSuccess(author) {
  return { type: types.CREATE_AUTHOR_SUCCESS, author };
}
export function deleteAuthorSuccess(author) {
  return { type: types.DELETE_AUTHOR_OPTIMISTIC, author };
}
//thunk recieves a dispath func--which tells store to a data is available which in turn tells registered
//components to rerender accordingly.
export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorsApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveAuthors(author) {
  console.log("author-in act:" + author);
  debugger;
  return function (dispatch) {
    dispatch(beginApiCall);
    return authorsApi.saveAuthor(author).then((savedAuthor) => {
      author.id
        ? dispatch(updateAuthorSuccess(savedAuthor))
        : dispatch(createAuthorSuccess(savedAuthor));
    });
  };
}

export function deleteAuthor(author) {
  return function (dispatch) {
    dispatch(deleteAuthorSuccess(author));
    return authorsApi.deleteAuthor(author.id);
  };
}
