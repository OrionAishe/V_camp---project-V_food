import { CompletionList, CardStack, RecipeCard, SiteBanner } from "@molecules";
import styles from "./ingredientsTable.module.scss";

const IngredientsTable = ({ recipes }) => {
    const ingredients = ["Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet."];

    const directions = [{
        title: "Lorem ipsum dolor sit amet.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minima similique distinctio excepturi tempora sit deserunt ab consequuntur quasi voluptas."
    }, {
        title: "Lorem ipsum dolor sit amet.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minima similique distinctio excepturi tempora sit deserunt ab consequuntur quasi voluptas."
    }, {
        title: "Lorem ipsum dolor sit amet.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minima similique distinctio excepturi tempora sit deserunt ab consequuntur quasi voluptas."
    },];

    return <>
        <div className={styles.Ingredients}>
            <div className={styles.Ingredients__List}>
                <CompletionList title="Ingredients" list={ingredients} />
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
                <CompletionList title="Directions" list={directions} />
            </div>
        </div>
    </>
}

export default IngredientsTable;