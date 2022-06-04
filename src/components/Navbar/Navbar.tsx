import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <a href="">Play</a>
      <a href="">Rules</a>
      <a href="">Top Scores</a>
      <a href="">Add question</a>
      <a href="">Exit</a>
    </div>
  );
}
