import clsx from "clsx";
import styles from "./button.module.css";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick: () => void;
	label?: string;
	level?: "primary" | "secondary";
}

const Button = ({
	onClick,
	label,
	level = "primary",
	...rest
}: ButtonProps) => {
	const secondaryClass = level == "secondary" ? styles.secondary : null;

	return (
		<button
			className={clsx(styles.button, secondaryClass)}
			onClick={onClick}
			{...rest}
		>
			{label && label}
		</button>
	);
};

export default Button;
