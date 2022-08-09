import styles from "./recipeImage.module.scss"

const RecipeImage = ({ recipe }) => {
    return (
        <div className={styles.Image}>
            <img className={styles.Image__Background} src={recipe.image} alt={recipe.title} />
            <svg className={styles.Image__Play} width="120" height="120" viewBox="0 0 120 120">
                <circle className={styles.Play__Circle} cx="60" cy="60" r="60" />
                <path className={styles.Play_Arrow} d="M73 58.2679C74.3333 59.0378 74.3333 60.9622 73 61.7321L55 72.1244C53.6667 72.8942 52 71.9319 52 70.3923L52 49.6077C52 48.0681 53.6667 47.1058 55 47.8756L73 58.2679Z" />
            </svg>
        </div>
    )
}

export default RecipeImage;