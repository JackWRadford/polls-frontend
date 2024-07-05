import LinkButton from "../common/link/LinkButton";
import HomeLink from "./home-link/HomeLink";
import NavMenu from "./nav-menu/NavMenu";
import styles from "./navbar.module.css";

const NavBar = () => {
	return (
		<div className={styles.navWrapper}>
			<nav className={styles.nav}>
				<HomeLink />
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
				<NavMenu />
			</nav>
		</div>
	);
};

export default NavBar;
