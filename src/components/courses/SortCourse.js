import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
function SortCourse({ handleOptionChange }) {
  const [sorting, setSorting] = useState("Below List is sorted By Id");

  function handleChange(event) {
    const { name, value } = event.target;
    setSorting({ [name]: value });
  }
  useEffect(() => {
    console.log(sorting);
    handleOptionChange(sorting);
  }, [sorting]);

  return (
    <div className="form-group">
      <label htmlFor="Sorting">Sorting Option</label>
      <div className="field">
        <select
          name="sorting"
          value={sorting.sorting}
          onChange={handleChange}
          className="form-control"
        >
          <option>Below List is sorted By Id</option>
          <option>Sort By Author Name</option>
          <option>Sort By Category</option>
          <option>Sort By Course Name</option>
        </select>
      </div>
    </div>
  );
}
SortCourse.propTypes = {
  handleOptionChange: PropTypes.func.isRequired,
};
export default SortCourse;
