import { useEffect, useState } from "react";
import styles from "./recentPolls.module.css";
import { Poll } from "../../../models/poll";
import PollVoteCard from "../../poll-vote-card/PollVoteCard";
import Button from "../../common/button/Button";

type PollsResponse = {
	polls: Poll[];
	thereAreMorePolls: boolean;
};

const RecentPolls = () => {
	const [page, setPage] = useState(1);
	const [polls, setPolls] = useState<Poll[]>();
	const [thereAreMorePolls, setThereAreMorePolls] = useState(false);

	useEffect(() => {
		const fetchPolls = async () => {
			try {
				const response = await fetch(
					`http://localhost:3000/polls?page=${page}`,
					{
						method: "GET",
					}
				);
				if (!response.ok) {
					throw new Error();
				} else {
					const data = (await response.json()) as PollsResponse;

					// Update the polls array. Adding the new polls if the page is not 1.
					setPolls((existingPolls) => {
						if (page === 1) {
							return data.polls;
						} else {
							return [...(existingPolls || []), ...data.polls];
						}
					});

					setThereAreMorePolls(data.thereAreMorePolls);
				}
			} catch (error) {
				console.error("Error while fetching polls: ", error);
			}
		};

		fetchPolls();
	}, [page]);

	const handleMorePolls = () => {
		setPage((prev) => (prev += 1));
	};

	return (
		<div className={styles.container}>
			<div className={styles.polls}>
				{polls?.map((poll) => (
					<PollVoteCard key={poll._id} poll={poll} />
				))}
			</div>
			{(thereAreMorePolls && (
				<Button label="More Polls" onClick={handleMorePolls} />
			)) || (
				<p className={styles.noMorePolls}>
					That's all the polls we have.
				</p>
			)}
		</div>
	);
};

export default RecentPolls;
