import { Link } from "react-router-dom";
import LinkButton from "../common/link/LinkButton";
import styles from "./navbar.module.css";

const NavBar = () => {
	return (
		<div className={styles.navWrapper}>
			<nav className={styles.nav}>
				<Link to={"/"} className={styles.homeLink}>
					PollMaker
				</Link>
				<div className={styles.trailingLinks}>
					<LinkButton
						to={"/create-poll"}
						label="Create Poll"
						level="tertiary"
					/>
					<LinkButton
						to={"/login"}
						label="Log In"
						level="secondary"
					/>
					<LinkButton to={"/signup"} label="Sign Up" />
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
