import { ReactNode, createContext, useEffect, useState } from "react";
import { baseUrl } from "../constants";
import { User } from "../types/apiTypes";

interface IAuthContext {
	user?: User;
	checkAuthentication: () => Promise<boolean>;
	logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | undefined>();

	/** Check if the user is authenticated. */
	const checkAuthentication = async (): Promise<boolean> => {
		try {
			const result = await fetch(`${baseUrl}/auth/me`, {
				method: "GET",
				credentials: "include",
			});

			if (!result.ok) {
				throw new Error("Failed authentication check.");
			}

			// Get the User object.
			const resultData = await result.json();
			const user: User | undefined = resultData.user;
			setUser(user);
			return user !== undefined;
		} catch (error) {
			setUser(undefined);
			console.error(
				"Error while checking for authenticated user: ",
				error
			);
			return false;
		}
	};

	useEffect(() => {
		checkAuthentication();
	}, []);

	const logout = () => {
		setUser(undefined);
	};

	return (
		<AuthContext.Provider value={{ user, checkAuthentication, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
