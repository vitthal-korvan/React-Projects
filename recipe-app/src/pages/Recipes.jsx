import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import style from "./Recipe.module.css";

const Recipes = () => {
  const { data } = useContext(recipecontext);
  const renderrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return <div className={style.mainRecipe}>{data.length>0?renderrecipes:"No Recipe Found!"}</div>;
};

export default Recipes;
