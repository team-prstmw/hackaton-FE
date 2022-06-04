import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./HomePage.module.scss";
import { Card } from "../../components/Card/Card";

const data = (
  <div>
    <h2>Czym jest dezinformacja</h2>
    <p className={styles.missinfText}>Dezinformacją możemy określi</p>
  </div>
);

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <Navbar />

      <h1 className={styles.fnn}>FNN</h1>
      <p className={styles.fnnDesc}>Fake News Network</p>

      <div className={styles.missinf}>
        <Card data={data} />
      </div>
    </div>
  );
}
