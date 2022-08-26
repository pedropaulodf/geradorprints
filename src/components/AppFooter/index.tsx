import { TbGridDots } from "react-icons/tb";

import QrCodeSvg from "../../assets/svgComponents/QrCodeSvg";

import "./styles.scss";

type PropsType = {
  isIpad?: boolean;
};

export default function AppFooter({ isIpad = false }: PropsType) {
  return (
    <div
      className="appfooter-container"
      style={{ padding: isIpad ? "2em 0" : "0.5em 0" }}
    >
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
