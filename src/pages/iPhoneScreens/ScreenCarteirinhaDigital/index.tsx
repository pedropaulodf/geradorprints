import IphoneBottomLine from "../../../components/IphoneBottomLine";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import { FiArrowRight } from "react-icons/fi";

import AppHeader from "../../../components/AppHeader";

import qrCodeQualitySVG from "../../../assets/qrcode-qualitysys.svg";
import counterCicle1SVG from "../../../assets/counter-circle1.svg";
import counterCicle2SVG from "../../../assets/counter-circle2.svg";
import "./styles.scss";

export default function ScreenCarteirinhaDigital() {
  const { refScreenCarteirinhaDigital } = useSettingsContext();

  return (
    <div
      className="screen-carteirinhadigital-container"
      ref={refScreenCarteirinhaDigital}
    >
      <div className="screen-container">
        <div className="bg-overlay"></div>

        <AppHeader title="" onlyAppBar />

        <div className="modal-carteirinha">
          <div className="modal-carteirinha-detail"></div>

          <div className="modal-header-container">
            <p>Carteirinha Digital</p>
          </div>

          <div className="modal-content">
            <div className="user-info-box">
              <div>
                <img src="/user-female.png" alt="User photo" />
              </div>
              <div>
                <input type="text" value="Lais" onChange={() => {}} />
              </div>
            </div>

            <div className="qrcode-section">
              <img src={qrCodeQualitySVG} alt="QR Code image" />
              <div className="left-arrow">
                <div>
                  <FiArrowRight size={63} color="#ffffff" />
                </div>
              </div>
            </div>

            <div className="countdown-timer">
              <img src={counterCicle2SVG} alt="Counter" />
            </div>
          </div>
        </div>
      </div>

      <IphoneBottomLine />
    </div>
  );
}
