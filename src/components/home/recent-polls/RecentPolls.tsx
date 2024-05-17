import { useEffect, useState } from "react";
import styles from "./recentPolls.module.css";
import { Poll } from "../../../models/poll";

const RecentPolls = () => {
	const [page, setPage] = useState(1);
	const [polls, setPolls] = useState<Poll[]>();

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
					const data = await response.json();
					console.log(data);
					setPolls(data as Poll[]);
				}
			} catch (error) {
				console.error("Error while fetching polls: ", error);
			}
		};

		fetchPolls();
	}, [page]);

	return <div className={styles.container}></div>;
};

export default RecentPolls;
