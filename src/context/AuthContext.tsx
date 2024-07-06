import { ReactNode, createContext, useEffect, useState } from "react";
import { baseUrl } from "../constants";
import { User } from "../types/apiTypes";

interface IAuthContext {
	user?: User;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | undefined>();

	useEffect(() => {
		/** Check if the user is authenticated. */
		const authCheck = async () => {
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
				console.log(user);
				setUser(user);
			} catch (error) {
				setUser(undefined);
				console.error(
					"Error while checking for authenticated user: ",
					error
				);
			}
		};

		authCheck();
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
