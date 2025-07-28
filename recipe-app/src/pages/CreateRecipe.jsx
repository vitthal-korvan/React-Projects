import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import "./createRecipe.css";

const CreateRecipe = () => {
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (recipe) => {
    recipe.id = nanoid();

    // const copydata = [...recipe]
    // copydata = push(recipe)
    // setData(copydata)

    setData([...data, recipe]);
    reset();
  };
  return (
    <div className="create">
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="image"
          {...register("image")}
          type="url"
          placeholder="Enter image url"
        />
        <small>this is how error is shown</small>
        <input
          className="title"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />
        <small>this is how error is shown</small>
        <textarea
          className="description"
          {...register("description")}
          placeholder="Recipe description"
          rows={5}
          cols={24}
        ></textarea>
        <small>this is how error is shown</small>
        <textarea
          className="ingredients"
          {...register("ingredients")}
          placeholder="Recipe ingredients seperated by commas"
          rows={5}
          cols={24}
        ></textarea>
        <small>this is how error is shown</small>
        <textarea
          className="instructions"
          {...register("instructions")}
          placeholder="Recipe instructions seperated by commas"
          rows={5}
          cols={24}
        ></textarea>
        <small>this is how error is shown</small>
        <select {...register("category")} defaultValue="black">
          <option value="veg">Vegetarian</option>
          <option value="Non-Veg">Non-Vegetarian</option>
          <option value="Vegan">Vegan</option>
        </select>
        <small>this is how error is shown</small>
        <button>Save Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
