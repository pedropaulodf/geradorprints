import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";

import menuArrowIconSVG from "../../assets/menu-arrow.svg";
import logo_cab from "../../assets/logo_cab.png";

import "./styles.scss";

type AppHeaderProps = {
  title: string;
  onlyAppBar?: boolean;
};

export default function AppHeader({
  title,
  onlyAppBar = false,
}: AppHeaderProps) {
  return (
    <div
      className="appheader-container"
      style={{
        height: onlyAppBar ? "6em" : "11.8em",
        background: onlyAppBar ? "rgba(0,0,0,0)" : "#ffffff",
        boxShadow: onlyAppBar ? "none" : "0px 0px 20px 4px rgba(0, 0, 0, 0.38)",
      }}
    >
      <div className="top-strip">
        <div>
          <p className="time">09:55</p>
        </div>
        <div className="top-right-icons-group">
          <p className="three-dots">....</p>
          <p>
            <IoIosWifi color="#333333" size={30} />
          </p>
          <p>
            <IoIosBatteryFull color="#333333" size={50} />
          </p>
        </div>
      </div>
      {!onlyAppBar && (
        <div className="bottom-strip">
          <div className="menu-icon-box">
            <img src={menuArrowIconSVG} alt="Menu icon" />
          </div>
          <div>
            <p>{title}</p>
          </div>
          <div className="logo-box">
            <img src={logo_cab} alt="Logo header" />
          </div>
        </div>
      )}
    </div>
  );
}
