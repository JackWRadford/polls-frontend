import styles from "./shareCard.module.css";
import Card from "../common/card/Card";
import Button from "../common/button/Button";
import { LuClipboardSignature } from "react-icons/lu";

interface ShareCardProps {
	label: string;
}

const ShareCard = ({ label }: ShareCardProps) => {
	const hrefText = window.location.href;

	const copyToClipboard = () => {
		navigator.clipboard.writeText(hrefText);
	};

	return (
		<Card className={styles.container}>
			<h2>{label}</h2>
			<div className={styles.linkContainer}>
				<p>{hrefText}</p>
				<Button
					onClick={copyToClipboard}
					level="secondary"
					aria-label="Copy to clipboard"
				>
					<LuClipboardSignature />
				</Button>
			</div>
		</Card>
	);
};

export default ShareCard;
