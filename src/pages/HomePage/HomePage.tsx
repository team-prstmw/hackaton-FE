import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./HomePage.module.scss";
import GameView from "../GameView/GameView";
import { Card } from "../../components/Card/Card";

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <Navbar />

      <h1 className={styles.fnn}>FNN</h1>
      <p className={styles.fnnDesc}>Fake News Network</p>

      <div className={styles.missinf}>
        <Card />
      </div>
    </div>
  );
}
