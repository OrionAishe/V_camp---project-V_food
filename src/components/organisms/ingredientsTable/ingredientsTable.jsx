import { CompletionList, CardStack, RecipeCard, SiteBanner } from "@molecules";
import styles from "./ingredientsTable.module.scss";

const IngredientsTable = ({ recipes }) => {
    const list = ["Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet."];
    return <>
        <div className={styles.Ingredients}>
            <div className={styles.Ingredients__List}>
                <CompletionList title="Ingredients" list={list} />
            </div>
            <div className={styles["Ingredients__recipesStack"]}>
                <h2 className={styles["Ingredients__recipesStackTitle"]}>
                    Other Recipes
                </h2>
                <CardStack>
                    {recipes.recipes.slice(0, 3)
                        .map((recipe) => <RecipeCard key={recipe.id} {...recipe} />)}
                </CardStack>
            </div>
            <div className={styles["Ingredients__ads"]}>
                <SiteBanner />
            </div>
            <div className={styles.Ingredients__Directions}>
                <CompletionList title="Directions" list={[]}/>
            </div>
        </div>
    </>
}

export default IngredientsTable;