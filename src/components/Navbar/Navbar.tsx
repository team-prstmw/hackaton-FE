import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">Graj</Link>
      <Link to="">Zasady</Link>
      <Link to="">Najlepsze wyniki</Link>
      <Link to="">Dodaj pytanie</Link>
      <a href="https://www.tvp.info/">Wyjdź</a>
    </div>
  );
}
