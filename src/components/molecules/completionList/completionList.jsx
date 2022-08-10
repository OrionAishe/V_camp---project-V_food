import { Paragraph } from "@atoms";
import styles from "./completionList.module.scss";

const CompletionList = ({title, list}) => {

    const onClickHandler = (e) => {
        console.log(e.target.classlist);
    };

    console.log(list);

    return <>
        <Paragraph className={styles.List__Title}>{title}</Paragraph>
        <ul className={styles.List}>
            {list.map((item) => {
                <li className={styles.List__Item} onClick={onClickHandler}>{item}</li>
            })}
        </ul>
    </>
}

export default CompletionList;