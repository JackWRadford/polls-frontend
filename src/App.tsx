import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<div>
				<NavBar />
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default App;
