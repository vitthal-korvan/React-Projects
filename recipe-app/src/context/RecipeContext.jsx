import { createContext, useState } from "react";

export const recipecontext = createContext(null);
import { nanoid } from "nanoid";

const RecipeContext = (props) => {
  const [data, setData] = useState([
    {
      id: nanoid(),
      image:
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-1297854-2474661.jpg&fm=jpg",
      title: "Recipe One",
      chef: "Chef One",
      description: "This is a delicious recipe for breakfast.",
      ingredients: "Eggs, Bread, Butter",
      category: "breakfast",
    },
  ]);


  return (
    <div>
      <recipecontext.Provider value={{ data, setData }}>
        {props.children}
      </recipecontext.Provider>
    </div>
  );
};

export default RecipeContext;
