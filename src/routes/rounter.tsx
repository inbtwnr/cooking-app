import { createBrowserRouter } from "react-router-dom";
import CatalogPage from "../pages/catalog/catalog.page.tsx";
import CreateRecipePage from "../pages/recipe/create-recipe.page.tsx";
import ErrorPage from "./error-page.tsx";
import Layout from "../views/layout.tsx";
import HelloPage from "../pages/landing/hello.page.tsx";
import ViewRecipe from "../pages/recipe/view-recipe.page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HelloPage />,
      },
      {
        path: "/login",
        element: <HelloPage />,
      },
      {
        path: "/recipes",
        element: <CatalogPage />,
      },
      {
        path: "/recipes/add",
        element: <CreateRecipePage />,
      },
      {
        path: "/recipes/edit/:id",
        element: <CreateRecipePage />,
      },
      {
        path: "/recipes/:id",
        element: <ViewRecipe />,
      },
    ],
  },
]);

export default router;
