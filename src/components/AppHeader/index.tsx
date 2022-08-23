import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";

import menuArrowIconSVG from "../../assets/menu-arrow.svg";
import logo_cab from "../../assets/logo_cab.png";

import "./styles.scss";

type AppHeaderProps = {
  title: string;
};

export default function AppHeader({ title }: AppHeaderProps) {
  return (
    <div className="appheader-container">
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
    </div>
  );
}
