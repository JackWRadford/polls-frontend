import LinkButton from "../common/link/LinkButton";
import styles from "./accountSidebar.module.css";

interface SidebarLinks {
	to: string;
	label: string;
}

const sidebarButtons: SidebarLinks[] = [
	{
		to: "",
		label: "Polls",
	},
	{
		to: "settings",
		label: "Settings",
	},
];

const AccountSidebar = () => {
	return (
		<div className={styles.sideBar}>
			{sidebarButtons.map((sidebarButton, index) => (
				<LinkButton
					key={index}
					className={styles.link}
					{...sidebarButton}
					level="secondary"
				/>
			))}
		</div>
	);
};

export default AccountSidebar;
