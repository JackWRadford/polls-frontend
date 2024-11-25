import styles from "./loadingIndicator.module.css";

const LoadingIndicator = () => {
  return (
    <div className={styles.loadingIndicator}>
      <div className={styles.spinner} />
    </div>
  );
};

export default LoadingIndicator;
