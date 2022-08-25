import Button from "../../components/Button";
import { useSettingsContext } from "../../contexts/useSettingsContext";
import { exportAsImage } from "../../Utils/utils";
import ScreenDetalheCobranca from "../ScreenDetalheCobranca";
import ScreenEscolhaPerfilLogin from "../ScreenEscolhaPerfilLogin";
import ScreenFinanceiro from "../ScreenFinanceiro";
import ScreenLogin from "../ScreenLogin";
import ScreenMeusDependentes from "../ScreenMeusDependentes";
import "./styles.scss";

export default function Content() {
  const {
    refScreenLogin,
    refScreenFinanceiro,
    refScreenEscolhaPerfilLogin,
    refScreenMeusDependentes,
    refScreenDetalheCobranca,
  } = useSettingsContext();

  return (
    <div className="content-container">
      <h3>iPhone:</h3>
      {/* <iframe
        src="http://127.0.0.1:5173/screenlogin"
        // width="167"
        // height="393"
        width="1125"
        height="2436"
        style={{ zoom: 0.2 }}
      /> */}
      <div className="screens-group-row">
        <div>
          <ScreenLogin />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="720 x 1553"
              onPress={() =>
                exportAsImage(refScreenLogin.current, "screenLogin")
              }
            />
          </div>
        </div>
        <div>
          <ScreenFinanceiro />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="720 x 1553"
              onPress={() =>
                exportAsImage(refScreenFinanceiro.current, "screenFinanceiro")
              }
            />
          </div>
        </div>
        <div>
          <ScreenEscolhaPerfilLogin />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="720 x 1553"
              onPress={() =>
                exportAsImage(
                  refScreenEscolhaPerfilLogin.current,
                  "screenEscolhaPerfilLogin"
                )
              }
            />
          </div>
        </div>
        <div>
          <ScreenMeusDependentes />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="720 x 1553"
              onPress={() =>
                exportAsImage(
                  refScreenMeusDependentes.current,
                  "screenMeusDependentes"
                )
              }
            />
          </div>
        </div>
        <div>
          <ScreenDetalheCobranca />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="720 x 1553"
              onPress={() =>
                exportAsImage(
                  refScreenDetalheCobranca.current,
                  "screenDetalheCobranca"
                )
              }
            />
          </div>
        </div>
      </div>

      <hr style={{ margin: "2em 0" }} />
      <h3>iPad:</h3>
    </div>
  );
}
