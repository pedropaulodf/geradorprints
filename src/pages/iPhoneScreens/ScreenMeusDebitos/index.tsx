import IphoneBottomLine from "../../../components/IphoneBottomLine";
import { useSettingsContext } from "../../../contexts/useSettingsContext";

import "./styles.scss";
import AppHeader from "../../../components/AppHeader";
import AppFooter from "../../../components/AppFooter";
import BoletoCard, { BoletoCardItemType } from "../../../components/BoletoCard";

const LISTA_BOLETOS: BoletoCardItemType[] = [
  {
    key: 1,
    data: `10/07/${new Date().getFullYear()}`,
    valor: "R$ 390,00",
    emAberto: true,
    descricao: "MENSALIDADE",
    aVencer: false,
  },
  {
    key: 2,
    data: `10/07/${new Date().getFullYear()}`,
    valor: "R$ 125,00",
    emAberto: true,
    descricao: "Quitação de venda pós-paga",
    aVencer: false,
  },
  {
    key: 3,
    data: `10/07/${new Date().getFullYear()}`,
    valor: "R$ 253,33",
    emAberto: false,
    descricao: "TX. DEPENDENTES",
    aVencer: false,
  },
  {
    key: 4,
    data: `10/08/${new Date().getFullYear()}`,
    valor: "R$ 253,33",
    emAberto: true,
    descricao: "TX. DEPENDENTES",
    aVencer: true,
  },
  {
    key: 5,
    data: `10/08/${new Date().getFullYear()}`,
    valor: "R$ 390,00",
    emAberto: true,
    descricao: "MENSALIDADE",
    aVencer: true,
  },
  {
    key: 6,
    data: `10/09/${new Date().getFullYear()}`,
    valor: "R$ 253,33",
    emAberto: true,
    descricao: "TX. DEPENDENTES",
    aVencer: true,
  },
  {
    key: 7,
    data: `10/09/${new Date().getFullYear()}`,
    valor: "R$ 390,00",
    emAberto: true,
    descricao: "MENSALIDADE",
    aVencer: true,
  },
  {
    key: 8,
    data: `10/10/${new Date().getFullYear()}`,
    valor: "R$ 390,00",
    emAberto: true,
    descricao: "MENSALIDADE",
    aVencer: true,
  },
];

type PropsType = {
  isIpad?: boolean;
};

export default function ScreenMeusDebitos({ isIpad = false }: PropsType) {
  const { refScreenMeusDebitos } = useSettingsContext();

  return (
    <div
      className="screen-financeiro-container"
      ref={refScreenMeusDebitos}
      style={{ borderRadius: isIpad ? ".3em" : "0" }}
    >
      <div className="screen-container">
        <AppHeader title="Meus Débitos" onlyHeader={isIpad} />

        <div className="list-header">
          <div></div>
          <div>
            <p>Data / Valor</p>
          </div>
          <div>
            <p>Descrição</p>
          </div>
          <div></div>
        </div>

        <div className="list-container">
          {LISTA_BOLETOS.map((item) => (
            <BoletoCard data={item} key={item.key} />
          ))}
        </div>
      </div>

      <AppFooter isIpad={isIpad} />

      {!isIpad && <IphoneBottomLine />}
    </div>
  );
}
