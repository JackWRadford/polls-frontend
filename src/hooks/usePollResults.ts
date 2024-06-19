import { useEffect, useState } from "react";
import { baseUrl } from "../constants";
import { PollResultResponse } from "../types/types";

export const usePollResults = (pollId?: string) => {
	const [pollResults, setPollResults] = useState<PollResultResponse>();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error>();

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
				if (!result.ok) {
					throw new Error("Failed to fetch poll results.");
				}
				const resultData = await result.json();
				setPollResults(resultData);
			} catch (error) {
				setError(error as Error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPollResultsData();
	}, [pollId]);

	return { pollResults, isLoading, error };
};
