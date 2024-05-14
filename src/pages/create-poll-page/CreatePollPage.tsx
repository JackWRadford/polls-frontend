import CreatePollCard from "../../components/create-poll-card/CreatePollCard";
import styles from "./createPollPage.module.css";

const CreatePollPage = () => {
	return (
		<div className={styles.container}>
			<CreatePollCard />
		</div>
	);
};

export default CreatePollPage;
