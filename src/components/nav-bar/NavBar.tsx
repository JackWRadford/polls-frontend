import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className={styles.navWrapper}>
			<nav className={styles.nav}>
				<Link to={"/"} className={styles.homeLink}>
					PollMaker
				</Link>
				<Link to={"/create-poll"}>Create Poll</Link>
			</nav>
		</div>
	);
};

export default NavBar;
