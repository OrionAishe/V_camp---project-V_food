import { Paragraph } from "@atoms";
import styles from "./nutritionalTable.module.scss";

const NutritionalTable = ({recipe}) => {
    return <div className={styles.Table}>
        <Paragraph classname={styles.Table__Title}>Nutritional Information</Paragraph>
    </div>
}

export default NutritionalTable;