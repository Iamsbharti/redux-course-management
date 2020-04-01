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
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select name={name} value={value} onChange={onChange}>
          <option value="">{defaultOption}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.name}
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
  value: PropTypes.oneOfType[(PropTypes.number, PropTypes.string)],
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string.isRequired
};

export default SelectInput;
