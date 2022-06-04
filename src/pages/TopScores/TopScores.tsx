import { Card } from "../../components/Card/Card";
import { TopScoresTable } from "../../components/TopScoresTable/TopScoresTable";

import styles from "./TopScores.module.scss";

export function TopScores() {
  return (
    <div className={styles.container}>
      <Card title="Hall of Fame" data={<TopScoresTable />} />
    </div>
  );
}
