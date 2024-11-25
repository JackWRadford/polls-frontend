import { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "../types/apiTypes";
import { apiUrl } from "../constants";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  user?: User;
  checkAuthentication: () => Promise<boolean>;
  logout: () => void;
  loginOrSignUp: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>();
  const navigate = useNavigate();

  /** Check if the user is authenticated. */
  const checkAuthentication = async (): Promise<boolean> => {
    try {
      console.log("checkAuthentication");
      const result = await fetch(`${apiUrl}/api/auth/me`, {
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
      console.error("Error while checking for authenticated user: ", error);
      setUser(undefined);
      return false;
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  const logout = () => {
    setUser(undefined);
    navigate("/");
  };

  const loginOrSignUp = async () => {
    if (await checkAuthentication()) {
      navigate("/account/my-polls");
    } else {
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, checkAuthentication, logout, loginOrSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
