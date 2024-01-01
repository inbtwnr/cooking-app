import cn from "../../../lib/cn.js";

export const Button = (props) => {
  const { children, className, ...rest } = props;

  return (
    <button {...rest} className={cn("select-none", className)}>
      {children}
    </button>
  );
};
