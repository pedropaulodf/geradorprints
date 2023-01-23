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
        deviceType: "iphone",
      },
      {
        ref: refScreenMeusDebitos.current,
        name: "screenMeusDebitos",
        deviceType: "iphone",
      },
      {
        ref: refScreenEscolhaPerfilLogin.current,
        name: "screenEscolhaPerfilLogin",
        deviceType: "iphone",
      },
      {
        ref: refScreenMeusDependentes.current,
        name: "screenMeusDependentes",
        deviceType: "iphone",
      },
      {
        ref: refScreenDetalheCobranca.current,
        name: "screenDetalheCobranca",
        deviceType: "iphone",
      },
      {
        ref: refScreenCarteirinhaDigital.current,
        name: "screenCarteirinhaDigital",
        deviceType: "iphone",
      },
      {
        ref: refScreenMenuAberto.current,
        name: "screenMenuAberto",
        deviceType: "iphone",
      },
    ] as ArrayZipFileType[];

    exportAsImage({
      dados: imagensToZipAndDownload,
      fileNameEnd: "iPhone",
    });
  };

  const downloadIPadPrints = () => {
    const imagensToZipAndDownload = [
      {
        ref: refScreenIPadLogin.current,
        name: "screenIPadLogin",
        deviceType: "ipad",
      },
      {
        ref: refScreenIPadMeusDebitos.current,
        name: "screenIPadMeusDebitos",
        deviceType: "ipad",
      },
      {
        ref: refScreenIPadEscolhaPerfilLogin.current,
        name: "screenIPadEscolhaPerfilLogin",
        deviceType: "ipad",
      },
      {
        ref: refScreenIPadMeusDependentes.current,
        name: "screenIPadMeusDependentes",
        deviceType: "ipad",
      },
      {
        ref: refScreenIPadDetalheCobranca.current,
        name: "screenIPadDetalheCobranca",
        deviceType: "ipad",
      },
      {
        ref: refScreenIPadCarteirinhaDigital.current,
        name: "screenIPadCarteirinhaDigital",
        deviceType: "ipad",
      },
      {
        ref: refScreenIPadMenuAberto.current,
        name: "screenIPadMenuAberto",
        deviceType: "ipad",
      },
    ] as ArrayZipFileType[];

    exportAsImage({
      dados: imagensToZipAndDownload,
      fileNameEnd: "iPad",
    });
  };

  const downloadAllPrints = () => {
    const imagensToZipAndDownload = [
      {
        ref: refScreenLogin.current,
        name: "screenLogin",
        deviceType: "iphone",
      },
      {
        ref: refScreenMeusDebitos.current,
        name: "screenMeusDebitos",
        deviceType: "iphone",
      },
      {
        ref: refScreenEscolhaPerfilLogin.current,
        name: "screenEscolhaPerfilLogin",
        deviceType: "iphone",
      },
      {
        ref: refScreenMeusDependentes.current,
        name: "screenMeusDependentes",
        deviceType: "iphone",
      },
      {
        ref: refScreenDetalheCobranca.current,
        name: "screenDetalheCobranca",
        deviceType: "iphone",
      },
      {
        ref: refScreenCarteirinhaDigital.current,
        name: "screenCarteirinhaDigital",
        deviceType: "iphone",
      },
      {
        ref: refScreenMenuAberto.current,
        name: "screenMenuAberto",
        deviceType: "iphone",
      },
      {
        ref: refScreenIPadLogin.current,
        name: "screenIPadLogin",
        deviceType: "ipad",
      },
      {
        ref: refScreenIPadMeusDebitos.current,
        name: "screenIPadMeusDebitos",
        deviceType: "ipad",
      },
      {
        ref: refScreenIPadEscolhaPerfilLogin.current,
        name: "screenIPadEscolhaPerfilLogin",
        deviceType: "ipad",
      },
      {
        ref: refScreenIPadMeusDependentes.current,
        name: "screenIPadMeusDependentes",
        deviceType: "ipad",
      },
      {
        ref: refScreenIPadDetalheCobranca.current,
        name: "screenIPadDetalheCobranca",
        deviceType: "ipad",
      },
      {
        ref: refScreenIPadCarteirinhaDigital.current,
        name: "screenIPadCarteirinhaDigital",
        deviceType: "ipad",
      },
      {
        ref: refScreenIPadMenuAberto.current,
        name: "screenIPadMenuAberto",
        deviceType: "ipad",
      },
    ] as ArrayZipFileType[];

    exportAsImage({
      dados: imagensToZipAndDownload,
      fileNameEnd: "Todos",
    });
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
            title="iPhone .zip"
            onPress={() => downloadIPhonePrints()}
            bgColor="#0077BD"
          />
          <Button
            title="iPad .zip"
            onPress={() => downloadIPadPrints()}
            bgColor="#815A20"
          />
          <Button title="Todos .zip" onPress={() => downloadAllPrints()} />
        </div>
      </div>
    </div>
  );
}
