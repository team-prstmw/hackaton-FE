import { FormEvent, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./GameOver.module.scss";
import { SkillBar } from "../../components/SkillBar/SkillBar";

interface GameOverProps {
  score: number;
}

function GameOver({ score }: GameOverProps) {
  const [name, setName] = useState<string>("");
  console.log(score);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        <div>
          <SkillBar category="Polityka" level={50} />
          <SkillBar category="Polityka" level={50} />
          <SkillBar category="Polityka" level={50} />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="name">
            Podaj swoje imię:{" "}
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button type="submit" className={styles.button}>
            Save your score
          </button>
        </form>
      </div>
    </div>
  );
}

export default GameOver;
