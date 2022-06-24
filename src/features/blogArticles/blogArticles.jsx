import React from "react";
import styles from "./blogArticles.module.scss";
import { ArticleFilter, Articles, RecipeCard, CardStack } from "@/components";

const BlogArticles = () => {
  const recipes = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOU8KqNFnoM3XOAT0bR66229KlXDTzeIPSw&usqp=CAU",
      title: "Crochet Projects for Noodle Lovers",
      author: "Wade Warren",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOU8KqNFnoM3XOAT0bR66229KlXDTzeIPSw&usqp=CAU",
      title: "Crochet Projects for Noodle Lovers",
      author: "Wade Warren",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOU8KqNFnoM3XOAT0bR66229KlXDTzeIPSw&usqp=CAU",
      title: "Crochet Projects for Noodle Lovers",
      author: "Wade Warren",
    },
  ];

  return (
    <>
      <h1 className={styles["blogArticles__title"]}>Blog {`&`} Article</h1>
      <p className={styles["blogArticles__subtitle"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <div className={styles["blogArticles__wrapper"]}>
        <div className={styles["blogArticles__searchBar"]}>
          <ArticleFilter />
        </div>
        <div className={styles["blogArticles__articlesStack"]}>
          <Articles />
        </div>
        <div className={styles["blogArticles__recipesStack"]}>
          <CardStack>
            <h2 className={styles["blogArticles__recipesStack__title"]}>
              Tasty Recipes
            </h2>
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe}></RecipeCard>
            ))}
          </CardStack>
        </div>
        <div className={styles["blogArticles__ads"]}>Ads</div>
        <div className={styles["blogArticles__pageSelector"]}>
          Page Selector
        </div>
      </div>
    </>
  );
};

export default BlogArticles;
