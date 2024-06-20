import { PollResultResponse } from "../../types/apiTypes";
import Card from "../common/card/Card";
import LinkButton from "../common/link/LinkButton";
import ProgressBar from "../common/progress-bar/ProgressBar";
import styles from "./pollResultsCard.module.css";

interface PollResultsCardProps {
	pollResults: PollResultResponse;
}

const PollResultsCard = ({ pollResults }: PollResultsCardProps) => {
	const { poll, pollResultsData, totalVoteCount } = pollResults;

	const getVoteCountLabel = (voteCount: number): string => {
		return voteCount === 1 ? "Vote" : "Votes";
	};

	const voteCountString = `${totalVoteCount} ${getVoteCountLabel(
		totalVoteCount
	)}`;

	return (
		<Card className={styles.container}>
			<h1>{poll.title}</h1>
			<ul>
				{pollResultsData
					.sort((a, b) => b.count - a.count)
					.map(({ optionTitle, count, percentage }, index) => {
						return (
							<li key={index}>
								<div className={styles.itemLabels}>
									<p>{optionTitle}</p>
									<p>{`${percentage}% (${count} ${getVoteCountLabel(
										count
									)})`}</p>
								</div>
								<ProgressBar
									value={percentage}
									ariaLabel={`${optionTitle} has ${percentage}% of the votes.`}
								/>
							</li>
						);
					})}
			</ul>
			<div className={styles.footer}>
				<p>{voteCountString}</p>
				<LinkButton
					to={`/${poll._id}`}
					label="View Poll"
					level="secondary"
				/>
			</div>
		</Card>
	);
};

export default PollResultsCard;
