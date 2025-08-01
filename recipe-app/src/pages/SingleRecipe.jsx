import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { param } from "motion/react-client";
// import { nanoid } from "nanoid";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  // console.log(data);

  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) =>  params.id == recipe.id)
  console.log(recipe);
  
  return (
    <div>SingleRecipe</div>
  );

  //   const { register, handleSubmit, reset } = useForm({
  //     defaultValues: {
  //       title: recip.title,
  //       description: recip.description,
  //       ingredients: recip.ingredients,
  //       instructions: recip.instructions,
  //       image: recip.image,
  //     },
  //   });
   

  

  //   if (!recip) {
  //     return <p>Loading recipe...</p>; // or navigate away / show an error
  //   }

  // const subtmitHandler = (recipe) => {
  //   recipe.id = params.id;
  //   const index = data.findIndex((item) => item.id === params.id);
  //   const updatedData = [...data];
  //   updatedData[index] = { ...updatedData[index], ...recipe };
  //   setdata(updatedData);
  //   toast.success("Recipe updated successfully");
  // };

  // const deleteHandler = () => {
  //   const updatedData = data.filter((recipe) => recipe.id !== params.id);
  //   setdata(updatedData);
  //   toast.success("Recipe deleted successfully");
  //   navigate("/");
  // };

  // return (
  //   <div>
  //     <div className="left">
  //       <div className="recipe-card">
  //         <img
  //           src={recip.image}
  //           alt={recip.title}
  //           style={{ width: "100%", maxWidth: "300px", borderRadius: "8px" }}
  //         />
  //         <h2>{recip.title}</h2>
  //         <p>
  //           <strong>Chef:</strong> {recip.chef}
  //         </p>
  //         <p>
  //           <strong>Description:</strong> {recip.description}
  //         </p>
  //         <p>
  //           <strong>Ingredients:</strong> {recip.ingredients}
  //         </p>
  //         <p>
  //           <strong>Instructions:</strong> {recip.instructions}
  //         </p>
  //         <p>
  //           <strong>Category:</strong> {recip.category}
  //         </p>
  //         <button onClick={deleteHandler}>Delete</button>
  //         {/* Optionally add an update form using handleSubmit(subtmitHandler) */}
  //         <hr />
  //       </div>
  //     </div>

  //     <div className="right"></div>
  //   </div>
  // );
};

export default SingleRecipe;
