import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import LoadingIndicator from "../loading-indicator/LoadingIndicator";
import styles from "./button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick: () => void;
	label?: string;
	level?: "primary" | "secondary" | "tertiary";
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
	const levelClass = useMemo(() => {
		switch (level) {
			case "primary":
				return "";
			case "secondary":
				return styles.secondary;
			case "tertiary":
				return styles.tertiary;
		}
	}, [level]);
	const buttonStyle = fitContent ? { width: "fit-content" } : {};

	return (
		<button
			style={buttonStyle}
			className={clsx(styles.button, levelClass)}
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
