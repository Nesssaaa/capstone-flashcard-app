import styles from "./CSSLoadingSpinner.module.css";

export default function CSSLoadingSpinner() {
  return (
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
