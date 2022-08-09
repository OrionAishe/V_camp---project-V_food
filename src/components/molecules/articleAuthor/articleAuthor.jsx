import styles from "./articleAuthor.module.scss";

const ArticleAuthor = (props) => {
  return (
    <div className={props.className}>
      <img src={props.authorImg} className={styles.authorImg} />
      <div>
        <p className={styles.authorName}>{props.articleAuthor}</p>
        {props.date != null && <p className={props.dateclassName}>{props.date}</p>}
      </div>
    </div>
  );
};

export default ArticleAuthor;
