import React from "react";

const InputField = ({ label, type, value, onChange, name }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default InputField;
