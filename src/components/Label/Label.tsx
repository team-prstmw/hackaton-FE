import { FC, LabelHTMLAttributes } from "react";
import styles from "./Label.module.scss";

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ children }) => {
  return <label className={styles.label}>{children}</label>;
};

export default Label;
