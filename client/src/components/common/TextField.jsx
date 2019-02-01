import React from "react";

const TextField = ({ name, placeholder, value, type, onChange }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control form-control-lg"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
