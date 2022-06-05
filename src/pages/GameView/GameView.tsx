import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./GameView.module.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import GameOver from "../GameOver/GameOver";
import { useApiGet } from "../../hooks/useApi";

interface GameViewProps{
  score: number;
  setScore: Dispatch<SetStateAction<number>>
  questID: number;
  setQuestId: Dispatch<SetStateAction<number>>
}

type questionProps = {
  category: string;
  content: string;
  explanation: string;
  link: string;
  answers: {
    content: string;
    correct: boolean;
  }[]
}

function GameView({score, setScore, questID, setQuestId}: GameViewProps) {
  const [questions, setQuestions] = useState<questionProps[]>([])
  const { data, isFetched } = useApiGet({ path: `questions` });

  useEffect(() => {

    if(data) {
      const fetchedQuest = data.data
      const shuffled = fetchedQuest.sort(() => 0.5 - Math.random());
      setQuestions(shuffled);
    }

  }, [isFetched]);


  const [answer, setAnswer] = useState<boolean | null>(null);
  const navigate = useNavigate();
 
  const handleClickTrue = () => {
    setQuestId(questID + 1);
    if (answer === true) {
      setScore(score + 1);
    }
    <GameOver score={score}/>
    if (questID === questions.length - 1) {
      navigate("/score")
    }
  };

  const handleClickFalse = () => {
    setQuestId(questID + 1);
    if (answer === false) {
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

      {questions.map(({content, answers}, id) => {
        if (questID === id && questID < 10) {
          if (answers[0].correct !== answer) {
            setAnswer(answers[0].correct);
          }
          return (
            <div key={id.toString()}>
              <div>
                <h1 className={styles.title}>Question {id + 1}</h1>
                <p className={styles.information}>{content}</p>
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
        if(questID > 9) {
          navigate("/score")
        }
      })}
    </div>
  );
}

export default GameView;
