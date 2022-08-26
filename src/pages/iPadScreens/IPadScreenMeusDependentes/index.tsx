import AppFooterIPad from "../../../components/AppFooterIPad";
import AppHeaderIPad from "../../../components/AppHeaderIPad";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import ScreenMeusDependentes from "../../iPhoneScreens/ScreenMeusDependentes";
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
        <ScreenMeusDependentes />
      </div>

      <AppFooterIPad />
    </div>
  );
}
