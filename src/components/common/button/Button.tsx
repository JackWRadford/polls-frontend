import clsx from "clsx";
import styles from "./button.module.css";
import { ButtonHTMLAttributes, ReactNode } from "react";
import LoadingIndicator from "../loading-indicator/LoadingIndicator";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick: () => void;
	label?: string;
	level?: "primary" | "secondary";
	fitContent?: boolean;
	children?: ReactNode;
	isLoading?: boolean;
}

const Button = ({
	onClick,
	label,
	level = "primary",
	fitContent = false,
	children,
	isLoading = false,
	...rest
}: ButtonProps) => {
	const secondaryClass = level == "secondary" ? styles.secondary : null;
	const buttonStyle = fitContent ? { width: "fit-content" } : {};

	return (
		<button
			style={buttonStyle}
			className={clsx(styles.button, secondaryClass)}
			onClick={onClick}
			{...rest}
		>
			{!isLoading && label}
			{!isLoading && children}
			{isLoading && <LoadingIndicator />}
		</button>
	);
};

export default Button;
