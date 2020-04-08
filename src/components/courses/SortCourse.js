import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
function SortCourse({ handleOptionChange }) {
  const options = [
    { name: "Sort By Id", value: "id" },
    { name: "Sort By AuthorName", value: "authorname" },
    { name: "Sort By Course", value: "title" },
    { name: "Sort By category", value: "category" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  function handleChange(event) {
    const { value } = event.target;
    setSelectedOption(value);
  }
  useEffect(() => {
    handleOptionChange(selectedOption);
  }, [selectedOption]);

  return (
    <div className="form-group">
      <label htmlFor="Sorting">Sorting Option</label>
      <div className="field">
        <select
          value={selectedOption}
          onChange={handleChange}
          className="form-control"
        >
          {options.map((ops) => (
            <option key={ops.value} value={ops.value}>
              {ops.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
SortCourse.propTypes = {
  handleOptionChange: PropTypes.func.isRequired,
};
export default SortCourse;
