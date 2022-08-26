import IphoneBottomLine from "../../../components/IphoneBottomLine";
import { useSettingsContext } from "../../../contexts/useSettingsContext";

import "./styles.scss";

type PropsType = {
  isIpad?: boolean;
};

export default function ScreenLogin({ isIpad = false }: PropsType) {
  const { colorPrimary, refScreenLogin, fileFundoAppImg, fileLogoAppImg } =
    useSettingsContext();

  return (
    <div
      className="screen-login-container"
      ref={refScreenLogin}
      style={{ borderRadius: isIpad ? ".7em" : "0" }}
    >
      <div className="screen-container">
        <div className="logo">
          <img
            src={fileLogoAppImg[0] ?? "/logo_app_sample.png"}
            alt="Logo app"
          />
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

      {!isIpad && <IphoneBottomLine />}

      <div
        style={{
          left: 0,
          right: 0,
          zIndex: 0,
          display: "block",
          position: "absolute",
          height: "100%",
          backgroundImage: `url(${
            fileFundoAppImg[0] ?? "fundo_app_sample.png"
          })`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          filter: `opacity(var(--fundo-app-opacity)) blur(var(--fundo-app-blur)`,
        }}
      ></div>
    </div>
  );
}
