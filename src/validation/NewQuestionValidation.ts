import * as Yup from "yup";
import { CATEGORIES } from "../constants/forms";
import { ONE_OF_CHOICES_MESSAGE, REQUIRED_MESSAGE } from "./messages";

const NewQuestionValidation = Yup.object({
  content: Yup.string().required(REQUIRED_MESSAGE),
  answers: Yup.boolean().required(REQUIRED_MESSAGE),
  explanation: Yup.string().required(REQUIRED_MESSAGE),
  category: Yup.string()
    .oneOf(CATEGORIES, ONE_OF_CHOICES_MESSAGE)
    .required(REQUIRED_MESSAGE),
  link: Yup.string().required(REQUIRED_MESSAGE),
});

export default NewQuestionValidation;
