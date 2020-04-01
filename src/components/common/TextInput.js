import React from "react";
import PropTypes from "prop-types";

function TextInput({ name, value, onChange, error, label }) {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  label: PropTypes.string.isRequired
};
export default TextInput;
