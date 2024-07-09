import { useState } from "react";
import { baseUrl } from "../constants";

export const useDeletePoll = () => {
	const [isLoading, setIsLoading] = useState(false);

	const deletePoll = async (pollId: string): Promise<boolean> => {
		try {
			setIsLoading(true);
			const response = await fetch(`${baseUrl}/polls/${pollId}/delete`, {
				method: "POST",
				credentials: "include",
			});

			if (!response.ok) {
				throw new Error("Bad Response");
			}

			setIsLoading(false);
			return true;
		} catch (error) {
			console.error("Error while deleting poll: ", error);
			return false;
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, deletePoll };
};
