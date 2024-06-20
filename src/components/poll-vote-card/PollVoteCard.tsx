import { useVoteInPoll } from "../../hooks/useVoteInPoll";
import { Poll } from "../../types/pollTypes";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import LinkButton from "../common/link/LinkButton";
import RadioSelect from "../common/radio-select/RadioSelect";
import Dialog from "../dialog/Dialog";
import styles from "./pollVoteCard.module.css";

interface PollVoteCardProps {
	poll?: Poll;
}

const PollVoteCard = ({ poll }: PollVoteCardProps) => {
	const {
		selectedOptionId,
		submitIsDisabled,
		isLoading,
		dialog,
		castVote,
		handleDialogClose,
		setSelectedOptionId,
	} = useVoteInPoll(poll?._id);

	return (
		<Card className={styles.container}>
			<Dialog
				title={dialog.title}
				message={dialog.message}
				isOpen={dialog.isPresented}
				onClose={handleDialogClose}
			/>
			{poll && (
				<>
					<h1>{poll.title}</h1>
					<p>Choose one:</p>
					{poll && (
						<RadioSelect
							options={poll.options}
							selectedOptionId={selectedOptionId}
							onSelect={(value) => setSelectedOptionId(value)}
						/>
					)}
					<div className={styles.footer}>
						<LinkButton
							to={`/${poll._id}/result`}
							label="Results"
							level="secondary"
						/>
						<Button
							label="Submit Vote"
							onClick={castVote}
							fitContent
							className={styles.action}
							disabled={submitIsDisabled}
							isLoading={isLoading}
						/>
					</div>
				</>
			)}
		</Card>
	);
};

export default PollVoteCard;
