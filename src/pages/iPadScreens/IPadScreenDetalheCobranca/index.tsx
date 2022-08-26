import AppFooterIPad from "../../../components/AppFooterIPad";
import AppHeaderIPad from "../../../components/AppHeaderIPad";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import ScreenDetalheCobranca from "../../iPhoneScreens/ScreenDetalheCobranca";
import "./styles.scss";

export default function IPadScreenDetalheCobranca() {
  const { refScreenIPadDetalheCobranca } = useSettingsContext();

  return (
    <div
      className="screen-ipad-carteirinhadigital-container"
      ref={refScreenIPadDetalheCobranca}
    >
      <AppHeaderIPad />

      <div className="ipad-screen-container">
        <ScreenDetalheCobranca isIpad />
      </div>

      <AppFooterIPad />
    </div>
  );
}
