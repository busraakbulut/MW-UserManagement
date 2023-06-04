import React from "react";

const InputField = ({ label, type, value, onChange, name }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">{label}:</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="border border-gray-300 px-3 py-2 rounded-md w-full"
      />
    </div>
  );
};

export default InputField;
