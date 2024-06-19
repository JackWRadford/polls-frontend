import { usePollForm } from "../../hooks/usePollForm";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import ErrorMessage from "../common/error-message/ErrorMessage";
import TextArea from "../common/text-area/TextArea";
import PollOptionInput from "../poll-option-input/PollOptionInput";
import styles from "./createPollCard.module.css";

const CreatePollCard = () => {
	const {
		prompt,
		options,
		validationError,
		isLoading,
		handlePromptChange,
		handleOptionChange,
		handleAddOption,
		handleDeleteOption,
		handleSubmit,
	} = usePollForm();

	return (
		<Card className={styles.container}>
			<form onSubmit={handleSubmit}>
				<TextArea
					placeholder={"Poll Prompt"}
					value={prompt}
					onChange={handlePromptChange}
				/>
				<div className={styles.optionsContainer}>
					<ul>
						{options.map((option, index) => (
							<PollOptionInput
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
					isLoading={isLoading}
				/>
			</form>
		</Card>
	);
};

export default CreatePollCard;
