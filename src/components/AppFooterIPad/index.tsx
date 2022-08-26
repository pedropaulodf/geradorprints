import BottomArrowIconIPadSVG from "../../assets/bottom-arrows-ipad.svg";

import "./styles.scss";

export default function AppFooterIPad() {
  return (
    <div className="appfooteripad-container">
      <div className="bottom-arrows-box">
        <img src={BottomArrowIconIPadSVG} alt="Arrows" />
      </div>
      <div className="ipad-bottom-line"></div>
    </div>
  );
}
