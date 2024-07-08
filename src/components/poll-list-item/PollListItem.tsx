import styles from "./pollListItem.module.css";
import { Poll } from "../../types/pollTypes";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import { Link } from "react-router-dom";

const PollListItem = (poll: Poll) => {
	const { title, _id: pollId } = poll;
	return (
		<li>
			<Link to={`/${pollId}`}>
				<Card className={styles.container}>
					<p className={styles.title}>{title}</p>
					<Button
						onClick={() => {}}
						label="Delete"
						level="secondary"
					/>
				</Card>
			</Link>
		</li>
	);
};

export default PollListItem;
