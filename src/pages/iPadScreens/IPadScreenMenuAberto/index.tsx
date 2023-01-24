import AppFooterIPad from "../../../components/AppFooterIPad";
import AppHeaderIPad from "../../../components/AppHeaderIPad";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import ScreenMenuAberto from "../iPhoneScreensCOPIA/ScreenMenuAberto";
import "./styles.scss";

export default function IPadScreenMenuAberto() {
  const { refScreenIPadMenuAberto } = useSettingsContext();

  return (
    <div
      className="screen-ipad-carteirinhadigital-container"
      ref={refScreenIPadMenuAberto}
    >
      <AppHeaderIPad />

      <div className="ipad-screen-container">
        <ScreenMenuAberto isIpad />
      </div>

      <AppFooterIPad />
    </div>
  );
}
