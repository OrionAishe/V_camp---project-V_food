import { Paragraph } from "@atoms";
import styles from "./nutritionalTable.module.scss";

const NutritionalTable = () => {
    const nutritionalValues = {
        calories: (Math.random() * (400 - 50) + 50).toString().slice(0, 5),
        totalFat: (Math.random() * (50 - 5) + 5).toString().slice(0, 5),
        protein: (Math.random() * (20 - 2) + 2).toString().slice(0, 5),
        carbohydrate: (Math.random() * (50 - 5) + 5).toString().slice(0, 5),
        cholesterol: (Math.random() * (100 - 15) + 15).toString().slice(0, 5)
    };

    return <div className={styles.Table}>
        <Paragraph className={styles.Table__Title}>Nutritional Information</Paragraph>
        <ul className={styles.Table__List}>
            <li>
                <Paragraph className={styles.List__Title}>Calories</Paragraph><Paragraph className={styles.List__Number}>{nutritionalValues.calories} kcal</Paragraph>
            </li>
            <li>
                <Paragraph className={styles.List__Title}>Total Fat</Paragraph><Paragraph className={styles.List__Number}>{nutritionalValues.totalFat} g</Paragraph>
            </li>
            <li>
                <Paragraph className={styles.List__Title}>Protein</Paragraph><Paragraph className={styles.List__Number}>{nutritionalValues.protein} g</Paragraph>
            </li>
            <li>
                <Paragraph className={styles.List__Title}>Carbohydrate</Paragraph><Paragraph className={styles.List__Number}>{nutritionalValues.carbohydrate} g</Paragraph>
            </li>
            <li>
                <Paragraph className={styles.List__Title}>Cholesterol</Paragraph><Paragraph className={styles.List__Number}>{nutritionalValues.cholesterol} mg</Paragraph>
            </li>
        </ul>
        <Paragraph className={styles.Table__Description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, voluptatum.</Paragraph>
    </div>
}

export default NutritionalTable;