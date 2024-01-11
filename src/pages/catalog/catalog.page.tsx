import { useState } from "react";
import { CatalogList } from "./catalog-list.tsx";
import { Textfield, Button, Chip } from "../../components/shared/ui";
import { Recipe, Ingredient } from "../../types";

const allRecipes: Recipe[] = [
  {
    id: 1,
    name: "Authentic Topfenstrudel Recipe",
    description:
      "The following recipe is adapted from the Saveur website (www.saveur.com). It includes baking the topfenstrudel covered in sauce in a dish. This recipe uses farmer’s cheese which is very similar to quark. ",
    ingredients: [
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
    ],
    time: "30 minutes",
  },
  {
    id: 2,
    name: "Pizza",
    description: "Tasty",
    main: {
      title: "Main",
      description: "Main description",
    },
    overall: {
      title: "Overall",
      description: "Overall description",
    },
    ingredients: [
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
    ],
    directions: [
      {
        step: 1,
        description: "Step 1",
      },
      {
        step: 2,
        description: "Step 2",
      },
      {
        step: 3,
        description: "Step 3",
      },
    ],
    time: "30 minutes",
  },
  {
    id: 2,
    name: "Pizza",
    description: "Tasty",
    main: {
      title: "Main",
      description: "Main description",
    },
    overall: {
      title: "Overall",
      description: "Overall description",
    },
    ingredients: [
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
    ],
    directions: [
      {
        step: 1,
        description: "Step 1",
      },
      {
        step: 2,
        description: "Step 2",
      },
      {
        step: 3,
        description: "Step 3",
      },
    ],
    time: "30 minutes",
  },
  {
    id: 2,
    name: "Pizza",
    description: "Tasty",
    main: {
      title: "Main",
      description: "Main description",
    },
    overall: {
      title: "Overall",
      description: "Overall description",
    },
    ingredients: [
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
    ],
    directions: [
      {
        step: 1,
        description: "Step 1",
      },
      {
        step: 2,
        description: "Step 2",
      },
      {
        step: 3,
        description: "Step 3",
      },
    ],
    time: "30 minutes",
  },
  {
    id: 2,
    name: "Pizza",
    description: "Tasty",
    main: {
      title: "Main",
      description: "Main description",
    },
    overall: {
      title: "Overall",
      description: "Overall description",
    },
    ingredients: [
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
    ],
    directions: [
      {
        step: 1,
        description: "Step 1",
      },
      {
        step: 2,
        description: "Step 2",
      },
      {
        step: 3,
        description: "Step 3",
      },
    ],
    time: "30 minutes",
  },
  {
    id: 2,
    name: "Pizza",
    description: "Tasty",
    main: {
      title: "Main",
      description: "Main description",
    },
    overall: {
      title: "Overall",
      description: "Overall description",
    },
    ingredients: [
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
    ],
    directions: [
      {
        step: 1,
        description: "Step 1",
      },
      {
        step: 2,
        description: "Step 2",
      },
      {
        step: 3,
        description: "Step 3",
      },
    ],
    time: "30 minutes",
  },
  {
    id: 2,
    name: "Pizza",
    description: "Tasty",
    main: {
      title: "Main",
      description: "Main description",
    },
    overall: {
      title: "Overall",
      description: "Overall description",
    },
    ingredients: [
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
    ],
    directions: [
      {
        step: 1,
        description: "Step 1",
      },
      {
        step: 2,
        description: "Step 2",
      },
      {
        step: 3,
        description: "Step 3",
      },
    ],
    time: "30 minutes",
  },
  {
    id: 2,
    name: "Pizza",
    description: "Tasty",
    main: {
      title: "Main",
      description: "Main description",
    },
    overall: {
      title: "Overall",
      description: "Overall description",
    },
    ingredients: [
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
    ],
    directions: [
      {
        step: 1,
        description: "Step 1",
      },
      {
        step: 2,
        description: "Step 2",
      },
      {
        step: 3,
        description: "Step 3",
      },
    ],
    time: "30 minutes",
  },
  {
    id: 9,
    name: "Pizza",
    description: "Tasty",
    main: {
      title: "Main",
      description: "Main description",
    },
    overall: {
      title: "Overall",
      description: "Overall description",
    },
    ingredients: [
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 1,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
    ],
    directions: [
      {
        step: 1,
        description: "Step 1",
      },
      {
        step: 2,
        description: "Step 2",
      },
      {
        step: 3,
        description: "Step 3",
      },
    ],
    time: "30 minutes",
  },
];

const INGREDIENTS: Ingredient[] = [
  {
    id: 1,
    name: "Bread",
    quantity: 2,
    measurement: "g",
  },
  {
    id: 2,
    name: "Meat",
    quantity: 1,
    measurement: "g",
  },
  {
    id: 3,
    name: "Cheese",
    quantity: 1,
    measurement: "g",
  },
  {
    id: 4,
    name: "Salad",
    quantity: 4,
    measurement: "g",
  },
];

interface SearchInputProps {
  search: string;
  setSearch: (value: string) => void;
  handleSubmitSearch: () => void;
}

const SearchInput = (props: SearchInputProps) => {
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
        <Button onClick={handleSubmitSearch}>Search</Button>
      </div>
      {/* TODO: Add filter by ingredient */}
      <div className="flex gap-2">
        {INGREDIENTS.map((ingredient: Ingredient) => (
          <Chip key={ingredient.name}>{ingredient.name}</Chip>
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
