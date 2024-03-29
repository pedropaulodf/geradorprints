import AppFooterIPad from "../../../components/AppFooterIPad";
import AppHeaderIPad from "../../../components/AppHeaderIPad";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import ScreenCarteirinhaDigital from "../iPhoneScreensCOPIA/ScreenCarteirinhaDigital";
import "./styles.scss";

export default function IPadScreenCateirinhaDigital() {
  const { refScreenIPadCarteirinhaDigital } = useSettingsContext();

  return (
    <div
      className="screen-ipad-carteirinhadigital-container"
      ref={refScreenIPadCarteirinhaDigital}
    >
      <AppHeaderIPad />

      <div className="ipad-screen-container">
        <ScreenCarteirinhaDigital isIpad />
      </div>

      <AppFooterIPad />
    </div>
  );
}
