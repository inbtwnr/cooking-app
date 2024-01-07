import cn from "../../../lib/cn.ts";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <button {...rest} className={cn("select-none", className)}>
      {children}
    </button>
  );
};
