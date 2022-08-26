import { FiGithub } from "react-icons/fi";
import { MdOutlineAddToDrive } from "react-icons/md";
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
    refScreenIPadLogin,
    refScreenIPadFinanceiro,
    refScreenIPadEscolhaPerfilLogin,
    refScreenIPadMeusDependentes,
    refScreenIPadDetalheCobranca,
    refScreenIPadCarteirinhaDigital,
    refScreenIPadMenuAberto,
  } = useSettingsContext();

  const downloadIPhonePrints = () => {
    exportAsImage(refScreenLogin.current, "screenLogin", "iphone");
    exportAsImage(refScreenFinanceiro.current, "screenFinanceiro", "iphone");
    exportAsImage(
      refScreenEscolhaPerfilLogin.current,
      "screenEscolhaPerfilLogin",
      "iphone"
    );
    exportAsImage(
      refScreenMeusDependentes.current,
      "screenMeusDependentes",
      "iphone"
    );
    exportAsImage(
      refScreenDetalheCobranca.current,
      "screenDetalheCobranca",
      "iphone"
    );
    exportAsImage(
      refScreenCarteirinhaDigital.current,
      "screenCarteirinhaDigital",
      "iphone"
    );
    exportAsImage(refScreenMenuAberto.current, "screenMenuAberto", "iphone");
  };

  const downloadIPadPrints = () => {
    exportAsImage(refScreenIPadLogin.current, "screenIPadLogin", "ipad");
    exportAsImage(
      refScreenIPadFinanceiro.current,
      "screenIPadFinanceiro",
      "ipad"
    );
    exportAsImage(
      refScreenIPadEscolhaPerfilLogin.current,
      "screenIPadEscolhaPerfilLogin",
      "ipad"
    );
    exportAsImage(
      refScreenIPadMeusDependentes.current,
      "screenIPadMeusDependentes",
      "ipad"
    );
    exportAsImage(
      refScreenIPadDetalheCobranca.current,
      "screenIPadDetalheCobranca",
      "ipad"
    );
    exportAsImage(
      refScreenIPadCarteirinhaDigital.current,
      "screenIPadCarteirinhaDigital",
      "ipad"
    );
    exportAsImage(
      refScreenIPadMenuAberto.current,
      "screenIPadMenuAberto",
      "ipad"
    );
  };

  const downloadAllPrints = () => {
    downloadIPhonePrints();
    downloadIPadPrints();
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
            title="Repositório no Github"
          >
            <div className="header-icon-container">
              <FiGithub color="#333333" size={22} />
            </div>
          </a>
          <a
            href="https://drive.google.com/drive/folders/1BCGZgXB10ecvARXUlo7m0L9L5PDk_qrg?usp=sharing"
            target="_blank"
            title="Pasta de arquivos no Drive"
          >
            <div className="header-icon-container">
              <MdOutlineAddToDrive color="#333333" size={22} />
            </div>
          </a>
          <a
            href="https://theapplaunchpad.com/"
            target="_blank"
            title="https://theapplaunchpad.com/"
          >
            <div className="applaunchpad-icon-container">
              <p>A</p>
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
