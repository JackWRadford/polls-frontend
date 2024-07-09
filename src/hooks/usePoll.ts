import { useEffect, useState } from "react";
import { apiUrl } from "../constants";
import { Poll } from "../types/pollTypes";

export const usePoll = (pollId?: string) => {
	const [poll, setPoll] = useState<Poll>();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error>();

	useEffect(() => {
		const fetchPoll = async () => {
			try {
				setIsLoading(true);
				const result = await fetch(`${apiUrl}/api/polls/${pollId}`, {
					method: "GET",
				});
				if (!result.ok) {
					throw new Error("Error while fetching poll.");
				}
				const data = await result.json();
				setPoll(data as Poll);
			} catch (error) {
				setError(error as Error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPoll();
	}, [pollId]);

	return { poll, isLoading, error };
};
