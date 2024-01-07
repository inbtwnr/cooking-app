import CatalogItem from "./catalog-item.tsx";
import { Ingredient } from "./catalog.page.tsx";

interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  time: string;
}

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
