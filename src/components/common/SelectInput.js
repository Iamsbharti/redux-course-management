import React from "react";
import PropTypes from "prop-types";

function SelectInput({
  name,
  value,
  label,
  onChange,
  error,
  defaultOption,
  options
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}
SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string.isRequired
};

export default SelectInput;
