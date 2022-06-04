import styles from "./Select.module.scss";

const Select = () => {
  const OPTIONS = ["Wiadomości", "Pandemia"];

  return (
    <select className={styles.select}>
      {OPTIONS.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};

export default Select;
