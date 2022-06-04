import { FC, HTMLAttributes } from "react";
import styles from "./ValidationMessage.module.scss";

const ValidationMessage: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  return <small className={styles.validationMessage}>{children}</small>;
};

export default ValidationMessage;
