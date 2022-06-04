import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { useApiSend } from "../../hooks/useApi";
import { SCORES_ENDPOINT } from "../../urls/api";
import styles from "./GameOver.module.scss";

interface GameOverProps {
  score: number;
}

function GameOver({ score }: GameOverProps) {
  const [name, setName] = useState<string>("");
  const [disabled, setDiseabled] = useState<boolean>(true);

  let navigate = useNavigate();

  const { mutate: apiSend, isSuccess } = useApiSend();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDiseabled(true);
    setName("");

    const payload = {
      username: name,
      score: score,
    };
    apiSend({ path: SCORES_ENDPOINT, data: payload });
    isSuccess && navigate("/top_scores");
  };

  return (
    <div className={styles.GameOver}>
      <Navbar />

      <div className={styles.squereScore}>
        <h3 className={styles.title}>Your Score {score}/10</h3>
        <p className={styles.link}>
          Link to the websites how to avoid fake news
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="name">
            Podaj swoje imię:{" "}
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setDiseabled(false);
              setName(event.target.value);
            }}
          />
          <button
            disabled={disabled}
            type="submit"
            style={{ cursor: `${disabled ? "default" : "pointer"}` }}
            className={styles.button}
          >
            Zapisz swój wynik
          </button>
        </form>
      </div>
    </div>
  );
}

export default GameOver;
