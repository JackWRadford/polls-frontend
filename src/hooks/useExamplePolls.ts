import { useEffect, useState } from "react";
import { apiUrl } from "../constants";
import { ExamplePollsResponse } from "../types/apiTypes";
import { Poll } from "../types/pollTypes";

export const useExamplePolls = () => {
	const [polls, setPolls] = useState<Poll[]>();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchPolls = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(
					`${apiUrl}/api/polls/examples?page=1&pageSize=6`,
					{
						method: "GET",
					}
				);
				if (!response.ok) {
					throw new Error();
				} else {
					const data =
						(await response.json()) as ExamplePollsResponse;

					setPolls(data.polls);
				}
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				console.error("Error while fetching polls: ", error);
			}
		};

		fetchPolls();
	}, []);

	return { polls, isLoading };
};
