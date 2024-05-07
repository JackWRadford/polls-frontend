import "./App.css";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TextArea from "./components/textArea/TextArea";

function App() {
	return (
		<Card>
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
