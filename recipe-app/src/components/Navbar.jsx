import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.active : styles["navLink"]
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? styles.active : styles["navLink"]
        }
      >
        About
      </NavLink>

      <NavLink
        to="/recipes"
        className={({ isActive }) =>
          isActive ? styles.active : styles["navLink"]
        }
      >
        Recipes
      </NavLink>
      <NavLink
        to="/create-recipe"
        className={`${styles["navLink"]} ${styles["create-recipe"]}`}
      >
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;
