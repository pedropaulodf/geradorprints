import Header from "../../components/Header";
import Content from "../Content";
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
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}
