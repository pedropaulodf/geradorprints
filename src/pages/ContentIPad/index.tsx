import Button from "../../components/Button";
import { useSettingsContext } from "../../contexts/useSettingsContext";
import { exportAsImage } from "../../Utils/utils";
import IPadScreenCateirinhaDigital from "../iPadScreens/IPadScreenCarteirinhaDigital";
import IPadScreenDetalheCobranca from "../iPadScreens/IPadScreenDetalheCobranca";
import IPadScreenEscolhaPerfilLogin from "../iPadScreens/IPadScreenEscolhaPerfilLogin";
import IPadScreenFinanceiro from "../iPadScreens/IPadScreenFinanceiro";
import IPadScreenLogin from "../iPadScreens/IPadScreenLogin";
import IPadScreenMenuAberto from "../iPadScreens/IPadScreenMenuAberto";
import IPadScreenMeusDependentes from "../iPadScreens/IPadScreenMeusDependentes";

import "./styles.scss";

export default function ContentIPad() {
  const {
    refScreenIPadLogin,
    refScreenIPadFinanceiro,
    refScreenIPadEscolhaPerfilLogin,
    refScreenIPadMeusDependentes,
    refScreenIPadDetalheCobranca,
    refScreenIPadCarteirinhaDigital,
    refScreenIPadMenuAberto,
  } = useSettingsContext();

  return (
    <div className="content-ipad-container">
      <h3>iPad:</h3>
      <div className="screens-group-row">
        <div>
          <IPadScreenLogin />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="1100 x 1471"
              onPress={() =>
                exportAsImage(
                  refScreenIPadLogin.current,
                  "screenIPadLogin",
                  "ipad"
                )
              }
            />
          </div>
        </div>
        <div>
          <IPadScreenFinanceiro />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="1100 x 1471"
              onPress={() =>
                exportAsImage(
                  refScreenIPadFinanceiro.current,
                  "screenIPadFinanceiro",
                  "ipad"
                )
              }
            />
          </div>
        </div>
        <div>
          <IPadScreenEscolhaPerfilLogin />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="1100 x 1471"
              onPress={() =>
                exportAsImage(
                  refScreenIPadEscolhaPerfilLogin.current,
                  "screenIPadEscolhaPerfilLogin",
                  "ipad"
                )
              }
            />
          </div>
        </div>
        <div>
          <IPadScreenCateirinhaDigital />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="1100 x 1471"
              onPress={() =>
                exportAsImage(
                  refScreenIPadCarteirinhaDigital.current,
                  "screenIPadCarteirinhaDigital",
                  "ipad"
                )
              }
            />
          </div>
        </div>
        <div>
          <IPadScreenMenuAberto />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="1100 x 1471"
              onPress={() =>
                exportAsImage(
                  refScreenIPadMenuAberto.current,
                  "screenIPadMenuAberto",
                  "ipad"
                )
              }
            />
          </div>
        </div>
        <div>
          <IPadScreenMeusDependentes />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="1100 x 1471"
              onPress={() =>
                exportAsImage(
                  refScreenIPadMeusDependentes.current,
                  "screenIPadMeusDependentes",
                  "ipad"
                )
              }
            />
          </div>
        </div>
        <div>
          <IPadScreenDetalheCobranca />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="1100 x 1471"
              onPress={() =>
                exportAsImage(
                  refScreenIPadDetalheCobranca.current,
                  "screenIPadDetalheCobranca",
                  "ipad"
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
