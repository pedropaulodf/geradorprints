import { SettingsContextProvider } from "./contexts/useSettingsContext";
import Routes from "./Routes/routes";

function App() {
  return (
    <SettingsContextProvider>
      <Routes />;
    </SettingsContextProvider>
  );
}

export default App;
