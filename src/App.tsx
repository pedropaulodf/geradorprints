import { SettingsContextProvider } from "./contexts/useSettingsContext";
import Home from "./pages/Home";

function App() {
  return (
    <SettingsContextProvider>
      <Home />;
    </SettingsContextProvider>
  );
}

export default App;
