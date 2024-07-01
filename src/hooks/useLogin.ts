import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constants";
import { emailIsValid } from "../utils/emailValidation";

export const useLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [loginIsDisabled, setLoginIsDisabled] = useState(true);
	const [validationError, setValidationError] = useState<string>("");

	const navigate = useNavigate();

	useEffect(() => {
		// Check that the fields are valid.
		setLoginIsDisabled(!emailIsValid(email) || !passwordIsValid(password));
	}, [email, password]);

	const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Reset the validation error.
		setValidationError("");

		// Validate email.
		if (!emailIsValid(email)) {
			setValidationError("Please enter a valid email address.");
			return;
		}

		// Validate password.
		if (!passwordIsValid(password)) {
			setValidationError("Please enter a password.");
			return;
		}

		const body = JSON.stringify({
			email: email.trim(),
			password: password.trim(),
		});

		try {
			setIsLoading(true);
			const response = await fetch(`${baseUrl}/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body,
			});

			const responseData = await response.json();

			// Check response.
			if (!response.ok) {
				throw new Error(responseData.message || "Failed to login.");
			}

			// Navigate to home page.
			navigate("/");
		} catch (error) {
			setIsLoading(false);
			console.error("Error with user login:", error);
			setValidationError(
				(error as Error).message ||
					"Failed to login. Please try again later."
			);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		email,
		setEmail,
		password,
		setPassword,
		isLoading,
		loginIsDisabled,
		validationError,
		handleLogin,
	};
};

const passwordIsValid = (password: string): boolean => {
	return password.trim().length > 0;
};
