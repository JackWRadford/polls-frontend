import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div className={styles.app}>
			<div>
				<NavBar />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default App;
