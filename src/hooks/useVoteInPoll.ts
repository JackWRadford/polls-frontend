import { useMemo, useState } from "react";
import { baseUrl } from "../constants";

export const useVoteInPoll = (pollId?: string) => {
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

	const handleDialogClose = () => {
		setSelectedOptionId(undefined);
		setDialog({
			isPresented: false,
			title: "",
			message: "",
		});
	};

	const castVote = async () => {
		if (!pollId) {
			return;
		}
		const body = JSON.stringify({
			pollId: pollId,
			optionId: selectedOptionId,
		});

		try {
			setIsLoading(true);
			const response = await fetch(`${baseUrl}/polls/${pollId}/vote`, {
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
			setDialog({
				isPresented: true,
				title: "Vote Successful",
				message: "Your vote as been counted!",
			});
		} catch (error) {
			setDialog({
				isPresented: true,
				title: "Vote Failed",
				message:
					(error as Error).message ||
					"An error occurred while submitting your vote.",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return {
		selectedOptionId,
		submitIsDisabled,
		isLoading,
		dialog,
		castVote,
		handleDialogClose,
		setSelectedOptionId,
	};
};
