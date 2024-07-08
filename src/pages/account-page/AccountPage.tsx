import { Route, Routes } from "react-router-dom";
import AccountSidebar from "../../components/account-sidebar/AccountSidebar";
import MyPollsPage from "../my-polls-page/MyPollsPage";
import SettingsPage from "../settings-page/SettingsPage";
import styles from "./accountPage.module.css";

const AccountPage = () => {
	return (
		<div className={styles.pageContainer}>
			<AccountSidebar />
			<div className={styles.content}>
				<Routes>
					<Route path="" element={<MyPollsPage />} />
					<Route path="settings" element={<SettingsPage />} />
				</Routes>
			</div>
		</div>
	);
};

export default AccountPage;
