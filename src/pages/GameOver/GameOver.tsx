import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { useApiSend } from "../../hooks/useApi";
import { SCORES_ENDPOINT } from "../../urls/api";
import styles from "./GameOver.module.scss";
import { SkillBar } from "../../components/SkillBar/SkillBar";

interface GameOverProps {
  score: number;
  countTask: number;
}

function GameOver({ score, countTask }: GameOverProps) {
  const [name, setName] = useState<string>("");
  const [disabled, setDiseabled] = useState<boolean>(true);

  const navigate = useNavigate();

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
  };

  useEffect(() => {
    isSuccess && navigate("/top_scores");
  }, [navigate, isSuccess]);

  return (
    <div className={styles.GameOver}>
      <Navbar />

      <div className={styles.squereScore}>
        <h3 className={styles.title}>Wynik {score}/{countTask}</h3>
        <p className={styles.link}>
          <a
            href="https://www.gov.pl/web/baza-wiedzy/rozpoznawanie-nieprawdziwych-informacji"
            target="_blank"
            rel="noreferrer"
          >
            Rozpoznawanie nieprawdziwych informacji
          </a>
        </p>

        <div>
          <SkillBar category="CodersCamp" level={(score / 10) * 100} />
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
