import React from "react";

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Chip = (props: ChipProps) => {
  const { children, ...rest } = props;

  return (
    <button
      {...rest}
      className="px-2 select-none py-1 bg-gray-100 border border-gray-200 rounded-lg"
    >
      {children}
    </button>
  );
};

export { Chip };
