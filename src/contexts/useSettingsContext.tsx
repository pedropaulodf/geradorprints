import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";

type PropsSettingsContext = {
  colorPrimary: string;
  setColorPrimary: Dispatch<SetStateAction<string>>;
  colorSecondary: string;
  setColorSecondary: Dispatch<SetStateAction<string>>;
  colorSecondaryText: string;
  setColorSecondaryText: Dispatch<SetStateAction<string>>;
  colorBotaoEntrarText: string;
  setColorBotaoEntrarText: Dispatch<SetStateAction<string>>;
  colorBoxLoginTexts: string;
  setColorBoxLoginTexts: Dispatch<SetStateAction<string>>;
  fundoAppOpacity: number;
  setFundoAppOpacity: Dispatch<SetStateAction<number>>;
  fundoAppBlur: number;
  setFundoAppBlur: Dispatch<SetStateAction<number>>;
  loginBoxOpacity: number;
  setloginBoxOpacity: Dispatch<SetStateAction<number>>;
  refScreenLogin: any;
  refScreenMeusDebitos: any;
  refScreenEscolhaPerfilLogin: any;
  refScreenMeusDependentes: any;
  refScreenDetalheCobranca: any;
  refScreenCarteirinhaDigital: any;
  refScreenMenuAberto: any;
  fileFundoAppImg: string[];
  setFileFundoAppImg: Dispatch<SetStateAction<string[]>>;
  fileFundoMenuImg: string[];
  setFileFundoMenuImg: Dispatch<SetStateAction<string[]>>;
  fileLogoAppImg: string[];
  setFileLogoAppImg: Dispatch<SetStateAction<string[]>>;
  fileLogoCabImg: string[];
  setFileLogoCabImg: Dispatch<SetStateAction<string[]>>;
  screenIpadFullScale: boolean;
  setScreenIpadFullScale: Dispatch<SetStateAction<boolean>>;
  refScreenIPadLogin: any;
  refScreenIPadMeusDebitos: any;
  refScreenIPadEscolhaPerfilLogin: any;
  refScreenIPadMeusDependentes: any;
  refScreenIPadDetalheCobranca: any;
  refScreenIPadCarteirinhaDigital: any;
  refScreenIPadMenuAberto: any;
};

const SettingsContext = createContext<PropsSettingsContext>(
  {} as PropsSettingsContext
);

export const SettingsContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const refScreenLogin = useRef<any>();
  const refScreenMeusDebitos = useRef<any>();
  const refScreenEscolhaPerfilLogin = useRef<any>();
  const refScreenMeusDependentes = useRef<any>();
  const refScreenDetalheCobranca = useRef<any>();
  const refScreenCarteirinhaDigital = useRef<any>();
  const refScreenMenuAberto = useRef<any>();

  const refScreenIPadLogin = useRef<any>();
  const refScreenIPadMeusDebitos = useRef<any>();
  const refScreenIPadEscolhaPerfilLogin = useRef<any>();
  const refScreenIPadMeusDependentes = useRef<any>();
  const refScreenIPadDetalheCobranca = useRef<any>();
  const refScreenIPadCarteirinhaDigital = useRef<any>();
  const refScreenIPadMenuAberto = useRef<any>();

  const [colorPrimary, setColorPrimary] = useState("#FFFFFE");
  const [colorSecondary, setColorSecondary] = useState("#ED3237");
  const [colorSecondaryText, setColorSecondaryText] = useState("#FFFFFF");
  const [colorBotaoEntrarText, setColorBotaoEntrarText] = useState("#FFFFFF");
  const [colorBoxLoginTexts, setColorBoxLoginTexts] = useState("#000000");
  const [fundoAppOpacity, setFundoAppOpacity] = useState(70);
  const [fundoAppBlur, setFundoAppBlur] = useState(5);
  const [loginBoxOpacity, setloginBoxOpacity] = useState(60);
  const [screenIpadFullScale, setScreenIpadFullScale] = useState(true);

  const [fileFundoAppImg, setFileFundoAppImg] = useState<string[]>([]);
  const [fileFundoMenuImg, setFileFundoMenuImg] = useState<string[]>([]);
  const [fileLogoAppImg, setFileLogoAppImg] = useState<string[]>([]);
  const [fileLogoCabImg, setFileLogoCabImg] = useState<string[]>([]);

  return (
    <SettingsContext.Provider
      value={{
        colorPrimary,
        setColorPrimary,
        colorSecondary,
        setColorSecondary,
        colorSecondaryText,
        setColorSecondaryText,
        colorBotaoEntrarText,
        setColorBotaoEntrarText,
        colorBoxLoginTexts,
        setColorBoxLoginTexts,
        fundoAppOpacity,
        setFundoAppOpacity,
        fundoAppBlur,
        setFundoAppBlur,
        loginBoxOpacity,
        setloginBoxOpacity,
        refScreenLogin,
        refScreenMeusDebitos,
        refScreenEscolhaPerfilLogin,
        refScreenMeusDependentes,
        refScreenDetalheCobranca,
        refScreenCarteirinhaDigital,
        refScreenMenuAberto,
        fileFundoAppImg,
        setFileFundoAppImg,
        fileFundoMenuImg,
        setFileFundoMenuImg,
        fileLogoAppImg,
        setFileLogoAppImg,
        fileLogoCabImg,
        setFileLogoCabImg,
        refScreenIPadLogin,
        refScreenIPadMeusDebitos,
        refScreenIPadEscolhaPerfilLogin,
        refScreenIPadMeusDependentes,
        refScreenIPadDetalheCobranca,
        refScreenIPadCarteirinhaDigital,
        refScreenIPadMenuAberto,
        screenIpadFullScale,
        setScreenIpadFullScale,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

// Hook to provide access to context object
export const useSettingsContext = () => {
  return useContext(SettingsContext);
};
