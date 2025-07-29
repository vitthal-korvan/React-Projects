import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import styles from "./createRecipe.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (recipe) => {
    recipe.id = nanoid();

    // const copydata = [...recipe]
    // copydata = push(recipe)
    // setData(copydata)

    setData([...data, recipe]);
    toast.success("Recipe created successfully!");
    reset();
    navigate("/recipes");
  };
  return (
    <div className={styles.create}>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.image}
          {...register("image")}
          type="url"
          placeholder="Enter image url"
        />
        <small>this is how error is shown</small>
        <input
          className={styles.title}
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />
        <small>this is how error is shown</small>
        <input
          className={styles.chef}
          {...register("chef")}
          type="text"
          placeholder="Recipe chef"
        />
        <small>this is how error is shown</small>
        <textarea
          className={styles.description}
          {...register("description")}
          placeholder="Recipe description"
          rows={5}
          cols={24}
        ></textarea>
        <small>this is how error is shown</small>
        <textarea
          className={styles.ingredients}
          {...register("ingredients")}
          placeholder="Recipe ingredients seperated by commas"
          rows={5}
          cols={24}
        ></textarea>
        <small>this is how error is shown</small>
        <textarea
          className={styles.instructions}
          {...register("instructions")}
          placeholder="Recipe instructions seperated by commas"
          rows={5}
          cols={24}
        ></textarea>
        <small>this is how error is shown</small>
        <select {...register("category")} defaultValue="black">
          <option value="breakfast">BreakFast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>
        <small>this is how error is shown</small>
        <button>Save Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
