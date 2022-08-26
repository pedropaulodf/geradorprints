import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";

import "./styles.scss";

export default function AppHeaderIPad() {
  return (
    <div className="appheader-ipad-container">
      <div className="top-strip">
        <div>
          <p className="time">8:56 AM &nbsp;&nbsp; Thu Jul 7</p>
        </div>
        <div className="top-right-icons-group">
          <p>
            <IoIosWifi color="#ffffff" size={18} />
          </p>
          <p className="battery-info">100%</p>
          <p>
            <IoIosBatteryFull color="#ffffff" size={26} />
          </p>
        </div>
      </div>
    </div>
  );
}
