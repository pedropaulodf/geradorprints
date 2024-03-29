import AppFooterIPad from "../../../components/AppFooterIPad";
import AppHeaderIPad from "../../../components/AppHeaderIPad";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import ScreenMeusDependentes from "../iPhoneScreensCOPIA/ScreenMeusDependentes";
import "./styles.scss";

export default function IPadScreenMeusDependentes() {
  const { refScreenIPadMeusDependentes } = useSettingsContext();

  return (
    <div
      className="screen-ipad-carteirinhadigital-container"
      ref={refScreenIPadMeusDependentes}
    >
      <AppHeaderIPad />

      <div className="ipad-screen-container">
        <ScreenMeusDependentes isIpad />
      </div>

      <AppFooterIPad />
    </div>
  );
}
