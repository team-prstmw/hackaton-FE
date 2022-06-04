import { Dispatch, SetStateAction, useState } from "react";
import styles from "./GameView.module.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import question from "../../question.json";
import { Link, useNavigate } from "react-router-dom";
import GameOver from "../GameOver/GameOver";

interface GameViewProps{
  score: number;
  setScore: Dispatch<SetStateAction<number>>
  questID: number;
  setQuestId: Dispatch<SetStateAction<number>>
}

function GameView({score, setScore, questID, setQuestId}: GameViewProps) {
  const questions = question.data;

  const [answer, setAnswer] = useState<number | null>(null);
  const navigate = useNavigate();
 
  const handleClickTrue = () => {
    setQuestId(questID + 1);
    if (answer === 1) {
      setScore(score + 1);
    }
    <GameOver score={score}/>
    if (questID === questions.length - 1) {
      navigate("/score")
    }
  };

  const handleClickFalse = () => {
    setQuestId(questID + 1);
    if (answer === 0) {
      setScore(score + 1);
    }
    if (questID === questions.length - 1) {
      <GameOver score={score}/>
      navigate("/score")
    }
  };

  return (
    <div className={styles.GameView}>
      <Navbar />

      {questions.map((quest, id) => {
        if (questID === id) {
          if (quest.type !== answer) {
            setAnswer(quest.type);
          }
          return (
            <div key={id.toString()}>
              <div>
                <h1 className={styles.title}>Question {id + 1}</h1>
                <p className={styles.information}>{quest.question}</p>
                <p className={styles.note}><Link to={'/answer_clarification'}>Wyjaśnienie</Link></p>
              </div>
              <div className={styles.buttons}>
                <button className={styles.buttonTrue} onClick={handleClickTrue}>
                  Prawda
                </button>
                <button
                  className={styles.buttonFalse}
                  onClick={handleClickFalse}
                >
                  Fałsz
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default GameView;
