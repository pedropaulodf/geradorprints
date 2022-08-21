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
          <div
            className="git-icon-container"
            onClick={() => alert("repositório")}
          >
            <FiGithub color="#333333" size={22} />
          </div>
        </div>
        <div className="btnSection">
          <Button
            title="Salvar iPhone"
            onPress={() => alert("Salvar iPhone")}
            bgColor="#0077BD"
          />
          <Button
            title="Salvar iPad"
            subTitle="1042 x 2346"
            onPress={() => alert("Salvar iPad")}
            bgColor="#815A20"
          />
          <Button title="Salvar Todos" onPress={() => alert("Salvar Todos")} />
        </div>
      </div>
    </div>
  );
}
