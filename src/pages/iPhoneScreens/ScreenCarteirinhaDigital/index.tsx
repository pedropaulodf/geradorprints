import IphoneBottomLine from "../../../components/IphoneBottomLine";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import { FiArrowRight, FiX } from "react-icons/fi";

import AppHeader from "../../../components/AppHeader";

import qrCodeQualitySVG from "../../../assets/qrcode-qualitysys.svg";
import qrCodeWithCounter from "../../../assets/qrcode-with-counter.svg";
import "./styles.scss";

type PropsType = {
  isIpad?: boolean;
};

export default function ScreenCarteirinhaDigital({
  isIpad = false,
}: PropsType) {
  const { refScreenCarteirinhaDigital, colorSecondary } = useSettingsContext();

  return (
    <div
      className="screen-carteirinhadigital-container"
      ref={refScreenCarteirinhaDigital}
      style={{ borderRadius: isIpad ? ".3em" : "0" }}
    >
      <div className="screen-container">
        <div className="bg-overlay"></div>

        <AppHeader title="Acesso Rápido" onlyHeader={isIpad} />

        <div className="modal-carteirinha">
          <div className="modal-carteirinha-detail"></div>

          <div className="modal-header-container">
            <p>Carteirinha Digital</p>
            <div className="close-icon-box">
              <FiX size={50} color="#696969" />
            </div>
          </div>

          <div className="modal-content">
            <div className="user-info-box">
              <div>
                <img src="/user-female.png" alt="User photo" />
              </div>
              <p className="user-name">Lais</p>
              <p className="user-type">Titular</p>
              <div
                className="user-categoria-box"
                style={{
                  backgroundColor: `${colorSecondary}`,
                }}
              >
                <p className="user-categoria">Contribuinte</p>
              </div>
            </div>
            <div className="qrcode-valid-time-text">
              <p>
                Válido por <strong>00:52</strong>
              </p>
            </div>
            <div className="qrcode-section">
              <img src={qrCodeWithCounter} alt="QR Code image" />
            </div>

            <div className="left-arrow">
              <div>
                <FiArrowRight size={50} color="#ffffff" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isIpad && <IphoneBottomLine />}
    </div>
  );
}
