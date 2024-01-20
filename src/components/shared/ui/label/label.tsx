"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { labelVariants } from "./label.variants";
import { labelInteractive } from "./label.types";

import { cn } from "@/lib/utils";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  labelInteractive
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
