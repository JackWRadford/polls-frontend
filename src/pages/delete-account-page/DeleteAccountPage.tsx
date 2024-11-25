import { useNavigate } from "react-router-dom";
import Button from "../../components/common/button/Button";
import Card from "../../components/common/card/Card";
import Input from "../../components/common/input/Input";
import {
  confirmationStringPrompt,
  useDeleteAccount,
} from "../../hooks/useDeleteAccount";
import styles from "./deleteAccountPage.module.css";
import { FormEvent } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const DeleteAccountPage = () => {
  const {
    enableDeletion,
    isLoading,
    confirmationString,
    setConfirmationString,
    deleteAccount,
  } = useDeleteAccount();
  const navigate = useNavigate();
  const { checkAuthentication } = useAuthContext();

  const handleDeleteAccount = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const accountWasDeleted = await deleteAccount();
    if (accountWasDeleted) {
      checkAuthentication();
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Delete Account</h1>

      <Card className={styles.card}>
        <p>All polls and data will be deleted and cannot be recovered.</p>
        <form onSubmit={handleDeleteAccount}>
          <Input
            placeholder={"Delete Account"}
            value={confirmationString}
            onChange={setConfirmationString}
          />
          <Button
            type="submit"
            onClick={() => {}}
            label={confirmationStringPrompt}
            isLoading={isLoading}
            disabled={!enableDeletion}
          />
        </form>
      </Card>
    </div>
  );
};

export default DeleteAccountPage;
