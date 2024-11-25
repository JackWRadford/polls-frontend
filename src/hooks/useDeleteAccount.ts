import { useEffect, useState } from "react";
import { apiUrl } from "../constants";

export const confirmationStringPrompt = "Delete Account";

export const useDeleteAccount = () => {
  const [enableDeletion, setEnableDeletion] = useState(false);
  const [confirmationString, setConfirmationString] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const confirmationStringMatches = (): boolean => {
      return (
        confirmationString.toLocaleLowerCase().trim() ===
        confirmationStringPrompt.toLocaleLowerCase().trim()
      );
    };

    setEnableDeletion(confirmationStringMatches());
  }, [confirmationString]);

  const deleteAccount = async (): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiUrl}/api/auth/delete`, {
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

  return {
    enableDeletion,
    isLoading,
    confirmationString,
    setConfirmationString,
    deleteAccount,
  };
};
