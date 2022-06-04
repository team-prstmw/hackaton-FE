import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Textarea from "../../components/Textarea/Textarea";
import Select from "../../components/Select/Select";
import styles from "./NewQuestionPage.module.scss";

const NewQuestionPage = () => {
  const methods = useForm({
    mode: "onTouched",
  });

  return (
    <FormProvider {...methods}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <Label>Pytanie</Label>
          <Textarea />
          <Label>Odpowiedzi</Label>
          <Label>Wyjaśnienie</Label>
          <Textarea />
          <Label>Kategoria</Label>
          <Select/>
          <Label>Źródło</Label>
          <Input />
        </form>
      </div>
    </FormProvider>
  );
};

export default NewQuestionPage;
