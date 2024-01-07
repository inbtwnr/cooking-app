import { NavLink } from "react-router-dom";
import cn from "../../lib/cn.ts";

export const Header = () => (
  <header className={cn("py-3 px-8 flex justify-between bg-white")}>
    <h1>
      <NavLink to="recipes">Cooking App</NavLink>
    </h1>
    <NavLink to="recipes/add">Create Recipe</NavLink>
  </header>
);
