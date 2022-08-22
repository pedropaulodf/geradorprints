import ScreenLogin from "../ScreenLogin";
import "./styles.scss";

export default function Content() {
  return (
    <div className="content-container">
      <h3>iPhone:</h3>
      {/* <iframe
        src="http://127.0.0.1:5173/screenlogin"
        width="1125"
        height="2436"
      /> */}
      <ScreenLogin />
      <h3>iPad:</h3>
    </div>
  );
}
