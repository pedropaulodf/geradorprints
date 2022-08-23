import { TbGridDots } from "react-icons/tb";

import qrCodeIconSVG from "../../assets/qr-code.svg";

import "./styles.scss";

export default function AppFooter() {
  return (
    <div className="appfooter-container">
      <div>
        <TbGridDots color="#000000" size={54} />
        <p>Meus Dados</p>
      </div>
      <div className="carteirinha-digital-section">
        <img src={qrCodeIconSVG} alt="QR code icon" />
        <p>Carteirinha Digital</p>
      </div>
    </div>
  );
}
