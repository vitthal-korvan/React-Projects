import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";

const RecipeCard = (props) => {
  const { id, image, title, chef, description, category } = props.recipe;
  //   console.log(image);

  return (
      <Link to={`/recipes/details/:${id}`} className={styles.recipeCard}>
        <img className={styles.recipeImg} src={image} alt={id} />

        <h2 className={styles.recipeTitle}>{title}</h2>
        <h3 className={styles.recipeChef}>{chef}</h3>
        <p className={styles.recipeDesc}>
          {description.slice(0, 100)}{" "}
          <span className={styles.more}>...more</span>
        </p>
        <p className={styles.recipeCategory}>Category: {category}</p>
      </Link>
  );
};

export default RecipeCard;
