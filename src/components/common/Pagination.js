import React from "react";
import PropTypes from "prop-types";
function Pagination({ coursePerPage, totalCourse }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(coursePerPage / totalCourse); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          <li key={number} className="page-item">
            <a href="!#" className="page-link">
              {number}
            </a>
          </li>;
        })}
      </ul>
    </nav>
  );
}
Pagination.propTypes = {
  coursePerPage: PropTypes.number.isRequired,
  totalCourse: PropTypes.number.isRequired,
};
export default Pagination;
