import "./App.css";
import Button from "./components/common/button/Button";
import Card from "./components/common/card/Card";
import Input from "./components/common/input/Input";
import ProgressBar from "./components/common/progressBar/ProgressBar";
import RadioSelect from "./components/common/radioSelect/RadioSelect";
import TextArea from "./components/common/textArea/TextArea";

function App() {
	return (
		<Card>
			<ProgressBar value={1} />
			<ProgressBar value={60} />
			<ProgressBar value={99} />
			<RadioSelect
				options={[
					{
						value: "0",
						label: "React",
					},
					{ value: "1", label: "Vue" },
					{ value: "2", label: "Angular" },
				]}
				onSelect={function (value: string): void {
					throw new Error("Function not implemented.");
				}}
			/>
			<Button
				label={"Hold to Create"}
				onClick={function (): void {
					throw new Error("Function not implemented.");
				}}
			></Button>
			<Button
				label={"Hold to Create"}
				onClick={function (): void {
					throw new Error("Function not implemented.");
				}}
				type="secondary"
			></Button>
			<Input placeholder={"An option for the poll"} name="Option 1" />
			<TextArea placeholder={"Enter the poll prompt here"} />
		</Card>
	);
}

export default App;
