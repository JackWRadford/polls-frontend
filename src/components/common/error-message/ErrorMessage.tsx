import { MdErrorOutline } from "react-icons/md";
import styles from "./errorMessage.module.css";

interface ErrorMessageProps {
	message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
	return (
		<div className={styles.container}>
			<MdErrorOutline />
			<p>{message}</p>
		</div>
	);
};

export default ErrorMessage;
