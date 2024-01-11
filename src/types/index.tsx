/*
 * This file is used to define the types that are used in the application.
 */

import React from "react";

export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  measurement:
    | "g"
    | "ml"
    | "unit"
    | "tsp"
    | "tbsp"
    | "cup"
    | "pinch"
    | "dash"
    | null;
}

export interface MainTab {
  title: string;
  description: string;
}

export interface OverallTab {
  title: string;
  description: string;
}

export interface Direction {
  step: number;
  description: string;
}

export interface Recipe {
  id: number;
  name: string;
  description?: string | null;
  ingredients: Ingredient[];
  time: string;
  main?: MainTab | null;
  overall?: OverallTab | null;
  directions?: Direction[];
}

export interface TabProps {
  id: number;
  active?: boolean;
  name: string;
}

export interface TabsProps {
  tabs: TabProps[];
  activeTab: number;
  handleTabClick: (e: any) => void;
}

export interface TabInner {
  tab: TabProps;
  recipe: Recipe;
  activeTab: number;
}

export interface TabInterface extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

export interface RecipeTabTitleInterface
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  classNames?: string;
}

export interface RecipeTabBodyInterface
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tab: TabProps;
  activeTab: number;
}

export interface RecipeTabDescriptionInterface
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  classNames?: string;
}
