import "./App.css";
import Button from "./components/button/Button";

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
		</>
	);
}

export default App;
