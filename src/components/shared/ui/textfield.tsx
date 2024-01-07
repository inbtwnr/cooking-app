import { useState } from "react";
import cn from "../../../lib/cn.ts";

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Textfield = (props: TextfieldProps) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
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
