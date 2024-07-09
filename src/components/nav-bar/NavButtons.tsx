import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Button from "../common/button/Button";
import LinkButton from "../common/link/LinkButton";

const NavButtons = () => {
	const authContext = useAuthContext();
	const { logout } = useLogout();
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const userIsLoggedIn = !!authContext.user;
	const showAccountSidebarLinks = width <= 740;

	return (
		<>
			<LinkButton
				to={"/create-poll"}
				label="Create Poll"
				level="tertiary"
			/>
			{userIsLoggedIn ? (
				<>
					{showAccountSidebarLinks && (
						<LinkButton
							to={"/account/my-polls"}
							label="My Polls"
							level="tertiary"
						/>
					)}
					<Button onClick={logout} label="Logout" level="secondary" />
					{showAccountSidebarLinks && (
						<LinkButton
							to={"/account/delete"}
							label="Delete Account"
							level="secondary"
						/>
					)}
					{!showAccountSidebarLinks && (
						<LinkButton to={"/account/my-polls"} label="Account" />
					)}
				</>
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
