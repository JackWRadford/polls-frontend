import { MouseEvent } from "react";
import styles from "./button.module.css";

interface ButtonProps {
	label: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
