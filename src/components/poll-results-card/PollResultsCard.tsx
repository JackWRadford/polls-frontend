import { useMemo } from "react";
import Card from "../common/card/Card";
import styles from "./pollResultsCard.module.css";
import ProgressBar from "../common/progress-bar/ProgressBar";
import LinkButton from "../common/link/LinkButton";
import { PollResultResponse } from "../../pages/poll-results-page/PollResultsPage";

interface PollResultsCardProps {
	pollResults: PollResultResponse;
}

const PollResultsCard = ({ pollResults }: PollResultsCardProps) => {
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
			<div className={styles.footer}>
				<p>{`${pollResults?.totalVoteCount} ${voteCountLabel}`}</p>
				<LinkButton
					to={`/${pollResults.poll._id}`}
					label="View Poll"
					level="secondary"
				/>
			</div>
		</Card>
	);
};

export default PollResultsCard;
