import { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { IoIosMenu } from "react-icons/io";
import { useLocation } from "react-router-dom";
import Button from "../../common/button/Button";
import Card from "../../common/card/Card";
import HomeLink from "../home-link/HomeLink";
import NavButtons from "../NavButtons";
import styles from "./navMenu.module.css";

const NavMenu = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => {
		setMenuIsOpen((prev) => !prev);
	};

	// Close the menu on navigation
	useEffect(() => {
		setMenuIsOpen(false);
	}, [location]);

	useEffect(() => {
		/** Close the menu for larger screens. */
		const handleResize = () => {
			if (window.innerWidth > 600) {
				setMenuIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		// Check the initial screen size when the component mounts.
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		// Toggle body overflow when menu is open/closed
		if (menuIsOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		// Reset the overflow style when component unmounts
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [menuIsOpen]);

	return (
		<>
			<Button
				aria-label={`${menuIsOpen ? "Close" : "Open"} navigation menu`}
				onClick={toggleMenu}
				level="tertiary"
				className={styles.menuButton}
			>
				<IoIosMenu size={28} />
			</Button>
			{menuIsOpen && (
				<>
					<div className={styles.menuBackdrop} onClick={toggleMenu} />
					<Card className={styles.menuContainer}>
						<div className={styles.menuHeader}>
							<HomeLink />
							<Button
								onClick={toggleMenu}
								level="tertiary"
								className={styles.menuButton}
							>
								<HiXMark size={28} />
							</Button>
						</div>
						<NavButtons />
					</Card>
				</>
			)}
		</>
	);
};

export default NavMenu;
