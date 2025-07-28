import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import CreateRecipe from "../pages/CreateRecipe";

const Mainroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/create-recipe" element={<CreateRecipe />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Mainroute;
