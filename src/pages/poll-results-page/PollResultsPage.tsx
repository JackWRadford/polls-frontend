import { useParams } from "react-router-dom";
import PollResultsCard from "../../components/poll-results-card/PollResultsCard";
import styles from "./pollResultsPage.module.css";

const PollResultsPage = () => {
	const { id } = useParams();

	return (
		<div className={styles.container}>
			{id && <PollResultsCard pollId={id} />}
		</div>
	);
};

export default PollResultsPage;
