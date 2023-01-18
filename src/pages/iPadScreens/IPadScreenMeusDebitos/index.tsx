import AppFooterIPad from "../../../components/AppFooterIPad";
import AppHeaderIPad from "../../../components/AppHeaderIPad";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import ScreenMeusDebitos from "../../iPhoneScreens/ScreenMeusDebitos";
import "./styles.scss";

export default function IPadScreenMeusDebitos() {
  const { refScreenIPadMeusDebitos } = useSettingsContext();

  return (
    <div
      className="screen-ipad-carteirinhadigital-container"
      ref={refScreenIPadMeusDebitos}
    >
      <AppHeaderIPad />

      <div className="ipad-screen-container">
        <ScreenMeusDebitos isIpad />
      </div>

      <AppFooterIPad />
    </div>
  );
}
