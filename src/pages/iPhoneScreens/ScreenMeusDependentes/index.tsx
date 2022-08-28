import IphoneBottomLine from "../../../components/IphoneBottomLine";
import { useSettingsContext } from "../../../contexts/useSettingsContext";

import CardProfile from "../../../components/CardProfile";
import AppHeader from "../../../components/AppHeader";
import AppFooter from "../../../components/AppFooter";

import QrCodeSvg from "../../../assets/svgComponents/QrCodeSvg";
import "./styles.scss";

const LISTA_PERFIS = [
  // {
  //   key: 1,
  //   imgUrl: "/user-female.png",
  //   name: "Lais",
  // },
  {
    key: 2,
    imgUrl: "/user-male.png",
    name: "Chris",
  },
  {
    key: 3,
    imgUrl: "/user-male.png",
    name: "Davi",
  },
  {
    key: 4,
    imgUrl: "/user-male.png",
    name: "Theo",
  },
  {
    key: 5,
    imgUrl: "/user-female.png",
    name: "Elisa",
  },
  // {
  //   key: 6,
  //   imgUrl: "/user-male.png",
  //   name: "Pedro",
  // },
];

type PropsType = {
  isIpad?: boolean;
};

export default function ScreenMeusDependentes({ isIpad = false }: PropsType) {
  const { refScreenMeusDependentes, colorSecondary } = useSettingsContext();

  return (
    <div
      className="screen-meusdependentes-container"
      ref={refScreenMeusDependentes}
      style={{ borderRadius: isIpad ? ".3em" : "0" }}
    >
      <div className="screen-container">
        <AppHeader title="Meus Dependentes" />

        <div className="list-container">
          {LISTA_PERFIS.map((item) => (
            <CardProfile
              key={item.key}
              data={item}
              iconComponent={<QrCodeSvg color={colorSecondary} size="4.2em" />}
            />
          ))}
        </div>
      </div>

      <AppFooter isIpad={isIpad} />
      {!isIpad && <IphoneBottomLine />}
    </div>
  );
}
