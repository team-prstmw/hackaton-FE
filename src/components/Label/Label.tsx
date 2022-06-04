import { FC, LabelHTMLAttributes } from "react";
import styles from "./Label.module.scss";

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({
  htmlFor,
  children,
}) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
