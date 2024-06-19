import { useEffect, useState } from "react";
import styles from "./examplePolls.module.css";

import PollVoteCard from "../../poll-vote-card/PollVoteCard";
import TitleSubtitle from "../../common/title-subtitle/TitleSubtitle";
import { baseUrl } from "../../../constants";
import CardLoadingIndicator from "../../common/card-loading-indicator/CardLoadingIndicator";
import Card from "../../common/card/Card";
import { Poll } from "../../../types/pollTypes";

type ExamplePollsResponse = {
	polls: Poll[];
	thereAreMorePolls: boolean;
};

const ExamplePolls = () => {
	const [polls, setPolls] = useState<Poll[]>();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchPolls = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(
					`${baseUrl}/polls/examples?page=1&pageSize=6`,
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

	return (
		<div className={styles.container}>
			<TitleSubtitle
				title={"Example Polls"}
				subtitle={"Take a look at these example polls!"}
			/>
			{!isLoading && polls && (
				<div className={styles.polls}>
					{polls?.map((poll) => (
						<div key={poll._id} className={styles.pollContainer}>
							<PollVoteCard poll={poll} />
						</div>
					))}
				</div>
			)}
			{isLoading && <CardLoadingIndicator />}
			{!isLoading && !polls && (
				<Card>
					<p>No Example Polls Found</p>
				</Card>
			)}
		</div>
	);
};

export default ExamplePolls;
