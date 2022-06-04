import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./HomePage.module.scss";
import GameView from "../GameView/GameView";

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <GameView />
    </div>
  );
}
