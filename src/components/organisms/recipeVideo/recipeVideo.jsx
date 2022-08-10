import { RecipeImage, NutritionalTable } from "@molecules";
import { Paragraph } from "@atoms";
import styles from "./recipeVideo.module.scss";

const RecipeVideo = () => {
    return <>
        <div className={styles.recipeVideo}>
            <RecipeImage />
            <NutritionalTable />
        </div>
        <Paragraph className={styles.recipeVideo__Description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Facere, quaerat cumque rem voluptate quo autem perferendis distinctio ducimus blanditiis reprehenderit vel officia,
            temporibus quam enim ab rerum consequuntur? Nulla, voluptatum?</Paragraph>
    </>
}

export default RecipeVideo;