import { FaArrowRight } from "react-icons/fa";

import "./styles.scss";

type BoletoCardPropsType = {
  data: {
    key: number;
    pago: boolean;
    data: string;
    valor: string;
  };
};

// type CardDataType = ;

export default function BoletoCard({ data }: BoletoCardPropsType) {
  return (
    <div key={data.key} className="cardboleto-container">
      <div>
        <div
          className="dot-payment-status"
          style={{ backgroundColor: data.pago ? "#008000" : "#db1d1d" }}
        ></div>
      </div>
      <div>
        <p>{data.data}</p>
      </div>
      <div>
        <p>{data.valor}</p>
      </div>
      <div>
        <div className="arrow-left-icon-box">
          <FaArrowRight color="#ffffff" size={22} />
        </div>
      </div>
    </div>
  );
}
