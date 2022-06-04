import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getById } from "../../utils/read";
import styles from "./AnswerJustification.module.scss";
import { Navbar } from "../../components/Navbar/Navbar";

// export function AnswerJustification() {
export function AnswerJustification(questionId: number) {
  const [explanation, setExplanation] = useState("");
  const [explanationLink, setExplanationLink] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const justification = await getById(questionId);
      setExplanation(justification.explanationDescription);
      setExplanationLink(justification.detailsLink);
    };
  }, []);

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
        {/* <a className={styles.answerExplanationLink} href="wp.pl">
          Czytaj więcej
        </a> */}
        <a className={styles.answerExplanationLink} href={explanationLink}>
          Czytaj więcej
        </a>
        <Link className={styles.nextQuestion} to={"wp.pl"}>
          <button className={styles.nextQuestionButton}>
            Następne pytanie
          </button>
        </Link>
      </div>
    </div>
  );
}
