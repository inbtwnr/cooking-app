import { useState } from "react";
import { CatalogList } from "./catalog-list.jsx";
import { Textfield, Button, Chip } from "../../components/shared/ui";

const allRecipes = [
  {
    id: 1,
    name: "Authentic Topfenstrudel Recipe",
    description:
      "The following recipe is adapted from the Saveur website (www.saveur.com). It includes baking the topfenstrudel covered in sauce in a dish. This recipe uses farmer’s cheese which is very similar to quark. ",
    ingredients: ["Bread", "Meat", "Cheese", "Salad"],
    time: "30 minutes",
  },
  {
    id: 2,
    name: "Pizza",
    description: "Tasty",
    ingredients: ["Bread", "Meat", "Cheese", "Salad"],
    time: "30 minutes",
  },
  {
    id: 3,
    name: "Burger",
    description: "Tasty",
    ingredients: ["Bread", "Meat", "Cheese", "Salad"],
    time: "30 minutes",
  },
  {
    id: 4,
    name: "Authentic Topfenstrudel Recipe",
    description:
      "The following recipe is adapted from the Saveur website (www.saveur.com). It includes baking the topfenstrudel covered in sauce in a dish. This recipe uses farmer’s cheese which is very similar to quark. ",
    ingredients: ["Bread", "Meat", "Cheese", "Salad"],
    time: "30 minutes",
  },
  {
    id: 5,
    name: "Pizza",
    description: "Tasty",
    ingredients: ["Bread", "Meat", "Cheese", "Salad"],
    time: "30 minutes",
  },
  {
    id: 6,
    name: "Burger",
    description: "Tasty",
    ingredients: ["Bread", "Meat", "Cheese", "Salad"],
    time: "30 minutes",
  },
  {
    id: 7,
    name: "Authentic Topfenstrudel Recipe",
    description:
      "The following recipe is adapted from the Saveur website (www.saveur.com). It includes baking the topfenstrudel covered in sauce in a dish. This recipe uses farmer’s cheese which is very similar to quark. ",
    ingredients: ["Bread", "Meat", "Cheese", "Salad"],
    time: "30 minutes",
  },
  {
    id: 8,
    name: "Pizza",
    description: "Tasty",
    ingredients: ["Bread", "Meat", "Cheese", "Salad"],
    time: "30 minutes",
  },
  {
    id: 9,
    name: "Burger",
    description: "Tasty",
    ingredients: ["Bread", "Meat", "Cheese", "Salad"],
    time: "30 minutes",
  },
];

const INGREDIENTS = ["Bread", "Meat", "Cheese", "Salad"];

const SearchInput = (props) => {
  const { search, setSearch, handleSubmitSearch } = props;

  return (
    <div>
      <div className="flex w-full gap-2 items-end">
        <Textfield
          label="Search"
          placeholder="e.g. Burger"
          className="flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSubmitSearch();
            }
          }}
        />
        <Button
          onClick={handleSubmitSearch}
          className="p-2 text-base bg-sky-600 text-white rounded"
        >
          Search
        </Button>
      </div>
      {/* TODO: Add filter by ingredient */}
      <div className="flex gap-2">
        {INGREDIENTS.map((ingredient) => (
          <Chip key={ingredient} name={ingredient} />
        ))}
      </div>
    </div>
  );
};

const CatalogPage = () => {
  const [recipes, setRecipes] = useState(allRecipes);
  const [search, setSearch] = useState("");

  const handleSubmitSearch = () => {
    setRecipes(() => {
      if (search === "") {
        return allRecipes;
      } else {
        return allRecipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(search.toLowerCase()),
        );
      }
    });
  };

  return (
    <>
      <h1 className="text-4xl font-bold">Catalog</h1>
      <SearchInput
        search={search}
        setSearch={setSearch}
        handleSubmitSearch={handleSubmitSearch}
      />
      <CatalogList recipes={recipes} />
    </>
  );
};

export default CatalogPage;
