import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className={styles.app}>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
