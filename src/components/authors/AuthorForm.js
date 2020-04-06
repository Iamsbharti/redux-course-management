import React from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

function AuthorForm({ author, onChange, onSave, saving = false, errors }) {
  return (
    <div>
      <form onSubmit={onSave}>
        <h2>{author.id ? "Edit" : "Save"} Author</h2>
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}

        <TextInput
          name="name"
          label="Author Name"
          value={author.name}
          onChange={onChange}
          error={errors.name}
        />

        <button disabled={saving} className="btn btn-primary">
          {saving ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}
AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object,
};
export default AuthorForm;
