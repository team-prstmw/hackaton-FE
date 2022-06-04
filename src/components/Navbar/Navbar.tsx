import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      {window.location.hostname === "/" ? (
        <div className={styles.navLogo}>
          <p className={styles.navFnn}>FNN</p>
          <p className={styles.navFnnDesc}>Fake News Network</p>
        </div>
      ) : null}
      <a className={styles.navLinks} href="/quiz">
        Play
      </a>
      <a className={styles.navLinks} href="">
        Rules
      </a>
      <a className={styles.navLinks} href="">
        Top Scores
      </a>
      <a className={styles.navLinks} href="">
        Add question
      </a>
      <a className={styles.navLinks} href="">
        Exit
      </a>
    </div>
  );
}
