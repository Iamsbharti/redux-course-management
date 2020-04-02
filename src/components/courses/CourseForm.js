import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import PropTypes from "prop-types";
function CourseForm({
  course,
  authors,
  onSave,
  onChange,
  errors = {},
  saving
}) {
  return (
    <div>
      <form onSubmit={onSave}>
        <h2>{course.id ? "Edit" : "Save"}Course</h2>
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}

        <TextInput
          name="title"
          label="Title"
          value={course.title}
          onChange={onChange}
          error={ErrorEvent.title}
        />
        <SelectInput
          name="authorId"
          label="Authors"
          value={course.authorId || ""}
          defaultOption="Select Author"
          options={authors.map(author => ({
            text: author.name,
            value: author.id
          }))}
          onChange={onChange}
          error={errors.author}
        />
        <TextInput
          name="category"
          label="Categoty"
          value={course.category}
          onChange={onChange}
          error={errors.category}
        />
        <button type="submit" disabled={saving} className="btn btn-primary">
          {saving ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}
CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};
export default CourseForm;
