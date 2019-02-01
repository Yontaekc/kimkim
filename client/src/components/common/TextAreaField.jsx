import React from "react";

const TextAreaField = ({ name, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <textarea
        className="form-control form-control-lg"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaField;
