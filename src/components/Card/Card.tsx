import styles from "./Card.module.scss";

export function Card({ data, title }: any) {
  return (
    <div className={styles.card}>
      {title}
      {data}
    </div>
  );
}
