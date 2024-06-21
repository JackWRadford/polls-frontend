import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constants";

export const usePollForm = () => {
	const [prompt, setPrompt] = useState<string>("");
	const [options, setOptions] = useState<string[]>(["", ""]);
	const [validationError, setValidationError] = useState<string>("");
	const [isLoading, setIsLoading] = useState(false);
	const [limitVotesByIp, setLimitVotesByIp] = useState(false);
	const navigate = useNavigate();

	const toggleLimitVotesByIp = () => {
		setLimitVotesByIp((prev) => !prev);
	};

	const handlePromptChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setPrompt(event.target.value);
	};

	const removeEmptyOptions = (): string[] => {
		return options.filter((str) => str.trim() !== "");
	};

	const handleOptionChange = (value: string, index: number) => {
		// Update the relevant option.
		setOptions((prev) => {
			const updatedOptions = [...prev];
			updatedOptions[index] = value;
			return updatedOptions;
		});
	};

	const handleAddOption = () => {
		setOptions((prev) => [...prev, ""]);
	};

	const handleDeleteOption = (index: number) => {
		setOptions((prev) => {
			const updatedOptions = [...prev];
			updatedOptions.splice(index, 1);
			return updatedOptions;
		});
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setValidationError("");

		// Validate the prompt.
		if (!prompt) {
			setValidationError("Please enter a prompt");
			return;
		}

		// Validate the options.
		const filteredOptions = removeEmptyOptions();
		if (filteredOptions.length < 2) {
			setValidationError("Please include at least two options");
			return;
		}

		// Construct JSON body.
		const body = JSON.stringify({
			title: prompt,
			options: filteredOptions,
			limitVotesByIp: limitVotesByIp,
		});

		try {
			setIsLoading(true);
			// POST request
			const response = await fetch(`${baseUrl}/polls/create`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body,
			});

			// Check response
			if (!response.ok) {
				throw new Error("Failed to create api");
			} else {
				// Navigate to the poll page
				const insertedId: string = (await response.json()).insertedId;
				setIsLoading(false);
				navigate(`/${insertedId}`);
			}
		} catch (error) {
			setIsLoading(false);
			console.error("Error creating poll:", error);
			setValidationError(
				"Failed to create the poll. Please try again later."
			);
		}
	};

	return {
		prompt,
		options,
		limitVotesByIp,
		validationError,
		isLoading,
		handlePromptChange,
		handleOptionChange,
		handleAddOption,
		toggleLimitVotesByIp,
		handleDeleteOption,
		handleSubmit,
	};
};
