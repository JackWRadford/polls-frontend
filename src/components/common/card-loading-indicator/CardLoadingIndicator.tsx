import styles from "./cardLoadingIndicator.module.css";
import Card from "../card/Card";
import LoadingIndicator from "../loading-indicator/LoadingIndicator";

const CardLoadingIndicator = () => {
  return (
    <Card className={styles.card}>
      <LoadingIndicator />
    </Card>
  );
};

export default CardLoadingIndicator;
