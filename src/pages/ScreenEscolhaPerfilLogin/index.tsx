import IphoneBottomLine from "../../components/IphoneBottomLine";
import { useSettingsContext } from "../../contexts/useSettingsContext";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoAlertCircleOutline } from "react-icons/io5";

import { userImageBase64 } from "../../assets/base64/user-icon";
import "./styles.scss";

const LISTA_PERFIS = [
  {
    key: 1,
    imgUrl: userImageBase64,
    name: "Lais",
  },
  {
    key: 2,
    imgUrl: userImageBase64,
    name: "Chris",
  },
  {
    key: 3,
    imgUrl: userImageBase64,
    name: "Davi",
  },
  {
    key: 4,
    imgUrl: userImageBase64,
    name: "Theo",
  },
  {
    key: 5,
    imgUrl: userImageBase64,
    name: "Elisa",
  },
  {
    key: 6,
    imgUrl: userImageBase64,
    name: "Pedro",
  },
];

export default function ScreenEscolhaPerfilLogin() {
  const { refScreenEscolhaPerfilLogin } = useSettingsContext();

  return (
    <div
      className="screen-escolhaperfil-container"
      ref={refScreenEscolhaPerfilLogin}
    >
      <div className="screen-container">
        <div>
          <div>
            <IoAlertCircleOutline size={22} color="#000000" />
          </div>
          <div>
            <p>
              Detectamos mais de um perfil para o mesmo CPF.
              <br />
              Selecione o perfil desejado.
            </p>
          </div>
        </div>
        <div className="list-container">
          {LISTA_PERFIS.map((item) => (
            <div key={item.key}>
              <div>
                <img src={item.imgUrl} alt={`${item.name} photo`} />
              </div>
              <div>{item.name}</div>
              <div>
                <FaArrowRight
                  size={22}
                  style={{ color: "var(--color-secondary)" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-left-arrow">
          <FaArrowLeft size={22} color="#ffffff" />
        </div>
      </div>

      <IphoneBottomLine />
    </div>
  );
}
