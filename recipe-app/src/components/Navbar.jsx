import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>

      <NavLink to="/recipes" className="nav-link">
        Recipes
      </NavLink>
      <NavLink to="/create-recipe" className="nav-link create-recipe">
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;
