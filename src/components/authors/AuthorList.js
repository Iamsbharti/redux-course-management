import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function AuthorList({ authors, onDelete }) {
  return (
    <div>
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
                <Link to={`/author/${author.id}`}>{author.name}</Link>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(author)}
                >
                  Delete
                </button>
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
  onDelete: PropTypes.func.isRequired,
};
export default AuthorList;
