import Card from "../card/Card";
import styles from "./errorPage.module.css";

interface ErrorPageProps {
	title: string;
	description: string;
}

const ErrorPage = ({ title, description }: ErrorPageProps) => {
	return (
		<div className={styles.container}>
			<Card className={styles.card}>
				<h2>{title}</h2>
				<p>{description}</p>
			</Card>
		</div>
	);
};

export default ErrorPage;
