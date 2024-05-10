import Button from "../../../components/common/button/Button";
import Input, { InputProps } from "../../../components/common/input/Input";
import styles from "./optionInput.module.css";
import { HiXMark } from "react-icons/hi2";

interface OptionInput extends InputProps {
	onDelete: () => void;
}

const OptionInput = ({ onDelete, ...rest }: OptionInput) => {
	return (
		<div className={styles.container}>
			<Input {...rest} type="text" />
			<Button type="button" onClick={onDelete} level="secondary">
				<HiXMark size={20} />
			</Button>
		</div>
	);
};

export default OptionInput;
