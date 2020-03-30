import * as types from "./actionTypes";
import * as authorsApi from "../../api/authorApi";

export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCEES, authors };
}
export function loadAuthors() {
  return function(dispatch) {
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
