import { cva } from "class-variance-authority";

export const catalogVariants = cva(
  "ease-in flex flex-col min-w-0 duration-100 hover:scale-[102%] active:scale-[98%] select-none rounded ",
  {
    variants: {
      variant: {
        default:
          "bg-white text-slate-800 border border-slate-200 active:border-blue-600",
      },
      size: {
        sm: "px-2 py-1",
        default: "px-6 py-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
