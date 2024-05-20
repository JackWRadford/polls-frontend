import Card from "../common/card/Card";
import { useMemo, useState } from "react";
import styles from "./pollVoteCard.module.css";
import RadioSelect from "../common/radio-select/RadioSelect";
import Button from "../common/button/Button";
import LinkButton from "../common/link/LinkButton";
import { Poll } from "../../models/poll";
import Dialog from "../dialog/Dialog";

interface PollVoteCardProps {
	poll?: Poll;
}

const PollVoteCard = ({ poll }: PollVoteCardProps) => {
	const [selectedOptionId, setSelectedOptionId] = useState<string>();
	const [presentingDialog, setPresentingDialog] = useState(false);

	const submitIsDisabled = useMemo((): boolean => {
		return selectedOptionId === undefined;
	}, [selectedOptionId]);

	const castVote = async () => {
		const id = poll?._id;
		if (!id) {
			return;
		}
		const body = JSON.stringify({
			pollId: id,
			optionId: selectedOptionId,
		});

		try {
			const result = await fetch(
				`http://localhost:3000/polls/${id}/vote`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body,
				}
			);
			if (!result.ok) {
				throw new Error("Failed to vote in poll");
			}
			setPresentingDialog(true);
		} catch (error) {
			console.error("Error while submitting vote", error);
		}
	};

	const handleDialogClose = () => {
		setSelectedOptionId(undefined);
		setPresentingDialog(false);
	};

	return (
		<Card className={styles.container}>
			<Dialog
				title={"Vote Successful"}
				message={"Your vote as been counted!"}
				isOpen={presentingDialog}
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
						/>
					</div>
				</>
			)}
		</Card>
	);
};

export default PollVoteCard;
