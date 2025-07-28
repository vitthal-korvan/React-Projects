import { recipecontext } from "../context/RecipeContext";
import { useContext } from "react";


const Recipes = () => {
  const { data } = useContext(recipecontext);
  const renderrecipes =  data.map((recipe) => (
    <div key={recipe.id} className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <p>Instructions: {recipe.instructions.join(", ")}</p>
    </div>
  ));

  return <div>{renderrecipes}</div>;
};

export default Recipes;
