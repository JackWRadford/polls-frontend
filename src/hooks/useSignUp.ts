import { useState } from "react";
import { baseUrl } from "../constants";

export const useSignUp = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [signUpIsDisabled, setSignUpIsDisabled] = useState(true);
	const [validationError, setValidationError] = useState<string>("");

	const handleSignUp = async () => {
		// Validate username.
		if (!usernameIsValid(username)) {
			setValidationError("Please enter a username.");
			return;
		}

		// Validate email.
		if (!emailIsValid(email)) {
			setValidationError("Please enter a valid email address.");
			return;
		}

		// Validate password.
		if (!passwordIsValid(password, confirmPassword)) {
			setValidationError("Please enter matching passwords.");
			return;
		}

		const body = JSON.stringify({
			username: username.trim(),
			email: email.trim(),
			password: password.trim(),
		});

		try {
			setIsLoading(true);
			const response = await fetch(`${baseUrl}/auth/signup`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body,
			});

			// Check response
			if (!response.ok) {
				throw new Error("Failed to create user.");
			}
		} catch (error) {
			setIsLoading(false);
		} finally {
			setIsLoading(false);
		}
	};

	const usernameIsValid = (username: string): boolean => {
		return username.trim().length > 0;
	};

	const emailIsValid = (email: string): boolean => {
		return email.trim().includes("@");
	};

	const passwordIsValid = (
		password: string,
		confirmPassword: string
	): boolean => {
		const trimmedPassword = password.trim();
		return (
			trimmedPassword.length > 0 &&
			trimmedPassword === confirmPassword.trim()
		);
	};

	return {
		username,
		setUsername,
		email,
		setEmail,
		password,
		setPassword,
		confirmPassword,
		setConfirmPassword,
		isLoading,
		signUpIsDisabled,
		validationError,
		handleSignUp,
	};
};
