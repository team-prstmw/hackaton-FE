import { useEffect, useState } from "react";
import { getById } from "../../utils/read";
import styles from "./AnswerJustification.module.scss";

export function AnswerJustification() {
// export function AnswerJustification(questionId: number) {
  // const [explanation, setExplanation] = useState("");
  // const [explanationLink, setExplanationLink] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const justification = await getById(questionId);
  //     setExplanation(justification.explanationDescription);
  //     setExplanationLink(justification.detailsLink);
  //   };
  // }, []);

  return (
    <>
      {/* <p className={styles.answerExplanation}>{explanation}</p>
      <a className={styles.answerExplanationLink} href={explanationLink}>
        Read More
      </a>
      <button className={styles.nextQuestionButton}>Next question</button> */}
      <p className={styles.answerExplanation}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores cupiditate magnam quos velit voluptate, eos enim quaerat sunt accusamus et accusantium? Iure quo tenetur excepturi iste fugiat vel ipsum.</p>
      <a className={styles.answerExplanationLink} href="wp.pl" target="_blank">
        Read More
      </a>
      <button className={styles.nextQuestionButton}>Next question</button>
    </>
  );
}
