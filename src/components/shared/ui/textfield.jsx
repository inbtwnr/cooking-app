import { useState } from "react";
import cn from "../../../lib/cn.js";

export const Textfield = (props) => {
  const {
    label,
    name,
    value,
    onChange,
    placeholder,
    type,
    className,
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  return (
    <div className={cn("flex flex-col space-y-1", className)}>
      <label className="select-none" htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        className="rounded-lg w-full p-2"
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
