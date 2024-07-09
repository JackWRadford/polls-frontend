import { apiUrl } from "../constants";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
	const authContext = useAuthContext();

	const logout = async () => {
		try {
			const result = await fetch(`${apiUrl}/api/auth/logout`, {
				method: "POST",
				credentials: "include",
			});

			if (!result.ok) {
				throw new Error("Error while logging out.");
			}

			authContext.logout();
		} catch (error) {
			console.error("Error while logging out: ", error);
		}
	};

	return { logout };
};
