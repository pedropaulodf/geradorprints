import { useRef } from "react";
import exportAsImage from "../../Utils/utils";
import "./styles.scss";

export default function ScreenLogin() {
  const exportRef = useRef<any>();

  return (
    <div className="screen-login-container" id="idScreenLogin" ref={exportRef}>
      <div>logo</div>
      <div>
        <div>login box</div>
        <div>ESQUECI MINHA SENHA</div>
      </div>
      <div>Desenvolvido por Quality Systems</div>
      <button onClick={() => exportAsImage(exportRef.current, "screenLogin")}>
        Baixar
      </button>
    </div>
  );
}
