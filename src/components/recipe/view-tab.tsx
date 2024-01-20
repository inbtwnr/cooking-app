import { cn } from "@/lib/utils.ts";
import { useEffect, useState } from "react";
import {
  RecipeTabBodyInterface,
  RecipeTabDescriptionInterface,
  RecipeTabTitleInterface,
  TabInner,
  TabsProps,
} from "@/types";
import Tab from "../shared/tab.tsx";

export const RecipeTabTitle = (props: RecipeTabTitleInterface) => {
  const { children, classNames, ...rest } = props;

  return (
    <h3 {...rest} className={cn("mb-4 text-xl", classNames)}>
      {children}
    </h3>
  );
};

export const RecipeTabDescription = (props: RecipeTabDescriptionInterface) => {
  const { children, classNames, ...rest } = props;

  return (
    <div {...rest} className={cn(classNames)}>
      {children}
    </div>
  );
};

export const RecipeTab = (props: RecipeTabBodyInterface) => {
  const { tab, children, activeTab, ...rest } = props;
  const { id } = tab;

  const handleActiveTab = (cur: number) =>
    Number(cur) === id ? "block" : "hidden";

  const [className, setClassName] = useState(handleActiveTab(activeTab));

  useEffect(() => {
    setClassName(handleActiveTab(activeTab));
  }, [activeTab]);

  return (
    <div {...rest} className={cn("prose", className)}>
      {children}
    </div>
  );
};

export const Tabs = (props: TabsProps) => {
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
          tabIndex={0}
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

export const AboutTab = (props: TabInner) => {
  const { recipe, tab, activeTab } = props;
  const { main, overall } = recipe;

  if (
    main !== null &&
    main !== undefined &&
    overall !== null &&
    overall !== undefined
  ) {
    return (
      <RecipeTab tab={tab} activeTab={activeTab}>
        <RecipeTabTitle>{tab.name}</RecipeTabTitle>
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

export const IngredientsTab = (props: TabInner) => {
  const { recipe, tab, activeTab } = props;
  const { ingredients } = recipe;

  return (
    <RecipeTab tab={tab} activeTab={activeTab}>
      <RecipeTabTitle>{tab.name}</RecipeTabTitle>
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

export const DirectionsTab = (props: TabInner) => {
  const { recipe, tab, activeTab } = props;
  const { directions } = recipe;

  if (directions === null || directions === undefined) {
    return (
      <RecipeTab tab={tab} activeTab={activeTab}>
        <RecipeTabTitle>{tab.name}</RecipeTabTitle>
        <RecipeTabDescription>
          <p>Directions are empty now</p>
        </RecipeTabDescription>
      </RecipeTab>
    );
  }

  return (
    <RecipeTab tab={tab} activeTab={activeTab}>
      <RecipeTabTitle>{tab.name}</RecipeTabTitle>
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
