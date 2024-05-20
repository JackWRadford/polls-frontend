import { useParams } from "react-router-dom";
import PollResultsCard from "../../components/poll-results-card/PollResultsCard";
import styles from "./pollResultsPage.module.css";
import ShareCard from "../../components/share-card/ShareCard";

const PollResultsPage = () => {
	const { id } = useParams();

	return (
		<div className={styles.container}>
			{id && <PollResultsCard pollId={id} />}
			<ShareCard label={"Share these results with this URL!"} />
		</div>
	);
};

export default PollResultsPage;
