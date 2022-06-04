import { useState } from "react";

import { Link } from "react-router-dom";
import { NEW_QUESTION_PAGE } from "../../urls/frontend";

import styles from "./Navbar.module.scss";

function refreshPage() {
  window.location.reload();
}

export function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.navbar}>
      {window.location.pathname !== "/" ? (
        <Link to="/" className={styles.noUnderline}>
          <div className={styles.navLogo}>
            <p className={styles.navFnn}>FNN</p>
            <p className={styles.navFnnDesc}>Fake News Network</p>
          </div>
        </Link>
      ) : null}

      <div
        className={
          isNavExpanded
            ? styles.navLinksContainer_expanded
            : styles.navLinksContainer
        }
      >
        <Link className={styles.navLinks} to="/quiz">
          Graj
        </Link>
        <Link className={styles.navLinks} to="/rules">
          Zasady
        </Link>
        <Link className={styles.navLinks} to="/top_scores">
          Najlepsze wyniki
        </Link>
        <Link className={styles.navLinks} to={NEW_QUESTION_PAGE}>
          Dodaj pytanie
        </Link>
        <a
          className={styles.navLinks}
          href="https://www.tvp.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wyjdź
        </a>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
