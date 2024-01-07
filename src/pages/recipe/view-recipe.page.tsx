import { useState, useEffect } from "react";
import Tab from "../../components/shared/tab.js";
import { moveTabWheel } from "../../lib/moveTabWheel.tsx";
import {
  RecipeTab,
  RecipeTabDescription,
  RecipeTabTitle,
} from "../../components/recipe/view-tab.tsx";
import { Recipe } from "../catalog/catalog.page.tsx";

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  handleTabClick: (e: any) => void;
}

interface TabInner {
  tab: Tab;
  recipe: Recipe;
  activeTab: number;
}

const Tabs = (props: TabsProps) => {
  const { tabs, activeTab, handleTabClick } = props;

  return (
    <div className="relative box-border border-b border-b-slate-200">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          data-tab={tab.id}
          active={activeTab === tab.id}
          onClick={handleTabClick}
          aria-label={tab.name}
          tabIndex="0"
        >
          {tab.name}
        </Tab>
      ))}
      <div
        className="absolute bg-red-600 h-0.5 bottom-0"
        id="movingTabWheel"
      ></div>
    </div>
  );
};

const AboutTab = (props: TabInner) => {
  const { recipe, tab, activeTab } = props;
  const { main, overall } = recipe;
  const { id, name } = tab;

  if (
    main !== null &&
    main !== undefined &&
    overall !== null &&
    overall !== undefined
  ) {
    return (
      <RecipeTab tab={id} activeTab={activeTab}>
        <RecipeTabTitle>{name}</RecipeTabTitle>
        <RecipeTabDescription>
          <div className="grid gap-4 grid-cols-[minmax(20px,160px)_1fr]">
            <div>{main.title}</div>
            <div>{main.description}</div>
            <div>{overall.title}</div>
            <div>{overall.description}</div>
          </div>
        </RecipeTabDescription>
      </RecipeTab>
    );
  } else {
    return (
      <div>
        <p>Recipe description is empty now</p>
      </div>
    );
  }
};

const IngredientsTab = (props: TabInner) => {
  const { recipe, tab, activeTab } = props;
  const { ingredients } = recipe;
  const { id } = tab;

  return (
    <RecipeTab tab={id} activeTab={activeTab}>
      <RecipeTabTitle>Ingredients</RecipeTabTitle>
      <RecipeTabDescription>
        <div>
          {ingredients.map((ingredient) => (
            <label className="flex space-x-2 prose-p:my-0" key={ingredient.id}>
              <input type="checkbox" />
              <p>
                {ingredient.name} - {ingredient.quantity}{" "}
                {ingredient.measurement}
              </p>
            </label>
          ))}
        </div>
      </RecipeTabDescription>
    </RecipeTab>
  );
};

const DirectionsTab = (props: TabInner) => {
  const { recipe, tab, activeTab } = props;
  const { directions } = recipe;
  const { id, name } = tab;

  if (directions === null || directions === undefined) {
    return (
      <RecipeTab tab={id} activeTab={activeTab}>
        <RecipeTabTitle>{name}</RecipeTabTitle>
        <RecipeTabDescription>
          <p>Directions are empty now</p>
        </RecipeTabDescription>
      </RecipeTab>
    );
  }

  return (
    <RecipeTab tab={id} activeTab={activeTab}>
      <RecipeTabTitle>{name}</RecipeTabTitle>
      <RecipeTabDescription>
        <ol>
          {directions.map((direction) => (
            <li key={direction.step}>{direction.description}</li>
          ))}
        </ol>
      </RecipeTabDescription>
    </RecipeTab>
  );
};

export type Tab = {
  id: number;
  name: string;
};

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

  const tabs: Tab[] = [
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
