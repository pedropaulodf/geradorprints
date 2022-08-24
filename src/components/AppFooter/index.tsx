import { TbGridDots } from "react-icons/tb";

import QrCodeSvg from "../../assets/svgComponents/QrCodeSvg";

import "./styles.scss";

export default function AppFooter() {
  return (
    <div className="appfooter-container">
      <div>
        <TbGridDots color="#000000" size={54} />
        <p>Meus Dados</p>
      </div>
      <div className="carteirinha-digital-section">
        <QrCodeSvg size="3.4em" />
        <p>Carteirinha Digital</p>
      </div>
    </div>
  );
}
