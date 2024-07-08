import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Button from "../common/button/Button";
import LinkButton from "../common/link/LinkButton";

const NavButtons = () => {
	const authContext = useAuthContext();
	const { logout } = useLogout();

	const userIsLoggedIn = !!authContext.user;

	return (
		<>
			<LinkButton
				to={"/create-poll"}
				label="Create Poll"
				level="tertiary"
			/>
			{userIsLoggedIn ? (
				<Button onClick={logout} label="Logout" level="secondary" />
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
		</>
	);
};

export default NavButtons;
