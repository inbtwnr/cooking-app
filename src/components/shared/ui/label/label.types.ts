import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { VariantProps } from "class-variance-authority";
import { labelVariants } from "@/components/shared/ui/label/label.variants.tsx";

export interface labelInteractive
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}
