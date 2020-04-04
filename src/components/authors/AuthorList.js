import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function AuthorList({ authors }) {
  return (
    <div>
      <h2>Authors</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Author Name(s)</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td>
                <Link to={`/authors/${author.id}`}>{author.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
};
export default AuthorList;
