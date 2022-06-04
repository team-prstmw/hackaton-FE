import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./GameOver.module.scss";

interface GameOverProps {
  score: number;
}

function GameOver({ score }: GameOverProps) {
  const [name, setName] = useState<string>("");
  const [disabled, setDiseabled] = useState<boolean>(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDiseabled(true);
    setName("");
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
          <Link to="/top_scores">
            <button disabled={disabled} type="submit" style={{ cursor: `${disabled ? 'default' : 'pointer'}` }} className={styles.button}>
              Save your score
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default GameOver;
