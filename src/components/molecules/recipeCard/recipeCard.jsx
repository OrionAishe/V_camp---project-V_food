import React from "react";
import style from "./recipeCard.module.scss";
import { Link } from "react-router-dom";

const RecipeCard = ({ id, author, image, title }) => {
  return (
    <Link to={"/" + id} className={style["recipeCard"]}>
      <div className={style["recipeCard__imageWrapper"]}>
        <img src={image} className={style["recipeCard__image"]} />
      </div>
      <h3 className={style["recipeCard__body__title"]}>{title}</h3>
      <p className={style["recipeCard__body__author"]}>By {author}</p>
    </Link>
  );
};

export default RecipeCard;
