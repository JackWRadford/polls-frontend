import { useEffect, useState } from "react";
import styles from "./examplePolls.module.css";
import { Poll } from "../../../models/poll";
import PollVoteCard from "../../poll-vote-card/PollVoteCard";
import TitleSubtitle from "../../common/title-subtitle/TitleSubtitle";
import { baseUrl } from "../../../constants";

type ExamplePollsResponse = {
	polls: Poll[];
	thereAreMorePolls: boolean;
};

const ExamplePolls = () => {
	const [polls, setPolls] = useState<Poll[]>();

	useEffect(() => {
		const fetchPolls = async () => {
			try {
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
			} catch (error) {
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
			<div className={styles.polls}>
				{polls?.map((poll) => (
					<div key={poll._id} className={styles.pollContainer}>
						<PollVoteCard poll={poll} />
					</div>
				))}
			</div>
		</div>
	);
};

export default ExamplePolls;
