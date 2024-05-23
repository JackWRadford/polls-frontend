import Hero from "../../components/home/hero/Hero";
import styles from "./homePage.module.css";
import ExamplePolls from "../../components/home/example-polls/ExamplePolls";
import { useEffect } from "react";

const HomePage = () => {
	useEffect(() => {
		document.title =
			"Poll Maker - Create polls and share them with anyone.";
	}, []);

	return (
		<div className={styles.container}>
			<Hero
				titleSubtitleProps={{
					title: "Create and Share Polls",
					subtitle:
						"Easily create and share polls with your friends, family, or community. Get instant feedback and insights.",
					titleElementType: "h1",
				}}
				linkButtonProps={{
					to: "/create-poll",
					label: "Create Poll",
				}}
			/>
			<ExamplePolls />
		</div>
	);
};

export default HomePage;
