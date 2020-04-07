import React, { useState } from "react";
function SortCourse() {
  const [name, setName] = useState("");
  const sortingOption = [
    { text: "Sort By Author Name", value: "name" },
    { text: "Sort By Category", value: "category" },
    { text: "Sort By Course Name", value: "title" },
  ];

  //sortingOption.map((option) => console.log(option.text + ":" + option.value));

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name + ":" + value);
    setName({ [name]: value });
  }
  //console.log("name:" + name.text);
  return (
    <div className="form-group">
      <label htmlFor="Sorting">Sorting Option</label>
      <div className="field">
        <select
          name="Sorting"
          value={name}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Below List is sorted</option>
          {sortingOption.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default SortCourse;
