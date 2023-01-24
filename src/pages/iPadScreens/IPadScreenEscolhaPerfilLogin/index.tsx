import AppFooterIPad from "../../../components/AppFooterIPad";
import AppHeaderIPad from "../../../components/AppHeaderIPad";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import ScreenEscolhaPerfilLogin from "../iPhoneScreensCOPIA/ScreenEscolhaPerfilLogin";
import "./styles.scss";

export default function IPadScreenEscolhaPerfilLogin() {
  const { refScreenIPadEscolhaPerfilLogin } = useSettingsContext();

  return (
    <div
      className="screen-ipad-carteirinhadigital-container"
      ref={refScreenIPadEscolhaPerfilLogin}
    >
      <AppHeaderIPad />

      <div className="ipad-screen-container">
        <ScreenEscolhaPerfilLogin isIpad />
      </div>

      <AppFooterIPad />
    </div>
  );
}
