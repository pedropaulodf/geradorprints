import AppFooterIPad from "../../../components/AppFooterIPad";
import AppHeaderIPad from "../../../components/AppHeaderIPad";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import ScreenFinanceiro from "../../iPhoneScreens/ScreenFinanceiro";
import "./styles.scss";

export default function IPadScreenFinanceiro() {
  const { refScreenIPadFinanceiro } = useSettingsContext();

  return (
    <div
      className="screen-ipad-carteirinhadigital-container"
      ref={refScreenIPadFinanceiro}
    >
      <AppHeaderIPad />

      <div className="ipad-screen-container">
        <ScreenFinanceiro />
      </div>

      <AppFooterIPad />
    </div>
  );
}
