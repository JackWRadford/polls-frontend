import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Button from "../common/button/Button";
import LinkButton from "../common/link/LinkButton";
import HomeLink from "./home-link/HomeLink";
import NavMenu from "./nav-menu/NavMenu";
import styles from "./navbar.module.css";

const NavBar = () => {
	const authContext = useAuthContext();
	const { logout } = useLogout();

	const userIsLoggedIn = !!authContext.user;

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
					{userIsLoggedIn ? (
						<Button
							onClick={logout}
							label="Logout"
							level="secondary"
						/>
					) : (
						<>
							<LinkButton
								to={"/login"}
								label="Log In"
								level="secondary"
							/>
							<LinkButton to={"/signup"} label="Sign Up" />
						</>
					)}
				</div>
				<NavMenu />
			</nav>
		</div>
	);
};

export default NavBar;
