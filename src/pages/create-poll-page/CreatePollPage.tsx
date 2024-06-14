import TitleSubtitle from "../../components/common/title-subtitle/TitleSubtitle";
import CreatePollCard from "../../components/create-poll-card/CreatePollCard";
import styles from "./createPollPage.module.css";
import { useEffect } from "react";

const CreatePollPage = () => {
	useEffect(() => {
		document.title = "Poll Maker - Create Poll";
	}, []);

	return (
		<div className={styles.container}>
			<TitleSubtitle
				title="Create a poll now!"
				subtitle="Design engaging questions and collect valuable insights"
				titleElementType="h1"
				className={styles.title}
			/>
			<CreatePollCard />
		</div>
	);
};

export default CreatePollPage;
