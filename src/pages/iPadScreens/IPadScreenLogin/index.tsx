import AppFooterIPad from "../../../components/AppFooterIPad";
import AppHeaderIPad from "../../../components/AppHeaderIPad";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import ScreenLogin from "../../iPhoneScreens/ScreenLogin";
import "./styles.scss";

export default function IPadScreenLogin() {
  const { refScreenIPadLogin } = useSettingsContext();

  return (
    <div
      className="screen-ipad-carteirinhadigital-container"
      ref={refScreenIPadLogin}
    >
      <AppHeaderIPad />

      <div className="ipad-screen-container">
        <ScreenLogin isIpad />
      </div>

      <AppFooterIPad />
    </div>
  );
}
