import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<Link to={"/"} className={styles.homeLink}>
				PollMaker
			</Link>
			<Link to={"/create-poll"}>Create Poll</Link>
		</nav>
	);
};

export default NavBar;
