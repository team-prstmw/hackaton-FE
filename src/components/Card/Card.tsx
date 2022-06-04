import styles from "./Card.module.scss";

export function Card({ data }: any) {
  return <div className={styles.card}>{data}</div>;
}
