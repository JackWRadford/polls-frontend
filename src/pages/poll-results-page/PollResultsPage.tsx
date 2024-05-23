import { useParams } from "react-router-dom";
import PollResultsCard from "../../components/poll-results-card/PollResultsCard";
import styles from "./pollResultsPage.module.css";
import ShareCard from "../../components/share-card/ShareCard";
import { Poll } from "../../models/poll";
import { useEffect, useState } from "react";
import { baseUrl } from "../../constants";
import CardLoadingIndicator from "../../components/common/card-loading-indicator/CardLoadingIndicator";

export type PollResultResponse = {
	poll: Poll;
	pollResultsData: {
		optionTitle: string;
		count: number;
		percentage: number;
	}[];
	totalVoteCount: number;
};

const PollResultsPage = () => {
	const { id: pollId } = useParams();
	const [pollResults, setPollResults] = useState<PollResultResponse>();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchPollResultsData = async () => {
			try {
				setIsLoading(true);
				const result = await fetch(
					`${baseUrl}/polls/${pollId}/results`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				if (!result) {
					throw new Error();
				} else {
					const resultData = await result.json();
					setPollResults(resultData);
				}
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				console.error("Error while fetching results.", error);
			}
		};

		fetchPollResultsData();
	}, [pollId]);

	return (
		<div className={styles.container}>
			{!isLoading && pollResults && (
				<>
					<PollResultsCard pollResults={pollResults} />
					<ShareCard label={"Share these results with this URL!"} />
				</>
			)}
			{isLoading && <CardLoadingIndicator />}
		</div>
	);
};

export default PollResultsPage;
