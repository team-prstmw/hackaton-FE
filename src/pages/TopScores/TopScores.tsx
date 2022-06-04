import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { TopScoresTable } from "../../components/TopScoresTable/TopScoresTable";

import styles from "./TopScores.module.scss";

const data = (
  <div className={styles.glassPadding}>
    <h3 className={styles.hofTitle}>Hall of Fame</h3>
    <div className={styles.scoresTable}>
      <TopScoresTable />
    </div>
  </div>
);

export function TopScores() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Card data={data} />
      </div>
    </div>
  );
}
