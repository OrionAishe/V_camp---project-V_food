import React from "react";
import styles from "./paragraph.module.scss";

const Paragraph = ({ children, className, muted, ...props }) => (
  <p className={!muted ? className : `${className} ${styles["paragraph--muted"]}`}
    {...props}
  >
    {children}
  </p>
);

export default Paragraph;