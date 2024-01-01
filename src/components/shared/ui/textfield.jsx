import { useState } from "react";

export const Textfield = (props) => {
  const { label, name, value, onChange, placeholder, type } = props;
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  return (
    <div className="flex flex-col space-y-1">
      <label className="select-none" htmlFor={name}>
        {label}
      </label>
      <input
        className="border border-gray-300 rounded-lg px-2 py-1"
        type={type}
        name={name}
        id={name}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};
