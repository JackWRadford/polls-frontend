import Card from "../common/card/Card";
import { useMemo, useState } from "react";
import styles from "./pollVoteCard.module.css";
import RadioSelect from "../common/radio-select/RadioSelect";
import Button from "../common/button/Button";
import LinkButton from "../common/link/LinkButton";
import { Poll } from "../../models/poll";
import Dialog from "../dialog/Dialog";
import { baseUrl } from "../../constants";

interface PollVoteCardProps {
	poll?: Poll;
}

const PollVoteCard = ({ poll }: PollVoteCardProps) => {
	const [selectedOptionId, setSelectedOptionId] = useState<string>();
	const [isLoading, setIsLoading] = useState(false);
	const [dialog, setDialog] = useState({
		isPresented: false,
		title: "",
		message: "",
	});

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
			setIsLoading(true);
			const response = await fetch(`${baseUrl}/polls/${id}/vote`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body,
			});
			const responseData = await response.json();
			if (!response.ok) {
				throw new Error(
					responseData.message || "Failed to vote in poll"
				);
			}
			setIsLoading(false);
			setDialog({
				isPresented: true,
				title: "Vote Successful",
				message: "Your vote as been counted!",
			});
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setIsLoading(false);
			setDialog({
				isPresented: true,
				title: "Vote Failed",
				message:
					error.message ||
					"An error occurred while submitting your vote.",
			});
		}
	};

	const handleDialogClose = () => {
		setSelectedOptionId(undefined);
		setDialog({
			isPresented: false,
			title: "",
			message: "",
		});
	};

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
