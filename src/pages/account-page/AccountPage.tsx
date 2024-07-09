import { Route, Routes } from "react-router-dom";
import AccountSidebar from "../../components/account-sidebar/AccountSidebar";
import DeleteAccountPage from "../delete-account-page/DeleteAccountPage";
import MyPollsPage from "../my-polls-page/MyPollsPage";
import styles from "./accountPage.module.css";

const AccountPage = () => {
	return (
		<div className={styles.pageContainer}>
			<AccountSidebar />
			<div className={styles.content}>
				<Routes>
					<Route path="" element={<MyPollsPage />} />
					<Route path="delete" element={<DeleteAccountPage />} />
				</Routes>
			</div>
		</div>
	);
};

export default AccountPage;
