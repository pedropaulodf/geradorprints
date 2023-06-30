import { ToastContainer } from "react-toastify";
import { SettingsContextProvider } from "./contexts/useSettingsContext";
import Home from "./pages/Home";

function App() {
  return (
    <SettingsContextProvider>
      <Home />;
      <ToastContainer />
    </SettingsContextProvider>
  );
}

export default App;
