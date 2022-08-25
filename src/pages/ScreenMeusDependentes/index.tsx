import IphoneBottomLine from "../../components/IphoneBottomLine";
import { useSettingsContext } from "../../contexts/useSettingsContext";

import CardProfile from "../../components/CardProfile";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";

import QrCodeSvg from "../../assets/svgComponents/QrCodeSvg";
import "./styles.scss";

const LISTA_PERFIS = [
  // {
  //   key: 1,
  //   imgUrl: "/user.png",
  //   name: "Lais",
  // },
  {
    key: 2,
    imgUrl: "/user.png",
    name: "Chris",
  },
  {
    key: 3,
    imgUrl: "/user.png",
    name: "Davi",
  },
  {
    key: 4,
    imgUrl: "/user.png",
    name: "Theo",
  },
  {
    key: 5,
    imgUrl: "/user.png",
    name: "Elisa",
  },
  // {
  //   key: 6,
  //   imgUrl: "/user.png",
  //   name: "Pedro",
  // },
];

export default function ScreenMeusDependentes() {
  const { refScreenMeusDependentes, colorSecondary } = useSettingsContext();

  return (
    <div
      className="screen-meusdependentes-container"
      ref={refScreenMeusDependentes}
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

      <AppFooter />
      <IphoneBottomLine />
    </div>
  );
}
