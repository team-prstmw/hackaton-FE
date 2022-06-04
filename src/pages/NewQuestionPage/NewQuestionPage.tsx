import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Textarea from "../../components/Textarea/Textarea";

const NewQuestionPage = () => {
  const methods = useForm({
    mode: "onTouched",
  });

  return (
    <FormProvider {...methods}>
      <form>
        <Label>Pytanie</Label>
        <Textarea />
        <Label>Odpowiedzi</Label>
        <Label>Wyjaśnienie</Label>
        <Textarea />
        <Label>Kategoria</Label>
        <Input />
        <Label>Źródło</Label>
        <Input />
      </form>
    </FormProvider>
  );
};

export default NewQuestionPage;
