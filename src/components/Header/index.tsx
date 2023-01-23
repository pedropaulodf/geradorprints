import { FiGithub } from "react-icons/fi";
import { MdOutlineAddToDrive } from "react-icons/md";
import { SiNotion } from "react-icons/si";
import { useSettingsContext } from "../../contexts/useSettingsContext";
import { ArrayZipFileType, exportAsImage } from "../../Utils/utils";
import Button from "../Button";
import "./styles.scss";

export default function Header() {
  const {
    refScreenLogin,
    refScreenMeusDebitos,
    refScreenEscolhaPerfilLogin,
    refScreenMeusDependentes,
    refScreenDetalheCobranca,
    refScreenCarteirinhaDigital,
    refScreenMenuAberto,
    refScreenIPadLogin,
    refScreenIPadMeusDebitos,
    refScreenIPadEscolhaPerfilLogin,
    refScreenIPadMeusDependentes,
    refScreenIPadDetalheCobranca,
    refScreenIPadCarteirinhaDigital,
    refScreenIPadMenuAberto,
  } = useSettingsContext();

  const downloadIPhonePrints = () => {
    const imagensToZipAndDownload = [
      {
        ref: refScreenLogin.current,
        name: "screenLogin",
      },
      {
        ref: refScreenMeusDebitos.current,
        name: "screenMeusDebitos",
      },
      {
        ref: refScreenEscolhaPerfilLogin.current,
        name: "screenEscolhaPerfilLogin",
      },
      {
        ref: refScreenMeusDependentes.current,
        name: "screenMeusDependentes",
      },
      {
        ref: refScreenDetalheCobranca.current,
        name: "screenDetalheCobranca",
      },
      {
        ref: refScreenCarteirinhaDigital.current,
        name: "screenCarteirinhaDigital",
      },
      {
        ref: refScreenMenuAberto.current,
        name: "screenMenuAberto",
      },
    ] as ArrayZipFileType[];

    exportAsImage({ dados: imagensToZipAndDownload, type: "iphone" });
  };

  const downloadIPadPrints = () => {
    const imagensToZipAndDownload = [
      {
        ref: refScreenIPadLogin.current,
        name: "screenIPadLogin",
      },
      {
        ref: refScreenIPadMeusDebitos.current,
        name: "screenIPadMeusDebitos",
      },
      {
        ref: refScreenIPadEscolhaPerfilLogin.current,
        name: "screenIPadEscolhaPerfilLogin",
      },
      {
        ref: refScreenIPadMeusDependentes.current,
        name: "screenIPadMeusDependentes",
      },
      {
        ref: refScreenIPadDetalheCobranca.current,
        name: "screenIPadDetalheCobranca",
      },
      {
        ref: refScreenIPadCarteirinhaDigital.current,
        name: "screenIPadCarteirinhaDigital",
      },
      {
        ref: refScreenIPadMenuAberto.current,
        name: "screenIPadMenuAberto",
      },
    ];

    exportAsImage({ dados: imagensToZipAndDownload, type: "ipad" });
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
          <div className="header-icons-container">
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
            {/* <a
              href="#"
              target="_blank"
              title="Tutorial de como subir para as lojas"
            >
              <div className="header-icon-container">
                <SiNotion color="#333333" size={22} />
              </div>
            </a> */}
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
