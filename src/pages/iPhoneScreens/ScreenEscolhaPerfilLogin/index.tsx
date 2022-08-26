import IphoneBottomLine from "../../../components/IphoneBottomLine";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoAlertCircleOutline } from "react-icons/io5";
import CardProfile from "../../../components/CardProfile";

import "./styles.scss";

const LISTA_PERFIS = [
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
  {
    key: 6,
    imgUrl: "/user-male.png",
    name: "Pedro",
  },
];

type PropsType = {
  isIpad?: boolean;
};

export default function ScreenEscolhaPerfilLogin({
  isIpad = false,
}: PropsType) {
  const { refScreenEscolhaPerfilLogin } = useSettingsContext();

  return (
    <div
      className="screen-escolhaperfil-container"
      ref={refScreenEscolhaPerfilLogin}
      style={{ borderRadius: isIpad ? ".7em" : "0" }}
    >
      <div className="screen-container">
        <div className="perfil-warning">
          <div>
            <IoAlertCircleOutline size={60} color="#000000" />
          </div>
          <div className="warning-text">
            <p>
              Detectamos mais de um perfil para o mesmo CPF.
              <br />
              Selecione o perfil desejado.
            </p>
          </div>
        </div>
        <div>
          {LISTA_PERFIS.map((item) => (
            <CardProfile
              key={item.key}
              data={item}
              iconComponent={
                <FaArrowRight
                  size={46}
                  style={{ color: "var(--color-secondary)" }}
                />
              }
            />
          ))}
        </div>

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
