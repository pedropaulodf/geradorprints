import { FiGithub } from "react-icons/fi";
import { MdOutlineAddToDrive } from "react-icons/md";
import { SiNotion } from "react-icons/si";
import { RiImageEditLine } from "react-icons/ri";
import { useSettingsContext } from "../../contexts/useSettingsContext";
import { ArrayZipFileType, exportAsImage } from "../../Utils/utils";
import Button from "../Button";
import "./styles.scss";
import { useState } from "react";

export type HeaderButtonStatusType =
  | "btnIphone"
  | "btnIpad"
  | "btnTodos"
  | undefined;

export type HeaderButtonStatusIsLoading = {
  isLoading: boolean;
  btnIsLoading: HeaderButtonStatusType;
};

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

  const [headerButtonIsLoading, setHeaderButtonIsLoading] =
    useState<HeaderButtonStatusIsLoading>({
      isLoading: false,
      btnIsLoading: undefined,
    });

  const resetHeaderButtonIsLoading = () => {
    setHeaderButtonIsLoading({
      isLoading: false,
      btnIsLoading: undefined,
    });
  };

  const downloadIPhonePrints = async () => {
    setHeaderButtonIsLoading({
      isLoading: true,
      btnIsLoading: "btnIphone",
    });
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

    await exportAsImage({
      dados: imagensToZipAndDownload,
      fileNameEnd: "iPhone",
    });

    // Reseta os botoes
    resetHeaderButtonIsLoading();
  };

  const downloadIPadPrints = async () => {
    setHeaderButtonIsLoading({
      isLoading: true,
      btnIsLoading: "btnIpad",
    });
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

    await exportAsImage({
      dados: imagensToZipAndDownload,
      fileNameEnd: "iPad",
    });
    // Reseta os botoes
    resetHeaderButtonIsLoading();
  };

  const downloadAllPrints = async () => {
    setHeaderButtonIsLoading({
      isLoading: true,
      btnIsLoading: "btnTodos",
    });
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

    await exportAsImage({
      dados: imagensToZipAndDownload,
      fileNameEnd: "Todos",
    });
    // Reseta os botoes
    resetHeaderButtonIsLoading();
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
            <a
              href="https://editordeimagens-joaopedrobrgs.vercel.app/"
              target="_blank"
              title="Editor de Imagens"
            >
              <div className="header-icon-container">
                <RiImageEditLine color="#333333" size={22} />
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
            headerButtonStatus={headerButtonIsLoading}
            buttonTipe="btnIphone"
          />
          <Button
            title="iPad .zip"
            onPress={() => downloadIPadPrints()}
            bgColor="#815A20"
            headerButtonStatus={headerButtonIsLoading}
            buttonTipe="btnIpad"
          />
          <Button
            title="Todos .zip"
            onPress={() => downloadAllPrints()}
            headerButtonStatus={headerButtonIsLoading}
            buttonTipe="btnTodos"
          />
        </div>
      </div>
    </div>
  );
}
