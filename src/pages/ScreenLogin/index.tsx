import { useRef } from "react";
import Button from "../../components/Button";
import { exportAsImage } from "../../Utils/utils";
import "./styles.scss";

import fundo_app from "../../assets/fundo_app.png";
import logo_app from "../../assets/logo_app.png";
import { useSettingsContext } from "../../contexts/useSettingsContext";

export default function ScreenLogin() {
  const exportRef = useRef<any>();

  const { colorPrimary } = useSettingsContext();

  return (
    <div>
      <div
        className="screen-login-container"
        id="idScreenLogin"
        ref={exportRef}
      >
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
        <div className="iphone-bottom-line"></div>

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
      <div style={{ marginTop: "1em" }}>
        <Button
          title="Baixar"
          subTitle="1111 x 2222"
          onPress={() => exportAsImage(exportRef.current, "screenLogin")}
        />
      </div>
    </div>
  );
}
