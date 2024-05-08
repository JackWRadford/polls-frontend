import clsx from "clsx";
import styles from "./button.module.css";

interface ButtonProps {
	label: string;
	onClick: () => void;
	type?: "primary" | "secondary";
}

const Button = ({ label, onClick, type = "primary" }: ButtonProps) => {
	const secondaryClass = type == "secondary" ? styles.secondary : null;

	return (
		<button
			className={clsx(styles.button, secondaryClass)}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;
