import { FC, LabelHTMLAttributes } from "react";

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ children }) => {
  return <label>{children}</label>;
};

export default Label;
