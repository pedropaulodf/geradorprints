import { FiGithub } from "react-icons/fi";
import Button from "../Button";
import "./styles.scss";

export default function Header() {
  return (
    <div className="header-container">
      <div className="max-width-container header-content">
        <div className="logo-container">
          <div className="logo">
            <p>GERADOR DE PRINTS</p>
          </div>
          <a
            href="https://github.com/pedropaulodf/geradorprints"
            target="_blank"
          >
            <div className="git-icon-container">
              <FiGithub color="#333333" size={22} />
            </div>
          </a>
        </div>
        <div className="btnSection">
          <Button
            title="Baixar iPhone"
            onPress={() => alert("Baixar iPhone")}
            bgColor="#0077BD"
          />
          <Button
            title="Baixar iPad"
            onPress={() => alert("Baixar iPad")}
            bgColor="#815A20"
          />
          <Button title="Baixar Todos" onPress={() => alert("Baixar Todos")} />
        </div>
      </div>
    </div>
  );
}
