import { FaArrowRight } from "react-icons/fa";

import "./styles.scss";

type BoletoCardPropsType = {
  data: BoletoCardItemType;
};
export type BoletoCardItemType = {
  key: number;
  emAberto: boolean;
  data: string;
  valor: string;
  descricao: string;
  aVencer: boolean;
};

export default function BoletoCard({ data }: BoletoCardPropsType) {
  return (
    <div key={data.key} className="cardboleto-container">
      <div>
        <div
          className="payment-status"
          style={{
            backgroundColor: data.emAberto
              ? data.aVencer
                ? "#ff8800"
                : "#ee5d5d"
              : "#2f993d",
          }}
        >
          <p>
            {data.emAberto ? (data.aVencer ? "A Vencer" : "Vencido") : "Pago"}
          </p>
        </div>
      </div>
      <div>
        <p className="txt-data">
          <strong>{data.data}</strong>
        </p>
        <p className="txt-valor">{data.valor}</p>
      </div>
      <div>
        <p className="txt-descricao">
          <strong>{data.descricao}</strong>
        </p>
      </div>
      <div>
        <div className="arrow-left-icon-box">
          <FaArrowRight color="#ffffff" size={22} />
        </div>
      </div>
    </div>
  );
}
