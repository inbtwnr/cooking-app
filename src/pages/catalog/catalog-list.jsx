import CatalogItem from "./catalog-item.jsx";

export const CatalogList = (props) => {
  const { recipes } = props;

  return (
    <ul className="grid grid-cols-3 list-none flex-col gap-2">
      {recipes.map((recipe) => (
        <CatalogItem key={recipe.id} {...recipe} />
      ))}
    </ul>
  );
};
