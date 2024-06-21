import styles from "./featureItem.module.css";
import { ReactNode } from "react";

import Card from "../../common/card/Card";

export interface FeatureItemProps {
	icon: ReactNode;
	title: string;
	description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
	return (
		<Card className={styles.featureContainer}>
			<div className={styles.iconContainer}>{icon}</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</Card>
	);
};

export default FeatureItem;
