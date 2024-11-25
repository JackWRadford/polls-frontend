import { Route, Routes, useNavigate } from "react-router-dom";
import AccountSidebar from "../../components/account-sidebar/AccountSidebar";
import { useAuthContext } from "../../hooks/useAuthContext";
import DeleteAccountPage from "../delete-account-page/DeleteAccountPage";
import MyPollsPage from "../my-polls-page/MyPollsPage";
import styles from "./accountPage.module.css";
import { useEffect } from "react";

const AccountPage = () => {
  const { checkAuthentication } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    /** Navigate to home if the user is not authenticated. */
    const checkUserIsAuthenticated = async () => {
      const userIsAuthenticated = await checkAuthentication();
      if (!userIsAuthenticated) {
        navigate("/login");
      }
    };
    checkUserIsAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.pageContainer}>
      <AccountSidebar />
      <div className={styles.content}>
        <Routes>
          <Route path="my-polls" element={<MyPollsPage />} />
          <Route path="delete" element={<DeleteAccountPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default AccountPage;
