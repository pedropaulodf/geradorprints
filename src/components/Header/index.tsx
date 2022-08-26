import { FiGithub } from "react-icons/fi";
import { useSettingsContext } from "../../contexts/useSettingsContext";
import { exportAsImage } from "../../Utils/utils";
import Button from "../Button";
import "./styles.scss";

export default function Header() {
  const {
    refScreenLogin,
    refScreenFinanceiro,
    refScreenEscolhaPerfilLogin,
    refScreenMeusDependentes,
    refScreenDetalheCobranca,
    refScreenCarteirinhaDigital,
    refScreenMenuAberto,
  } = useSettingsContext();

  const downloadIPhonePrints = () => {
    exportAsImage(refScreenLogin.current, "screenLogin");
    exportAsImage(refScreenFinanceiro.current, "screenFinanceiro");
    exportAsImage(
      refScreenEscolhaPerfilLogin.current,
      "screenEscolhaPerfilLogin"
    );
    exportAsImage(refScreenMeusDependentes.current, "screenMeusDependentes");
    exportAsImage(refScreenDetalheCobranca.current, "screenDetalheCobranca");
    exportAsImage(
      refScreenCarteirinhaDigital.current,
      "screenCarteirinhaDigital"
    );
    exportAsImage(refScreenMenuAberto.current, "screenMenuAberto");
  };

  const downloadIPadPrints = () => {
    alert("Baixar iPad");
  };

  const downloadAllPrints = () => {
    alert("Baixar Todos");
  };

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
            onPress={() => downloadIPhonePrints()}
            bgColor="#0077BD"
          />
          <Button
            title="Baixar iPad"
            onPress={() => downloadIPadPrints()}
            bgColor="#815A20"
          />
          <Button title="Baixar Todos" onPress={() => downloadAllPrints()} />
        </div>
      </div>
    </div>
  );
}
