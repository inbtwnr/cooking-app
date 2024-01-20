import { VariantProps } from "class-variance-authority";
import { catalogVariants } from "./catalogItem.variants.tsx";
import { Recipe } from "../../../types";

export interface CatalogItemInterface
  extends VariantProps<typeof catalogVariants>,
    Recipe {
  className?: string;
}
