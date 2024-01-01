import { useState } from "react";
import {CatalogList} from "./catalog-list.jsx";

const CatalogPage = () => {
    const [recipes, setRecipes] = useState([{
        id: 1,
        name: "Authentic Topfenstrudel Recipe",
        description: "The following recipe is adapted from the Saveur website (www.saveur.com). It includes baking the topfenstrudel covered in sauce in a dish. This recipe uses farmer’s cheese which is very similar to quark. ",
        ingredients: ["Bread", "Meat", "Cheese", "Salad"],
    }, {
        id: 2,
        name: "Pizza",
        description: "Tasty",
        ingredients: ["Bread", "Meat", "Cheese", "Salad"],
    }, {
        id: 3,
        name: "Burger",
        description: "Tasty",
        ingredients: ["Bread", "Meat", "Cheese", "Salad"],
    }]);

    return (
        <>
            <h1 className="text-4xl font-bold">Catalog</h1>
            <CatalogList recipes={recipes} />
        </>
    );
};

export default CatalogPage;