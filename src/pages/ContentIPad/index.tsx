import Button from "../../components/Button";
import { useSettingsContext } from "../../contexts/useSettingsContext";
import { exportAsImage } from "../../Utils/utils";
import IPadScreenCateirinhaDigital from "../iPadScreens/IPadScreenCarteirinhaDigital";
import IPadScreenDetalheCobranca from "../iPadScreens/IPadScreenDetalheCobranca";
import IPadScreenEscolhaPerfilLogin from "../iPadScreens/IPadScreenEscolhaPerfilLogin";
import IPadScreenMeusDebitos from "../iPadScreens/IPadScreenMeusDebitos";
import IPadScreenLogin from "../iPadScreens/IPadScreenLogin";
import IPadScreenMenuAberto from "../iPadScreens/IPadScreenMenuAberto";
import IPadScreenMeusDependentes from "../iPadScreens/IPadScreenMeusDependentes";

import "./styles.scss";

export default function ContentIPad() {
  const {
    refScreenIPadLogin,
    refScreenIPadMeusDebitos,
    refScreenIPadEscolhaPerfilLogin,
    refScreenIPadMeusDependentes,
    refScreenIPadDetalheCobranca,
    refScreenIPadCarteirinhaDigital,
    refScreenIPadMenuAberto,
  } = useSettingsContext();

  return (
    <div className="content-ipad-container">
      <h3>iPad:</h3>
      <div className="screens-group-row-ipad">
        <div>
          <IPadScreenLogin />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="1100 x 1471"
              onPress={() =>
                exportAsImage({
                  dados: [
                    {
                      ref: refScreenIPadLogin.current,
                      name: "screenIPadLogin",
                    },
                  ],
                  type: "ipad",
                  onlyImage: true,
                })
              }
            />
          </div>
        </div>
        <div>
          <IPadScreenMeusDebitos />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="1100 x 1471"
              onPress={() =>
                exportAsImage({
                  dados: [
                    {
                      ref: refScreenIPadMeusDebitos.current,
                      name: "screenIPadMeusDebitos",
                    },
                  ],
                  type: "ipad",
                  onlyImage: true,
                })
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
                exportAsImage({
                  dados: [
                    {
                      ref: refScreenIPadEscolhaPerfilLogin.current,
                      name: "screenIPadEscolhaPerfilLogin",
                    },
                  ],
                  type: "ipad",
                  onlyImage: true,
                })
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
                exportAsImage({
                  dados: [
                    {
                      ref: refScreenIPadCarteirinhaDigital.current,
                      name: "screenIPadCarteirinhaDigital",
                    },
                  ],
                  type: "ipad",
                  onlyImage: true,
                })
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
                exportAsImage({
                  dados: [
                    {
                      ref: refScreenIPadMenuAberto.current,
                      name: "screenIPadMenuAberto",
                    },
                  ],
                  type: "ipad",
                  onlyImage: true,
                })
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
                exportAsImage({
                  dados: [
                    {
                      ref: refScreenIPadMeusDependentes.current,
                      name: "screenIPadMeusDependentes",
                    },
                  ],
                  type: "ipad",
                  onlyImage: true,
                })
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
                exportAsImage({
                  dados: [
                    {
                      ref: refScreenIPadDetalheCobranca.current,
                      name: "screenIPadDetalheCobranca",
                    },
                  ],
                  type: "ipad",
                  onlyImage: true,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
