import { useParams } from "react-router-dom";
import PollVoteCard from "../../components/poll-vote-card/PollVoteCard";
import styles from "./pollVotePage.module.css";
import { useEffect, useMemo, useState } from "react";
import ShareCard from "../../components/share-card/ShareCard";
import { baseUrl } from "../../constants";
import CardLoadingIndicator from "../../components/common/card-loading-indicator/CardLoadingIndicator";
import Card from "../../components/common/card/Card";
import { Helmet } from "react-helmet";
import { Poll } from "../../types/pollTypes";

const PollVotePage = () => {
	const { id } = useParams();
	const [poll, setPoll] = useState<Poll>();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchPoll = async () => {
			try {
				setIsLoading(true);
				const result = await fetch(`${baseUrl}/polls/${id}`, {
					method: "GET",
				});
				if (!result.ok) {
					console.error("Error while fetching poll.");
				} else {
					const data = await result.json();
					setPoll(data as Poll);
				}
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				console.error("Error while fetching poll.", error);
			}
		};

		fetchPoll();
	}, [id]);

	const documentTitle = useMemo(
		() => `${poll?.title ?? "Poll Not Found"} - Vote - Poll Maker`,
		[poll?.title]
	);

	return (
		<div className={styles.container}>
			<Helmet>
				<title>{documentTitle}</title>
			</Helmet>
			{!isLoading && poll && (
				<>
					<PollVoteCard poll={poll} />
					<ShareCard label={"Share the poll with this URL!"} />
				</>
			)}
			{isLoading && <CardLoadingIndicator />}
			{!isLoading && !poll && (
				<Card>
					<p>Poll Not Found</p>
				</Card>
			)}
		</div>
	);
};

export default PollVotePage;
