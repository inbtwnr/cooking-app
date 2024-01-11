import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button.variants.tsx";

export interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
