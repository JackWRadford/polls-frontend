import { Link } from "react-router-dom";
import styles from "./homeLink.module.css";

const HomeLink = () => {
	return (
		<Link to={"/"} className={styles.homeLink}>
			PollMaker
		</Link>
	);
};

export default HomeLink;
