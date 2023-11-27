import {createBrowserRouter} from "react-router-dom";
import CatalogPage from "../pages/catalog/catalog.page.jsx";
import CreateRecipePage from "../pages/recipe/create-recipe.page.jsx";
import ErrorPage from "./error-page.jsx";
import Layout from "../views/layout.jsx";
import HelloPage from "../pages/landing/hello.page.jsx";
import ViewRecipe from "../pages/recipe/view-recipe.page.jsx";

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

        ]
    },
]);

export default router;