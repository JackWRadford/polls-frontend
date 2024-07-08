import HomeLink from "./home-link/HomeLink";
import NavMenu from "./nav-menu/NavMenu";
import styles from "./navbar.module.css";
import NavButtons from "./NavButtons";

const NavBar = () => {
	return (
		<div className={styles.navWrapper}>
			<nav className={styles.nav}>
				<HomeLink />
				<div className={styles.trailingLinks}>
					<NavButtons />
				</div>
				<NavMenu />
			</nav>
		</div>
	);
};

export default NavBar;
