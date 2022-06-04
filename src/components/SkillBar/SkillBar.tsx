//  @ts-nocheck
import { useEffect, useRef } from "react";
import styles from "./SkillBar.module.scss";

export function SkillBar({ category, level }: { category: string; level: number }) {
  const skillBar = useRef(null);

  function changeSkillBarColor() {
    if (skillBar && skillBar.current) {
      if (level < 20) {
        skillBar.current.style.backgroundColor = "red";
      } else if (level >= 20 && level < 40) {
        skillBar.current.style.backgroundColor = "#ff6a00";
      } else if (level >= 40 && level < 60) {
        skillBar.current.style.backgroundColor = "yellow";
      } else if (level >= 60 && level < 80) {
        skillBar.current.style.backgroundColor = "#aaff00";
      } else skillBar.current.style.backgroundColor = "green";
    }
  }

  useEffect(() => {
    changeSkillBarColor();
  });

  return (
    <div className={styles.skillBar}>
      <div className={styles.skillBarName}>{category.toUpperCase()}</div>
      <div ref={skillBar} className={styles.skillBarLevel}>
        {level + "%"}
      </div>
    </div>
  );
}
