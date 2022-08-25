import AppHeader from "../../components/AppHeader";
import IphoneBottomLine from "../../components/IphoneBottomLine";
import { useSettingsContext } from "../../contexts/useSettingsContext";
import { FiCopy, FiX } from "react-icons/fi";

import bancoUniCredLogoSvg from "../../assets/banco-unicred.svg";

import "./styles.scss";

export default function ScreenDetalheCobranca() {
  const { refScreenDetalheCobranca } = useSettingsContext();

  return (
    <div
      className="screen-detalhecobranca-container"
      ref={refScreenDetalheCobranca}
    >
      <AppHeader title="" onlyAppBar />
      <div className="screen-container">
        <div className="close-icon">
          <FiX color="#000000" size={60} />
        </div>
        <div className="description-container">
          <p className="label">
            <strong>Descrição:</strong>
          </p>
          <p className="text">TAXA DE MANUTENÇÃO MENSAL</p>
        </div>
        <hr />
        <div className="horizontal-items">
          <p className="label">
            <strong>Valor do Débito:</strong>
          </p>
          <p className="text">R$ 390,00</p>
        </div>
        <hr />
        <div className="horizontal-items">
          <p className="label">
            <strong>Data de Vencimento:</strong>
          </p>
          <p className="text">10/07/2022</p>
        </div>
        <hr />
        <div className="horizontal-items bank-box">
          <p className="label">
            <strong>Banco Emissor:</strong>
          </p>
          <img
            src={bancoUniCredLogoSvg}
            alt="Banco logo"
            className="bank-logo"
          />
        </div>
        <hr />

        <div className="typing-line-container">
          <p>Linha Digitável</p>
          <input
            type="text"
            value="53010800004238200000078115433490400039000"
          />
          <button type="button">
            <FiCopy color="#ffffff" size={42} />
            Copiar
          </button>
        </div>
      </div>
      <IphoneBottomLine />
    </div>
  );
}
