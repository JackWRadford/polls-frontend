import Hero from "../../components/home/hero/Hero";
import styles from "./homePage.module.css";
import ExamplePolls from "../../components/home/example-polls/ExamplePolls";

const HomePage = () => {
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
