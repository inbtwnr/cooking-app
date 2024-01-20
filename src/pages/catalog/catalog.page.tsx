import { useState } from "react";
import { CatalogList } from "../../components/catalog/catalogList/catalogList.tsx";
import { SearchInput } from "../../components/catalog/catalogSearchInput/searchInput.tsx";
import { Recipe } from "@/types";

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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
