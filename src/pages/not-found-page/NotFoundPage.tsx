import Card from "../../components/common/card/Card";
import styles from "./notFoundPage.module.css";

const NotFoundPage = () => {
	return (
		<div className={styles.container}>
			<Card className={styles.card}>
				<h2>Page Not Found</h2>
				<p>Check that the url is correct</p>
			</Card>
		</div>
	);
};

export default NotFoundPage;
