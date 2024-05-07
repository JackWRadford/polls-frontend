import "./App.css";
import Button from "./components/button/Button";
import Input from "./components/input/Input";

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
