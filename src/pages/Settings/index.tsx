import "./styles.scss";

export default function Settings() {
  return (
    <div className="settings-container">
      <h3>Configurações:</h3>

      <div>
        <div className="input-container">
          <label>
            <span>Fundo App:</span>
            <input type="file" />
          </label>
        </div>
        <div className="input-container">
          <label>
            <span>Logo App:</span>
            <input type="file" />
          </label>
        </div>
        <div className="input-container">
          <label>
            <span>Logo Cab:</span>
            <input type="file" />
          </label>
        </div>
        <div className="input-container">
          <label>
            <span>Cor 1:</span>
            <input type="color" />
          </label>
        </div>
        <div className="input-container">
          <label>
            <span>Cor 2:</span>
            <input type="color" />
          </label>
        </div>
        <div className="input-container">
          <label>
            <span>Fundo App BLUR:</span>
            <input type="range" />
          </label>
        </div>
        <div className="input-container">
          <label>
            <span>Login box OPACITY:</span>
            <input type="range" />
          </label>
        </div>
      </div>
    </div>
  );
}
