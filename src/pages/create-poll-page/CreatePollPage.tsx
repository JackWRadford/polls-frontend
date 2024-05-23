import CreatePollCard from "../../components/create-poll-card/CreatePollCard";
import styles from "./createPollPage.module.css";
import { useEffect } from "react";

const CreatePollPage = () => {
	useEffect(() => {
		document.title = "Poll Maker - Create Poll";
	}, []);

	return (
		<div className={styles.container}>
			<CreatePollCard />
		</div>
	);
};

export default CreatePollPage;
