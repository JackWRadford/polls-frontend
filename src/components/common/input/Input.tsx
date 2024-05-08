import { InputHTMLAttributes } from "react";
import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
}

const Input = ({ placeholder, ...rest }: InputProps) => {
	return (
		<input className={styles.input} placeholder={placeholder} {...rest} />
	);
};

export default Input;
