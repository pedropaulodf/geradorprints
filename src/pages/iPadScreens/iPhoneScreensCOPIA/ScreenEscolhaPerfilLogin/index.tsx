import IphoneBottomLine from "../../../../components/IphoneBottomLine";
import { useSettingsContext } from "../../../../contexts/useSettingsContext";
import { FaArrowRight, FaArrowLeft, FaChevronUp } from "react-icons/fa";
import { IoAlertCircleOutline } from "react-icons/io5";
import CardProfile from "../../../../components/CardProfile";

import "./styles.scss";
import AppHeader from "../../../../components/AppHeader";

const LISTA_PERFIS = [
  {
    key: 1,
    titulo: "Título 1234 - Contribuinte",
    titulos: [
      {
        key: 1,
        imgUrl: "/user-female.png",
        name: "Lais",
      },
      {
        key: 2,
        imgUrl: "/user-male.png",
        name: "Chris",
      },
    ],
  },
  {
    key: 2,
    titulo: "Título 9876 - Funcionário",
    titulos: [
      {
        key: 1,
        imgUrl: "/user-female.png",
        name: "Lais",
      },
      {
        key: 2,
        imgUrl: "/user-male3.png",
        name: "Theo",
      },
      {
        key: 3,
        imgUrl: "/user-male.png",
        name: "Chris",
      },
      {
        key: 4,
        imgUrl: "/user-male2.png",
        name: "Pedro",
      },
    ],
  },
];

type PropsType = {
  isIpad?: boolean;
};

export default function ScreenEscolhaPerfilLogin({
  isIpad = false,
}: PropsType) {
  const { colorSecondary } = useSettingsContext();

  return (
    <div
      className="screen-escolhaperfil-container"
      style={{ borderRadius: isIpad ? ".3em" : "0" }}
    >
      <AppHeader title="" onlyAppBar onlyHeader={isIpad} />
      <div className="screen-container">
        <div className="perfil-warning">
          <div className="bg-icon">
            <IoAlertCircleOutline size={60} color="#000000" />
          </div>
          <div className="warning-text">
            <p>
              <strong>
                Detectamos mais de um perfil
                <br />
                para o mesmo CPF
              </strong>
              <br />
              Selecione o perfil desejado
            </p>
          </div>
        </div>
        {LISTA_PERFIS.map((item) => (
          <div
            key={item.key}
            className="titulo-box"
            style={{
              backgroundColor: `${colorSecondary}20`,
            }}
          >
            <div
              className="titulo-title-box"
              style={{
                backgroundColor: `${colorSecondary}20`,
              }}
            >
              <p>{item.titulo}</p>
              <div className="icon">
                <FaChevronUp size={38} style={{ color: "#2e2e2e" }} />
              </div>
            </div>
            <div className="titulo-card-box">
              {item.titulos.map((tit) => (
                <CardProfile
                  key={tit.key}
                  data={tit}
                  iconComponent={
                    <FaArrowRight
                      size={46}
                      style={{ color: "var(--color-secondary)" }}
                    />
                  }
                />
              ))}
            </div>
          </div>
        ))}

        <div className="bottom-left-arrow">
          <div>
            <FaArrowLeft size={50} color="#ffffff" />
          </div>
        </div>
      </div>

      {!isIpad && <IphoneBottomLine />}
    </div>
  );
}
