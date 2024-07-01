import { Helmet } from "react-helmet";
import Button from "../../components/common/button/Button";
import Card from "../../components/common/card/Card";
import ErrorMessage from "../../components/common/error-message/ErrorMessage";
import Input from "../../components/common/input/Input";
import { useLogin } from "../../hooks/useLogin";
import styles from "./loginPage.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		isLoading,
		loginIsDisabled,
		validationError,
		handleLogin,
	} = useLogin();

	return (
		<div className={styles.container}>
			<Helmet>
				<title>Poll Maker - Login</title>
			</Helmet>
			<Card className={styles.loginCard}>
				<h1 className={styles.title}>Login</h1>
				<form className={styles.form} onSubmit={handleLogin}>
					<Input
						type="email"
						placeholder="Email"
						value={email}
						onChange={setEmail}
					/>
					<Input
						type="password"
						placeholder="Password"
						value={password}
						onChange={setPassword}
					/>
					{validationError && (
						<ErrorMessage message={validationError} />
					)}
					<Button
						type="submit"
						className={styles.loginButton}
						label="Login"
						onClick={() => {}}
						isLoading={isLoading}
						disabled={loginIsDisabled}
					/>
				</form>
				<Link className={styles.loginPrompt} to="/signup">
					<span>Don't have an account?</span>
					<span className={styles.loginPromptLogin}> Sign Up</span>
				</Link>
			</Card>
		</div>
	);
};

export default LoginPage;
