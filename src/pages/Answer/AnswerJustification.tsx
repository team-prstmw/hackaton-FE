import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getById } from "../../utils/read";
import styles from "./AnswerJustification.module.scss";
import { Navbar } from "../../components/Navbar/Navbar";

interface AnswerJustificationProps{
  questID: number;
}

const justification = {
  explanationDescription: "hahahah",
  detailsLink: "https://www.google.com",
};
// export function AnswerJustification() {
export function AnswerJustification({questID}: AnswerJustificationProps) {
  const [explanation, setExplanation] = useState("");
  const [explanationLink, setExplanationLink] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // const justification = await getById(questionId);
      setExplanation(justification.explanationDescription);
      setExplanationLink(justification.detailsLink);
    };
    fetchData();
  }, [explanation, explanationLink]);

  return (
    <div className={styles.answerJustificationPage}>
      <Navbar />
      <div className={styles.answerExplanationWrapper}>
        <p className={styles.answerExplanation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          asperiores cupiditate magnam quos velit voluptate, eos enim quaerat
          sunt accusamus et accusantium? Iure quo tenetur excepturi iste fugiat
          vel ipsum.
          {explanation}
        </p>
        <a
          className={styles.answerExplanationLink}
          href={explanationLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Czytaj więcej
        </a>
        <Link className={styles.nextQuestion} to={"/quiz"}>
          <button className={styles.nextQuestionButton}>
            Wróć do pytania
          </button>
        </Link>
      </div>
    </div>
  );
}
