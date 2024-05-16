import { Link, LinkProps } from "react-router-dom";
import styles from "./linkButton.module.css";
import { ReactNode } from "react";
import clsx from "clsx";

export interface LinkButtonProps extends LinkProps {
	label?: string;
	level?: "primary" | "secondary";
	fitContent?: boolean;
	children?: ReactNode;
}

const LinkButton = ({
	label,
	level = "primary",
	fitContent = false,
	children,
	...rest
}: LinkButtonProps) => {
	const secondaryClass = level == "secondary" ? styles.secondary : null;
	const buttonStyle = fitContent ? { width: "fit-content" } : {};

	return (
		<Link
			className={clsx(styles.link, secondaryClass)}
			style={buttonStyle}
			{...rest}
		>
			{label}
			{children}
		</Link>
	);
};

export default LinkButton;
