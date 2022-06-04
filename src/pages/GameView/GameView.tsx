import { useState } from "react";
import styles from "./GameView.module.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import question from "../../question.json";

function GameView() {
  const questions = question.data;
  const [questID, setQuestId] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [answer, setAnswer] = useState<number | null>(null);

  const handleClickTrue = () => {
    setQuestId(questID + 1);
    if (answer === 1) {
      setScore(score + 1);
    }
  };

  const handleClickFalse = () => {
    setQuestId(questID + 1);
    if (answer === 0) {
      setScore(score + 1);
    }
  };

  return (
    <div className={styles.GameView}>
      <Navbar />
      <div>
        {questions.map((quest, id) => {
          console.log(questions.length);
          if (questID === id) {
            if (quest.type !== answer) {
              setAnswer(quest.type);
            }
            return (
              <div key={id.toString()}>
                <h1 className={styles.title}>Question {id + 1}</h1>
                <p className={styles.information}>{quest.question}</p>
              </div>
            );
          }
        })}
        <p className={styles.note}>
          True or Fake
        </p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttonTrue} onClick={handleClickTrue}>
          Prawda
        </button>
        <button className={styles.buttonFalse} onClick={handleClickFalse}>
          Fałsz
        </button>
      </div>
    </div>
  );
}

export default GameView;
