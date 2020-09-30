import React from "react";
import "./FormInput.scss";
export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input class="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
