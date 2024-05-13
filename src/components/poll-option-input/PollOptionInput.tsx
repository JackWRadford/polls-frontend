import Button from "../common/button/Button";
import Input, { InputProps } from "../common/input/Input";
import styles from "./pollOptionInput.module.css";
import { HiXMark } from "react-icons/hi2";

interface OptionInput extends InputProps {
	onDelete: () => void;
}

const PollOptionInput = ({ onDelete, ...rest }: OptionInput) => {
	return (
		<div className={styles.container}>
			<Input {...rest} type="text" />
			<Button type="button" onClick={onDelete} level="secondary">
				<HiXMark size={20} />
			</Button>
		</div>
	);
};

export default PollOptionInput;