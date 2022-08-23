import fundo_app from "../../assets/fundo_app.png";
import logo_app from "../../assets/logo_app.png";
import IphoneBottomLine from "../../components/IphoneBottomLine";
import { useSettingsContext } from "../../contexts/useSettingsContext";

import "./styles.scss";

export default function ScreenLogin() {
  const { colorPrimary, refScreenLogin } = useSettingsContext();

  return (
    <div className="screen-login-container" ref={refScreenLogin}>
      <div className="screen-container">
        <div className="logo">
          <img src={logo_app} alt="Logo app" />
        </div>
        <div className="center-box">
          <div
            className="box-login"
            style={{
              backgroundColor:
                "rgba(" +
                parseInt(colorPrimary.slice(-6, -4), 16) +
                "," +
                parseInt(colorPrimary.slice(-4, -2), 16) +
                "," +
                parseInt(colorPrimary.slice(-2), 16) +
                ",var(--box-login-opacity))",
            }}
          >
            <div>
              <label>CPF</label>
              <input type="text" />
            </div>
            <div>
              <label>Senha</label>
              <input type="text" />
            </div>
            <div className="fake-checkbox-field">
              <div className="fake-checkbox"></div>
              <label>Lembrar meu CPF</label>
            </div>
            <button type="button">ENTRAR</button>
          </div>
          <div className="forgot-password">
            <p>ESQUECI MINHA SENHA</p>
          </div>
        </div>
      </div>
      <div className="credits-quality">
        <p>Desenvolvido por Quality Systems</p>
      </div>

      <IphoneBottomLine />

      <div
        style={{
          left: 0,
          right: 0,
          zIndex: 0,
          display: "block",
          position: "absolute",
          height: "100%",
          backgroundImage: `url(${fundo_app})`,
          backgroundSize: "cover",
          filter: `opacity(var(--fundo-app-opacity)) blur(var(--fundo-app-blur)`,
        }}
      ></div>
    </div>
  );
}
