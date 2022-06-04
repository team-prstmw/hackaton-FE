import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./HomePage.module.scss";
import { Card } from "../../components/Card/Card";
import { Gradient } from "../../vendor/gradient";
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  });

  return (
    <div className={styles.homePage}>
      <div className={styles.home__canvas}>
        <canvas
          id="gradient-canvas"
          className={styles.gradient_canvas}
          data-transition-in
        />
      </div>
      <Navbar />
      <h1 className={styles.fnn}>FNN</h1>
      <p className={styles.fnnDesc}>Fake News Network</p>
      <div className={styles.missinf}>
        <Card />
      </div>
    </div>
  );
}
