import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { recipecontext } from "../context/RecipeContext";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  console.log(data);

  const navigate = useNavigate();
  const params = useParams();

  const recip = data.find((recipe) => {
    console.log("recipe id", recipe.id, "param id", params.id);

    return params.id == recipe.id;
  });

    if (!recipe) {
      return <p>Loading recipe...</p>; // or navigate away / show an error
    }
    const { register, handleSubmit, reset } = useForm({
      defaultValues: {
        title: recipe.title,
        description: recipe.description,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        image: recipe.image,
      },
    });

  const subtmitHandler = (recipe) => {
    const index = data.findIndex((item) => item.id === params.id);
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], ...recipe };
    setdata(updatedData);
    toast.success("Recipe updated successfully");
  };

  const deleteHandler = () => {
    const updatedData = data.filter((recipe) => recipe.id !== params.id);
    setdata(updatedData);
    toast.success("Recipe deleted successfully");
    navigate("/");
  };

  return (
    <div>
      <div className="left">
        {data.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{ width: "100%", maxWidth: "300px", borderRadius: "8px" }}
            />
            <h2>{recipe.title}</h2>
            <p>
              <strong>Chef:</strong> {recipe.chef}
            </p>
            <p>
              <strong>Description:</strong> {recipe.description}
            </p>
            <p>
              <strong>Ingredients:</strong> {recipe.ingredients}
            </p>
            <p>
              <strong>Instructions:</strong> {recipe.instructions}
            </p>
            <p>
              <strong>Category:</strong> {recipe.category}
            </p>
            <hr />
          </div>
        ))}
      </div>
      <div className="right"></div>
    </div>
  );
};

export default SingleRecipe;
