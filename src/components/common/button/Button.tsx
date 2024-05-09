import clsx from "clsx";
import styles from "./button.module.css";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick: () => void;
	label?: string;
	level?: "primary" | "secondary";
	fitContent?: boolean;
}

const Button = ({
	onClick,
	label,
	level = "primary",
	fitContent = false,
	...rest
}: ButtonProps) => {
	const secondaryClass = level == "secondary" ? styles.secondary : null;
	const buttonStyle = fitContent ? { width: "fit-content" } : {};

	return (
		<button
			style={{ ...buttonStyle }}
			className={clsx(styles.button, secondaryClass)}
			onClick={onClick}
			{...rest}
		>
			{label && label}
		</button>
	);
};

export default Button;
