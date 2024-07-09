import { useState } from "react";
import { baseUrl } from "../constants";

export const useDeleteAccount = () => {
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const deleteAccount = async (): Promise<boolean> => {
		try {
			setIsLoading(true);
			const response = await fetch(`${baseUrl}/auth/delete`, {
				method: "POST",
				credentials: "include",
			});

			if (!response.ok) {
				throw new Error("Bad Response");
			}

			setIsLoading(false);
			return true;
		} catch (error) {
			console.error("Error while deleting account: ", error);
			return false;
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, password, setPassword, deleteAccount };
};
