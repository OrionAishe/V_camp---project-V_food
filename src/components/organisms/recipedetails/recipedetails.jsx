import { Title, Paragraph } from "@atoms";
import { ArticleAuthor, TimeInfo, TypeInfo } from "@molecules";
import styles from "./recipedetails.module.scss";

const RecipeDetails = ({ recipe }) => {
    const date = new Date();

    return (
        <>
            <div className={styles.Header}>
                <Title>{recipe.title}</Title>
                <div className={styles.Header__Details}>
                    <ArticleAuthor
                    className={styles.Header__Author}
                    dateclassName={styles.Header__AuthorDate}
                    authorImg={"images/Leslie Alexander.png"}
                    articleAuthor={recipe.author}
                    date={date.toDateString().slice(4, date.lenght)} />

                    <TimeInfo className={styles.Header__Time} insideclassName={styles.Time__Text} name={"PREP TIME"} time={recipe.time} />
                    <TimeInfo className={styles.Header__Time} insideclassName={styles.Time__Text} name={"COOK TIME"} time={recipe.time} />
                    <TypeInfo className={styles.Header__Type} type={recipe.type} />
                </div>
                <div className={styles.Header__Icons}>
                    <div className={styles.Header__Icon}>
                        <div className={styles.Header__IconImage}>
                            <img src="\images\printer.png" alt="print" />
                        </div>
                        <Paragraph>PRINT</Paragraph>
                    </div>
                    <div className={styles.Header__Icon}>
                        <div className={styles.Header__IconImage}>
                            <img src="\images\share.png" alt="share" />
                        </div>
                        <Paragraph>SHARE</Paragraph>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeDetails;