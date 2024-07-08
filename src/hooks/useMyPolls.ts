import { useEffect, useState } from "react";
import { baseUrl } from "../constants";
import { MyPollsResponse } from "../types/apiTypes";
import { Poll } from "../types/pollTypes";

export const useMyPolls = () => {
	const [polls, setPolls] = useState<Poll[]>([]);
	const [thereAreMorePolls, setThereAreMorePolls] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const fetchMyPolls = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(
					`${baseUrl}/polls/my-polls?page=${page}`,
					{
						method: "GET",
						credentials: "include",
					}
				);

				if (!response.ok) {
					throw new Error("Bad Response");
				}

				const responseData = (await response.json()) as MyPollsResponse;

				console.log(responseData);

				if (page > 1) {
					setPolls((prev) => [...prev, ...responseData.polls]);
				} else {
					setPolls(responseData.polls);
				}
				setThereAreMorePolls(responseData.thereAreMorePolls);
			} catch (error) {
				console.error("Error while fetching user polls: ", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchMyPolls();
	}, [page]);

	const loadMorePolls = () => {
		if (thereAreMorePolls) {
			setPage((prev) => prev + 1);
		}
	};

	return { polls, isLoading, thereAreMorePolls, loadMorePolls };
};
