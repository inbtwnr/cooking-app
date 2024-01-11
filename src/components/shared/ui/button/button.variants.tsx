import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "active:scale-95 select-none inline-flex items-center justify-center rounded text-base font-medium transition-colors " +
    "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 " +
    "disabled:border-slate-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 shadow-none",
  {
    variants: {
      variant: {
        default:
          "btn border border-transparent bg-blue-600 hover:bg-blue-700 text-white dark:bg-slate-50 dark:text-slate-900",
      },
      size: {
        sm: "px-2 py-1",
        default: "px-3 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
