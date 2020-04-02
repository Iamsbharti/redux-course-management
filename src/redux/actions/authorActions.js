import * as types from "./actionTypes";
import * as authorsApi from "../../api/authorApi";
import { beginApiCall } from "../actions/apiStatusActions";
export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}
export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return authorsApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
}
