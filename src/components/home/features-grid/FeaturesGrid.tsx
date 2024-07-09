import styles from "./featuresGrid.module.css";
import { FaGlobe, FaLink, FaUnlock } from "react-icons/fa";
import FeatureItem, { FeatureItemProps } from "./feature-item/FeatureItem";
import TitleSubtitle from "../../common/title-subtitle/TitleSubtitle";

const features: FeatureItemProps[] = [
	{
		icon: <FaUnlock size={15} />,
		title: "No Login Required",
		description:
			"Create a poll instantly without the need to create an account.",
	},
	{
		icon: <FaGlobe />,
		title: "Limit Votes by IP",
		description: "Avoid duplicate votes based on network IP address.",
	},
	{
		icon: <FaLink />,
		title: "Share via Link",
		description: "Easily share polls and poll results with a link.",
	},
];

const FeaturesGrid = () => {
	return (
		<div className={styles.containerBackground}>
			<div className={styles.container}>
				<TitleSubtitle
					title={"Fast and Simple Polls"}
					subtitle={"Create a reliable, useful poll in seconds."}
				/>
				<div className={styles.featuresGrid}>
					{features.map((feature, index) => (
						<FeatureItem key={index} {...feature} />
					))}
				</div>
			</div>
		</div>
	);
};

export default FeaturesGrid;
