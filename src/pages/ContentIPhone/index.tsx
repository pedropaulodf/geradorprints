import Button from "../../components/Button";
import { useSettingsContext } from "../../contexts/useSettingsContext";
import { exportAsImage } from "../../Utils/utils";

import ScreenCarteirinhaDigital from "../iPhoneScreens/ScreenCarteirinhaDigital";
import ScreenDetalheCobranca from "../iPhoneScreens/ScreenDetalheCobranca";
import ScreenEscolhaPerfilLogin from "../iPhoneScreens/ScreenEscolhaPerfilLogin";
import ScreenFinanceiro from "../iPhoneScreens/ScreenFinanceiro";
import ScreenLogin from "../iPhoneScreens/ScreenLogin";
import ScreenMenuAberto from "../iPhoneScreens/ScreenMenuAberto";
import ScreenMeusDependentes from "../iPhoneScreens/ScreenMeusDependentes";

import "./styles.scss";

export default function ContentIPhone() {
  const {
    refScreenLogin,
    refScreenFinanceiro,
    refScreenEscolhaPerfilLogin,
    refScreenMeusDependentes,
    refScreenDetalheCobranca,
    refScreenCarteirinhaDigital,
    refScreenMenuAberto,
  } = useSettingsContext();

  return (
    <div className="content-container">
      <h3>iPhone:</h3>
      <div className="screens-group-row">
        <div>
          <ScreenLogin />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="720 x 1553"
              onPress={() =>
                exportAsImage(refScreenLogin.current, "screenLogin", "iphone")
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
                exportAsImage(
                  refScreenFinanceiro.current,
                  "screenFinanceiro",
                  "iphone"
                )
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
                  "screenEscolhaPerfilLogin",
                  "iphone"
                )
              }
            />
          </div>
        </div>
        <div>
          <ScreenCarteirinhaDigital />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="720 x 1553"
              onPress={() =>
                exportAsImage(
                  refScreenCarteirinhaDigital.current,
                  "screenCarteirinhaDigital",
                  "iphone"
                )
              }
            />
          </div>
        </div>
        <div>
          <ScreenMenuAberto />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="720 x 1553"
              onPress={() =>
                exportAsImage(
                  refScreenMenuAberto.current,
                  "screenMenuAberto",
                  "iphone"
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
                  "screenMeusDependentes",
                  "iphone"
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
                  "screenDetalheCobranca",
                  "iphone"
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
