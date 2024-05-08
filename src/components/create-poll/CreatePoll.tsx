import { useState } from "react";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import TextArea from "../common/textArea/TextArea";
import styles from "./createPoll.module.css";
import Input from "../common/input/Input";

const CreatePoll = () => {
	const [options, setOptions] = useState<string[]>(["", ""]);

	const handleCreatePoll = () => {};

	return (
		<Card className={styles.container}>
			<form>
				<TextArea placeholder={"Poll Prompt"} />
				<ul className={styles.optionsContainer}>
					{options.map((option, index) => (
						<Input
							key={index}
							value={option}
							placeholder={`Option ${index + 1}`}
						/>
					))}
				</ul>
				<Button label={"Create Poll"} onClick={handleCreatePoll} />
			</form>
		</Card>
	);
};

export default CreatePoll;
