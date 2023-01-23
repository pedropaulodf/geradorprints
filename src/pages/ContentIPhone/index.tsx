import Button from "../../components/Button";
import { useSettingsContext } from "../../contexts/useSettingsContext";
import { changeRootVarAtribute, exportAsImage } from "../../Utils/utils";
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";

import ScreenCarteirinhaDigital from "../iPhoneScreens/ScreenCarteirinhaDigital";
import ScreenDetalheCobranca from "../iPhoneScreens/ScreenDetalheCobranca";
import ScreenEscolhaPerfilLogin from "../iPhoneScreens/ScreenEscolhaPerfilLogin";
import ScreenMeusDebitos from "../iPhoneScreens/ScreenMeusDebitos";
import ScreenLogin from "../iPhoneScreens/ScreenLogin";
import ScreenMenuAberto from "../iPhoneScreens/ScreenMenuAberto";
import ScreenMeusDependentes from "../iPhoneScreens/ScreenMeusDependentes";

import "./styles.scss";

export default function ContentIPhone() {
  const {
    refScreenLogin,
    refScreenMeusDebitos,
    refScreenEscolhaPerfilLogin,
    refScreenMeusDependentes,
    refScreenDetalheCobranca,
    refScreenCarteirinhaDigital,
    refScreenMenuAberto,
  } = useSettingsContext();

  function smallSizeDisposition() {
    // changeRootVarAtribute(
    //   "calc(90vw - 320px)",
    //   "--home-container-content-width-desktop"
    // );
    // changeRootVarAtribute("90vw", "--home-container-content-width-mobile");

    changeRootVarAtribute(
      "scale(0.3)",
      "--screens-group-row-iphone-scale-desktop"
    );
    changeRootVarAtribute(
      "scale(0.3)",
      "--screens-group-row-ipad-scale-desktop"
    );

    changeRootVarAtribute(
      "calc(1553px * -0.37) calc(((90vw - 320px) * 3.15) * -0.37)",
      "--screens-group-row-iphone-margin-desktop"
    );
    changeRootVarAtribute(
      "calc(1553px * -0.37)    calc(((90vw - 0px) * 3.15) * -0.37)",
      "--screens-group-row-iphone-margin-mobile"
    );

    changeRootVarAtribute(
      "calc(1553px * -0.35) calc(((90vw - 320px) * 3.15) * -0.37)",
      "--screens-group-row-ipad-margin-desktop"
    );
    changeRootVarAtribute(
      "calc(1553px * -0.35) calc(((90vw - 0px) * 3.15) * -0.37)",
      "--screens-group-row-ipad-margin-mobile"
    );
  }

  function bigSizeDisposition() {
    // changeRootVarAtribute(
    //   "calc(90vw - 320px)",
    //   "--home-container-content-width-desktop"
    // );
    // changeRootVarAtribute("90vw", "--home-container-content-width-mobile");

    changeRootVarAtribute("none", "--screens-group-row-iphone-scale-desktop");
    changeRootVarAtribute("none", "--screens-group-row-ipad-scale-desktop");
    changeRootVarAtribute("0 0", "--screens-group-row-iphone-margin-desktop");
    changeRootVarAtribute("0 0", "--screens-group-row-iphone-margin-mobile");

    changeRootVarAtribute("0 0", "--screens-group-row-ipad-margin-desktop");
    changeRootVarAtribute("0 0", "--screens-group-row-ipad-margin-mobile");
  }

  return (
    <div className="content-container">
      <div className="flexdirection-row">
        <h3>iPhone:</h3>
        <div className="small-big-buttons-container">
          <button type="button" onClick={() => smallSizeDisposition()}>
            <BsArrowsAngleContract color="#ffffff" size={15} />
          </button>
          <button type="button" onClick={() => bigSizeDisposition()}>
            <BsArrowsAngleExpand color="#ffffff" size={15} />
          </button>
        </div>
      </div>
      <div className="screens-group-row-iphone">
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
          <ScreenMeusDebitos />
          <div style={{ marginTop: "1em" }}>
            <Button
              title="Baixar"
              subTitle="720 x 1553"
              onPress={() =>
                exportAsImage(
                  refScreenMeusDebitos.current,
                  "screenMeusDebitos",
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
