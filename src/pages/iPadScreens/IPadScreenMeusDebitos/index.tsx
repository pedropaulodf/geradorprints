import AppFooterIPad from "../../../components/AppFooterIPad";
import AppHeaderIPad from "../../../components/AppHeaderIPad";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import ScreenMeusDebitos from "../iPhoneScreensCOPIA/ScreenMeusDebitos";

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
