import { FiDownload } from "react-icons/fi";

import "./styles.scss";

type ButtonProps = {
  title: string;
  onPress: () => void;
  subTitle?: string;
  bgColor?: string;
};

export default function Button({
  title = "Clique",
  onPress,
  subTitle,
  bgColor,
}: ButtonProps) {
  return (
    <button
      onClick={onPress}
      className="button"
      style={{ backgroundColor: bgColor ? bgColor : "#208135" }}
    >
      <div className="title">
        <p>{title}</p>
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
