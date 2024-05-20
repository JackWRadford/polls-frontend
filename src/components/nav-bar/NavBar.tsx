import LinkButton from "../common/link/LinkButton";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className={styles.navWrapper}>
			<nav className={styles.nav}>
				<Link to={"/"} className={styles.homeLink}>
					PollMaker
				</Link>
				<LinkButton
					to={"/create-poll"}
					label="Create"
					level="secondary"
				/>
			</nav>
		</div>
	);
};

export default NavBar;
