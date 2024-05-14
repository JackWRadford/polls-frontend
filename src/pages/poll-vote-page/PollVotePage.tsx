import PollVoteCard from "../../components/poll-vote-card/PollVoteCard";
import styles from "./pollVotePage.module.css";

const PollVotePage = () => {
	return (
		<div className={styles.container}>
			<PollVoteCard />
		</div>
	);
};

export default PollVotePage;
