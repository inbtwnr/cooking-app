import cn from "../../../../lib/cn";
import { ButtonProps } from "./button.types";
import { buttonVariants } from "./button.variants";

export const Button = (props: ButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <button {...rest} className={cn(buttonVariants({ className }))}>
      {children}
    </button>
  );
};
