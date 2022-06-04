import { FC, TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import Label from "../Label/Label";
import ValidationMessage from "../ValidationMessage/ValidationMessage";
import styles from "./Textarea.module.scss";

type TextareaAttributes = BasicFieldAttributes &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: FC<TextareaAttributes> = (props) => {
  const { id, label } = props;

  const {
    formState: { errors },
    register,
  } = useFormContext();
    
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <textarea {...props} className={`${styles.textarea} ${errors[id] ? " validation-error" : ""}`} {...register(id)} />
      {errors[id] && <ValidationMessage>{errors[id]["message"]}</ValidationMessage>}
    </>
  );
};

export default Textarea;
