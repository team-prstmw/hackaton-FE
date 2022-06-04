import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Select from "../../components/Select/Select";
import styles from "./NewQuestionPage.module.scss";
import Label from "../../components/Label/Label";
import { CATEGORIES } from "../../constants/forms";
import { yupResolver } from "@hookform/resolvers/yup";
import NewQuestionValidation from "../../validation/NewQuestionValidation";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

interface NewQuestionData {
  content: string;
  explanation: string;
  category: typeof CATEGORIES;
  link: string;
}

const NewQuestionPage = () => {
  const methods = useForm<NewQuestionData>({
    resolver: yupResolver(NewQuestionValidation),
    mode: "onTouched",
  });
  const { handleSubmit } = methods;

  function onSubmit(data: NewQuestionData) {
    console.log(data);
  }

  return (
    <div className={styles.formContainer}>
      <FormProvider {...methods}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div>
            <Textarea id="content" label="Pytanie" />
          </div>
          <Label>Odpowiedzi</Label>
          <div>
            <Textarea id="explanation" label="Wyjaśnienie" />
          </div>
          <div>
            <Select id="category" label="Kategoria" />
          </div>
          <div>
            <Input id="link" label="Źródło" />
          </div>
          <SubmitButton />
        </form>
      </FormProvider>
    </div>
  );
};

export default NewQuestionPage;
