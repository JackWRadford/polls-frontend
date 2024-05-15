import { useEffect, useMemo, useState } from "react";
import Card from "../common/card/Card";
import { Poll } from "../../models/poll";
import styles from "./pollResultsCard.module.css";
import ProgressBar from "../common/progress-bar/ProgressBar";

interface PollResultsCardProps {
	pollId: string;
}

type PollResultResponse = {
	poll: Poll;
	pollResultsData: {
		optionTitle: string;
		count: number;
		percentage: number;
	}[];
	totalVoteCount: number;
};

const PollResultsCard = ({ pollId }: PollResultsCardProps) => {
	const [pollResults, setPollResults] = useState<PollResultResponse>();

	useEffect(() => {
		const fetchPollResultsData = async () => {
			try {
				const result = await fetch(
					`http://localhost:3000/polls/${pollId}/results`,
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
			} catch (error) {
				console.error("Error while fetching results.", error);
			}
		};

		fetchPollResultsData();
	}, [pollId]);

	const voteCountLabel: string = useMemo(
		() => getVoteCountLabel(pollResults?.totalVoteCount ?? 0),
		[pollResults?.totalVoteCount]
	);

	function getVoteCountLabel(voteCount: number): string {
		return voteCount > 1 || voteCount === 0 ? "Votes" : "Vote";
	}

	return (
		<Card className={styles.container}>
			<h1>{pollResults?.poll.title}</h1>
			<ul>
				{pollResults?.pollResultsData
					.sort((a, b) => b.count - a.count)
					.map((optionResultData, index) => (
						<li key={index}>
							<div className={styles.itemLabels}>
								<p>{optionResultData.optionTitle}</p>
								<p>{`${optionResultData.percentage}% (${
									optionResultData.count
								} ${getVoteCountLabel(
									optionResultData.count
								)})`}</p>
							</div>
							<ProgressBar value={optionResultData.percentage} />
						</li>
					))}
			</ul>
			<p>{`${pollResults?.totalVoteCount} ${voteCountLabel}`}</p>
		</Card>
	);
};

export default PollResultsCard;
