import { useState } from "react";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import TextArea from "../common/textArea/TextArea";
import styles from "./createPoll.module.css";
import Input from "../common/input/Input";

const CreatePoll = () => {
	const [options, setOptions] = useState<string[]>(["", ""]);

	const handleCreatePoll = () => {};

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

	return (
		<Card className={styles.container}>
			<form>
				<TextArea placeholder={"Poll Prompt"} />
				<div className={styles.optionsContainer}>
					<ul>
						{options.map((option, index) => (
							<Input
								key={index}
								value={option}
								onChange={(value: string) =>
									handleOptionChange(value, index)
								}
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
					onClick={handleCreatePoll}
					type="submit"
				/>
			</form>
		</Card>
	);
};

export default CreatePoll;
