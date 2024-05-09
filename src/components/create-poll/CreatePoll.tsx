import { FormEvent, useState } from "react";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import TextArea from "../common/textArea/TextArea";
import styles from "./createPoll.module.css";
import OptionInput from "./option-input/OptionInput";
import ErrorMessage from "../common/error-message/ErrorMessage";

const CreatePoll = () => {
	const [prompt, setPrompt] = useState<string>("");
	const [options, setOptions] = useState<string[]>(["", ""]);
	const [validationError, setValidationError] = useState<string>("");

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setValidationError("");

		// Validation
		if (!prompt) {
			setValidationError("Please enter a prompt");
		} else if (!validateOptions()) {
			setValidationError("Please include at least two options");
		}
	};

	// Check that there are at least two options.
	const validateOptions = (): boolean => {
		const filteredOptions = options.filter((str) => str.trim() !== "");
		return filteredOptions.length >= 2;
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
		setOptions((prev) => {
			const updatedOptions = [...prev, ""];
			return updatedOptions;
		});
	};

	const handleDeleteOption = (index: number) => {
		setOptions((prev) => {
			const updatedOptions = [...prev];
			updatedOptions.splice(index, 1);
			return updatedOptions;
		});
	};

	return (
		<Card className={styles.container}>
			<form onSubmit={handleSubmit}>
				<TextArea
					placeholder={"Poll Prompt"}
					value={prompt}
					onChange={(event) => setPrompt(event.target.value)}
				/>
				<div className={styles.optionsContainer}>
					<ul>
						{options.map((option, index) => (
							<OptionInput
								key={index}
								value={option}
								onChange={(value: string) =>
									handleOptionChange(value, index)
								}
								onDelete={() => handleDeleteOption(index)}
								placeholder={`Option ${index + 1}`}
							/>
						))}
					</ul>
					<Button
						label="Add Option"
						onClick={handleAddOption}
						level="secondary"
						type="button"
						fitContent
					/>
				</div>
				{validationError && <ErrorMessage message={validationError} />}
				<Button
					label={"Create Poll"}
					onClick={() => {}}
					type="submit"
				/>
			</form>
		</Card>
	);
};

export default CreatePoll;
