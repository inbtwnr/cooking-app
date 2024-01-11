import { useState, useEffect } from "react";
import { moveTabWheel } from "../../lib/moveTabWheel.tsx";
import { Recipe, TabProps } from "../../types";
import {
  Tabs,
  AboutTab,
  IngredientsTab,
  DirectionsTab,
} from "../../components/recipe/view-tab.tsx";

const ViewRecipePage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (e: any) => {
    setActiveTab(e.target.dataset.tab);
  };

  useEffect(() => {
    const selectedElement = document.querySelector<HTMLElement>(
      `[data-tab="${activeTab}"]`,
    )!;
    moveTabWheel(selectedElement, "movingTabWheel");
  }, [activeTab]);

  const tabs: TabProps[] = [
    {
      id: 1,
      name: "About",
    },
    {
      id: 2,
      name: "Ingredients",
    },
    {
      id: 3,
      name: "Directions",
    },
  ];

  const recipe: Recipe = {
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
        id: 2,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 3,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
      {
        id: 4,
        name: "Bread",
        quantity: 200,
        measurement: "g",
      },
    ],
    main: {
      title: "Main",
      description: "Main description",
    },
    overall: {
      title: "Overall",
      description: "Overall description",
    },
    directions: [
      {
        step: 1,
        description: "Slice bread",
      },
      {
        step: 2,
        description: "Add tomato",
      },
    ],
    time: "30 minutes",
  };

  return (
    <>
      <h2 className="text-2xl font-bold">{recipe.name}</h2>
      <Tabs tabs={tabs} activeTab={activeTab} handleTabClick={handleTabClick} />
      <AboutTab activeTab={activeTab} recipe={recipe} tab={tabs[0]} />
      <IngredientsTab activeTab={activeTab} recipe={recipe} tab={tabs[1]} />
      <DirectionsTab activeTab={activeTab} recipe={recipe} tab={tabs[2]} />
    </>
  );
};

export default ViewRecipePage;
