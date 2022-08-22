import { useSettingsContext } from "../../contexts/useSettingsContext";
import "./styles.scss";

export default function Settings() {
  const {
    setColorPrimary,
    setColorSecondary,
    setFundoAppBlur,
    setFundoAppOpacity,
    setloginBoxOpacity,
  } = useSettingsContext();

  function changeRootVarAtribute(
    atributeValue: string,
    rootColorAtributeName: string
  ) {
    document.documentElement.style.setProperty(
      rootColorAtributeName,
      atributeValue
    );
  }

  return (
    <div className="settings-container">
      <h3>Configurações:</h3>

      <div>
        <div className="input-container">
          <label>
            <span>Fundo App:</span>
          </label>
          <input type="file" />
        </div>
        <div className="input-container">
          <label>
            <span>Logo App:</span>
          </label>
          <input type="file" />
        </div>
        <div className="input-container">
          <label>
            <span>Logo Cab:</span>
          </label>
          <input type="file" />
        </div>
        <div className="input-container">
          <label>
            <span>Cor 1:</span>
          </label>
          <input
            type="color"
            onChange={(evt) => {
              const { value } = evt.target;
              changeRootVarAtribute(value, "--color-primary");
              setColorPrimary(value);
            }}
            defaultValue="#0077bd"
          />
        </div>
        <div className="input-container">
          <label>
            <span>Cor 2:</span>
          </label>
          <input
            type="color"
            onChange={(evt) => {
              const { value } = evt.target;
              changeRootVarAtribute(value, "--color-secondary");
              setColorSecondary(value);
            }}
            defaultValue="#ed3237"
          />
        </div>
        <div className="input-container">
          <label>
            <span>Fundo App OPACITY:</span>
          </label>
          <input
            type="range"
            onChange={(evt) => {
              const { value } = evt.target;
              changeRootVarAtribute(`${value}%`, "--fundo-app-opacity");
              setFundoAppOpacity(parseInt(value));
            }}
            defaultValue="70"
            min="0"
            max="100"
            step="1"
          />
        </div>
        <div className="input-container">
          <label>
            <span>Fundo App BLUR:</span>
          </label>
          <input
            type="range"
            onChange={(evt) => {
              const { value } = evt.target;
              changeRootVarAtribute(`${value}px`, "--fundo-app-blur");
              setFundoAppBlur(parseInt(value));
            }}
            step="1"
            min="0"
            max="10"
            defaultValue="3" // mesmo que o --fundo-app-blur
          />
        </div>
        <div className="input-container">
          <label>
            <span>Login box OPACITY:</span>
          </label>
          <input
            type="range"
            onChange={(evt) => {
              const { value } = evt.target;
              changeRootVarAtribute(`${value}%`, "--box-login-opacity");
              setloginBoxOpacity(parseInt(value));
            }}
            defaultValue="100"
            min="0"
            max="100"
            step="1"
          />
        </div>
      </div>
    </div>
  );
}
