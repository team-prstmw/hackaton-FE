import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AnswerJustification.module.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { useApiGet } from "../../hooks/useApi";

interface AnswerJustificationProps {
  questID: number;
}

export function AnswerJustification({ questID }: AnswerJustificationProps) {
  const [justification, setJustification] = useState<string>("");
  const [explanationLink, setExplanationLink] = useState("");

  const { data } = useApiGet({ path: `/questions/${questID}` });
  useEffect(() => {
    if(data){
      setJustification(data.explanation);
      setExplanationLink(data.link);
    }
  }, [data]);
  
  return (
    <div className={styles.answerJustificationPage}>
      <Navbar />
      <div className={styles.answerExplanationWrapper}>
        <p className={styles.answerExplanation}>{justification}</p>
        <a
          className={styles.answerExplanationLink}
          href={explanationLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Czytaj więcej
        </a>
        <Link className={styles.nextQuestion} to={"/quiz"}>
          <button className={styles.nextQuestionButton}>Wróć do pytania</button>
        </Link>
      </div>
    </div>
  );
}
