import Header from "../../components/Header";
import ContentIPad from "../ContentIPad";
import ContentIPhone from "../ContentIPhone";
import Settings from "../Settings";

import "./styles.scss";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-width-container home-container">
        <div>
          <Settings />
        </div>
        <div style={{ maxWidth: "calc(90vw - 318px)" }}>
          <ContentIPhone />
          <hr style={{ marginTop: "2em" }} />
          <ContentIPad />
        </div>
      </div>
    </div>
  );
}
