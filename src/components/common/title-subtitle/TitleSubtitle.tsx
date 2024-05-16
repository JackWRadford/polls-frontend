import styles from "./titleSubtitle.module.css";

export interface TitleSubtitleProps {
	title: string;
	subtitle?: string;
	titleElementType?: "h1" | "h2" | "h3";
}

const TitleSubtitle = ({
	title,
	subtitle,
	titleElementType = "h2",
}: TitleSubtitleProps) => {
	const TitleElement = titleElementType || "h2";

	return (
		<div className={styles.container}>
			<TitleElement>{title}</TitleElement>
			<p className={styles.subtitle}>{subtitle}</p>
		</div>
	);
};

export default TitleSubtitle;
