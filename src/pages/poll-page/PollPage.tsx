import { useParams } from "react-router-dom";
import Card from "../../components/common/card/Card";
import { useEffect, useMemo, useState } from "react";
import styles from "./pollPage.module.css";
import RadioSelect from "../../components/common/radio-select/RadioSelect";
import Button from "../../components/common/button/Button";
import { Poll } from "../../models/poll";

const PollPage = () => {
	const { id } = useParams();
	const [poll, setPoll] = useState<Poll>();
	const [selectedOption, setSelectedOption] = useState<string>();

	useEffect(() => {
		const fetchPoll = async () => {
			try {
				const result = await fetch(
					`http://localhost:3000/polls/${id}`,
					{
						method: "GET",
					}
				);
				if (!result.ok) {
					console.error("Error while fetching poll.");
				} else {
					const data = await result.json();
					setPoll(data as Poll);
				}
			} catch (error) {
				console.error("Error while fetching poll.", error);
			}
		};

		fetchPoll();
	}, [id]);

	const submitIsDisabled = useMemo((): boolean => {
		return selectedOption === undefined;
	}, [selectedOption]);

	return (
		<Card className={styles.container}>
			<h1>{poll?.title}</h1>
			<p>Choose one:</p>
			{poll && (
				<RadioSelect
					options={poll.options}
					onSelect={(value) => setSelectedOption(value)}
				/>
			)}
			<Button
				label="Submit Vote"
				onClick={() => {}}
				fitContent
				className={styles.action}
				disabled={submitIsDisabled}
			/>
		</Card>
	);
};

export default PollPage;
