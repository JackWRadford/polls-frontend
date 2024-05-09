import Button from "../../common/button/Button";
import Input, { InputProps } from "../../common/input/Input";
import styles from "./optionInput.module.css";

interface OptionInput extends InputProps {
	onDelete: () => void;
}

const OptionInput = ({ onDelete, ...rest }: OptionInput) => {
	return (
		<div className={styles.container}>
			<Input {...rest} />
			<Button
				type="button"
				label="Delete"
				onClick={onDelete}
				level="secondary"
			/>
		</div>
	);
};

export default OptionInput;
