import * as Yup from "yup";
import { CATEGORIES } from "../constants/forms";

const NewQuestionValidation = Yup.object({
  content: Yup.string().required(),
  explanation: Yup.string().required(),
  category: Yup.string().oneOf(CATEGORIES).required(),
  link: Yup.string().required(),
});

export default NewQuestionValidation;
