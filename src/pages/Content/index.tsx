import ScreenLogin from "../ScreenLogin";
import "./styles.scss";

export default function Content() {
  return (
    <div className="content-container">
      <h3>iPhone:</h3>
      {/* <iframe
        src="http://127.0.0.1:5173/screenlogin"
        // width="167"
        // height="393"
        width="1125"
        height="2436"
        style={{ zoom: 0.2 }}
      /> */}
      <ScreenLogin />
      <hr style={{ margin: "2em 0" }} />
      <h3>iPad:</h3>
    </div>
  );
}
