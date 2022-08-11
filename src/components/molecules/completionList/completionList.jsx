import { Paragraph } from "@atoms";
import styles from "./completionList.module.scss";

const CompletionList = ({title, list}) => {

    const onClickHandler = (e) => {
        e.target.classList.toggle(styles["--active"]);
    };

    return <div className={styles.CompletionList}>
        <Paragraph className={styles.List__Title}>{title}</Paragraph>
        <ul className={styles.List}>
            {list.map((item) => {
               return <li className={styles.List__Item} key={item.index} onClick={onClickHandler}><span className={styles.List__Checkbox}></span>{item}</li>
            })}
        </ul>
    </div>
}

export default CompletionList;