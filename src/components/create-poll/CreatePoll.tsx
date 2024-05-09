import { FormEvent, useState } from "react";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import TextArea from "../common/textArea/TextArea";
import styles from "./createPoll.module.css";
import OptionInput from "./option-input/OptionInput";

const CreatePoll = () => {
	const [options, setOptions] = useState<string[]>(["", ""]);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
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
				<TextArea placeholder={"Poll Prompt"} />
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
