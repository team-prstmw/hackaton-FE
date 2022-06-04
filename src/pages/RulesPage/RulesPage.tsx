import styles from "./RulesPage.module.scss";
import { Navbar } from "../../components/Navbar/Navbar";

export function RulesPage() {
  return (
    <div className={styles.rulesPage}>
      <Navbar />
      <div className={styles.rulesDescriptionContainer}>
        <p className={styles.rulesDescription}>
          Masz 10 pytań z różnych kategorii. Odpowiedz na jak najwięcej z nich i
          znajdź się wśród najlepszych.
        </p>
      </div>
    </div>
  );
}
