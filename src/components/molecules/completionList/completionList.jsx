import { Paragraph } from "@atoms";
import styles from "./completionList.module.scss";

const CompletionList = ({title, list}) => {

    const onClickHandler = (e) => {
        if(e.target.nodeName != "LI"){
            e.target.parentElement.classList.toggle(styles["--active"]);
        }
        e.target.classList.toggle(styles["--active"]);
    };

    return <div className={styles.CompletionList}>
        <Paragraph className={styles.List__Title}>{title}</Paragraph>
        <ul className={styles.List}>
            {title == "Ingredients" && list.map((item, index) => {
               return <li className={styles.List__Item} key={index} onClick={onClickHandler}>
                <span className={styles.List__Checkbox}></span>{item}</li>
            })}
            {title == "Directions" && list.map((item, index) => {
                return <li className={styles.List__Direction} key={index} onClick={onClickHandler}>
                    <Paragraph className={styles.List__DirectionTitle} >
                        <span className={styles.List__Checkbox} />
                        {index+1}. 
                        {item.title}
                    </Paragraph>
                <Paragraph className={styles.List__Description} >{item.description}</Paragraph></li>
            })}
        </ul>
    </div>
}

export default CompletionList;