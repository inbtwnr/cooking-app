import { Chip } from "../../components/shared/ui";
import { RouterLink } from "../../components/shared/link.tsx";
import { Recipe } from "./catalog.page.tsx";

const CatalogItem = (props: Recipe) => {
  const { id, name, description, time, ingredients } = props;

  return (
    <RouterLink to={`/recipes/${id}`}>
      <li className="px-5 flex flex-col justify-between bg-white hover:shadow-lg h-64 duration-150 ease-out pt-6 pb-7 rounded-lg border">
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
