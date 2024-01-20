import { Chip } from "../../shared/ui";
import { RouterLink } from "../../shared/link.tsx";
import { catalogVariants } from "./catalogItem.variants.tsx";
import { CatalogItemInterface } from "./catalogItem.types.ts";
import { cn } from "@/lib/utils.ts";

const CatalogItem = (props: CatalogItemInterface) => {
  const { id, name, description, variant, className, time, ingredients } =
    props;

  return (
    <RouterLink to={`/recipes/${id}`}>
      <li className={cn(catalogVariants({ variant, className }))}>
        <div className="flex gap-2 flex-col">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-slate-400">Time of cooking: {time}</p>
          <p className="mb-4 h-12 text-ellipsis overflow-hidden">
            {description}
          </p>
        </div>
        <ul className="flex m-0 p-0 gap-2">
          {ingredients.map((ingredient) => (
            <Chip key={ingredient.id}>{ingredient.name}</Chip>
          ))}
        </ul>
      </li>
    </RouterLink>
  );
};

export default CatalogItem;
