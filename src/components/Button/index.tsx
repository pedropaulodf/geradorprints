import { FiDownload } from "react-icons/fi";

import "./styles.scss";
import { HeaderButtonStatusIsLoading, HeaderButtonStatusType } from "../Header";

type ButtonProps = {
  title: string;
  onPress: () => void;
  buttonTipe?: HeaderButtonStatusType;
  subTitle?: string;
  bgColor?: string;
  headerButtonStatus?: HeaderButtonStatusIsLoading;
};

export default function Button({
  title = "Clique",
  onPress,
  subTitle,
  bgColor,
  headerButtonStatus,
  buttonTipe = "btnIphone",
}: ButtonProps) {
  return (
    <button
      onClick={onPress}
      className="button"
      disabled={headerButtonStatus?.isLoading}
      style={{
        backgroundColor: bgColor ? bgColor : "#208135",
        opacity: headerButtonStatus?.isLoading ? 0.5 : 1,
        cursor: headerButtonStatus?.isLoading ? "progress" : "pointer",
      }}
    >
      <div className="title">
        <p>
          {buttonTipe === headerButtonStatus?.btnIsLoading
            ? "Processando..."
            : title}
        </p>
      </div>
      <div className="subtitle-icon-box">
        {subTitle && (
          <div className="subtitle">
            <p>{subTitle}</p>
          </div>
        )}

        <div className="icon">
          <div>
            <FiDownload size={22} />
          </div>
        </div>
      </div>
    </button>
  );
}
