import styles from "./deleteAccountPage.module.css";
import Button from "../../components/common/button/Button";
import Card from "../../components/common/card/Card";
import Input from "../../components/common/input/Input";
import { useDeleteAccount } from "../../hooks/useDeleteAccount";

const DeleteAccountPage = () => {
	const { isLoading, password, setPassword, deleteAccount } =
		useDeleteAccount();
	return (
		<div>
			<h1>Delete Account</h1>

			<Card className={styles.card}>
				<p>
					All polls and data will be deleted and cannot be recovered.
				</p>
				<form>
					<Input
						type="password"
						placeholder={"Enter Password"}
						value={password}
						onChange={setPassword}
					/>
					<Button
						onClick={deleteAccount}
						label="Delete Account"
						isLoading={isLoading}
						disabled={password.length < 1}
					/>
				</form>
			</Card>
		</div>
	);
};

export default DeleteAccountPage;
