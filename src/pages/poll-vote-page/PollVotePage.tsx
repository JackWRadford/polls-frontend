import { useParams } from "react-router-dom";
import PollVoteCard from "../../components/poll-vote-card/PollVoteCard";
import styles from "./pollVotePage.module.css";
import { useEffect, useState } from "react";
import { Poll } from "../../models/poll";
import ShareCard from "../../components/share-card/ShareCard";
import { baseUrl } from "../../constants";

const PollVotePage = () => {
	const { id } = useParams();
	const [poll, setPoll] = useState<Poll>();

	useEffect(() => {
		const fetchPoll = async () => {
			try {
				const result = await fetch(`${baseUrl}/polls/${id}`, {
					method: "GET",
				});
				if (!result.ok) {
					console.error("Error while fetching poll.");
				} else {
					const data = await result.json();
					setPoll(data as Poll);
				}
			} catch (error) {
				console.error("Error while fetching poll.", error);
			}
		};

		fetchPoll();
	}, [id]);

	return (
		<div className={styles.container}>
			<PollVoteCard poll={poll} />
			<ShareCard label={"Share the poll with this URL!"} />
		</div>
	);
};

export default PollVotePage;
