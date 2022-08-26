import IphoneBottomLine from "../../../components/IphoneBottomLine";
import { useSettingsContext } from "../../../contexts/useSettingsContext";

import "./styles.scss";
import AppHeader from "../../../components/AppHeader";
import AppFooter from "../../../components/AppFooter";
import BoletoCard from "../../../components/BoletoCard";

const LISTA_BOLETOS = [
  {
    key: 1,
    data: "10/07/2022",
    valor: "R$ 390,00",
    pago: false,
  },
  {
    key: 2,
    data: "10/08/2022",
    valor: "R$ 390,00",
    pago: true,
  },
  {
    key: 3,
    data: "10/09/2022",
    valor: "R$ 390,00",
    pago: true,
  },
  {
    key: 4,
    data: "10/10/2022",
    valor: "R$ 390,00",
    pago: true,
  },
  {
    key: 5,
    data: "10/11/2022",
    valor: "R$ 390,00",
    pago: true,
  },
  {
    key: 6,
    data: "10/12/2022",
    valor: "R$ 390,00",
    pago: true,
  },
  {
    key: 7,
    data: "10/01/2023",
    valor: "R$ 390,00",
    pago: true,
  },
  {
    key: 8,
    data: "10/02/2023",
    valor: "R$ 390,00",
    pago: true,
  },
];

export default function ScreenFinanceiro() {
  const { refScreenFinanceiro } = useSettingsContext();

  return (
    <div className="screen-financeiro-container" ref={refScreenFinanceiro}>
      <div className="screen-container">
        <AppHeader title="Financeiro" />

        <div className="list-header">
          <div></div>
          <div>
            <p>Vencimento</p>
          </div>
          <div>
            <p>Valor</p>
          </div>
          <div></div>
        </div>

        <div className="list-container">
          {LISTA_BOLETOS.map((item) => (
            <BoletoCard data={item} key={item.key} />
          ))}
        </div>
      </div>

      <AppFooter />

      <IphoneBottomLine />
    </div>
  );
}
