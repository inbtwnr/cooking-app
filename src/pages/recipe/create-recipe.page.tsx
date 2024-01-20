import { ChangeEvent, useState } from "react";
import { Input, Button } from "../../components/shared/ui";

function CreateRecipePage() {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
  });

  const handleRecipeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRecipe((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="prose">
      <h1 className="select-none">Add Recipe</h1>
      <div className="space-y-2">
        <Input
          label="Add a name"
          value={recipe.name}
          name="name"
          onChange={handleRecipeChange}
          placeholder="e.g. Burger"
        />
        <Input
          label="Add a description"
          value={recipe.description}
          name="description"
          onChange={handleRecipeChange}
          placeholder="e.g. A delicious burger"
        />
        <Button className="bg-sky-600 text-white font-semibold py-2 px-3 rounded">
          Save Recipe
        </Button>
      </div>
    </div>
  );
}

export default CreateRecipePage;
