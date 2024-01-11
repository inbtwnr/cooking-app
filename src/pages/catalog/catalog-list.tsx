import CatalogItem from "./catalog-item.tsx";
import { Recipe } from "../../types";

interface CatalogListProps {
  recipes: Recipe[];
}

export const CatalogList = (props: CatalogListProps) => {
  const { recipes } = props;

  return (
    <ul className="grid grid-cols-3 list-none flex-col gap-2">
      {recipes.map((recipe) => (
        <CatalogItem key={recipe.id} {...recipe} />
      ))}
    </ul>
  );
};
