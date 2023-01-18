import IphoneBottomLine from "../../../components/IphoneBottomLine";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import AppFooter from "../../../components/AppFooter";
import ScreenMeusDebitos from "../ScreenMeusDebitos";
import { BsPersonPlus } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { IoLockClosedOutline, IoExit } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";

import fundo_menu from "../../assets/fundo_menu.png";

import "./styles.scss";

type PropsType = {
  isIpad?: boolean;
};

export default function ScreenMenuAberto({ isIpad = false }: PropsType) {
  const { refScreenMenuAberto, colorSecondary, fileFundoMenuImg } =
    useSettingsContext();

  const MenuItem = ({
    text,
    iconComponent,
    isSelected = false,
  }: {
    text: string;
    iconComponent: any;
    isSelected?: boolean;
  }) => {
    return (
      <div
        className="menu-item-container"
        style={{
          backgroundColor: isSelected ? `${colorSecondary}10` : "rgba(0,0,0,0)",
        }}
      >
        <div className="icon">{iconComponent}</div>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>
    );
  };

  return (
    <div
      className="screen-menuaberto-container"
      ref={refScreenMenuAberto}
      style={{ borderRadius: isIpad ? ".3em" : "0" }}
    >
      <div className="screen-container">
        <div className="bg-overlay"></div>

        <div className="screen-content">
          <div className="top-menu-content">
            <div
              style={{
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
                display: "block",
                position: "absolute",
                height: "100%",
                backgroundImage: `url(${
                  fileFundoMenuImg[0] ?? "fundo_menu_sample.png"
                })`,
                backgroundSize: "cover",
                filter: `opacity(30%)`,
                backgroundPositionX: "center",
              }}
            ></div>
            <div>
              <img src="/user-female.png" alt="User photo" />
              <input type="text" value="Lais" onChange={() => {}} />
            </div>
          </div>

          <div className="menu-items-list">
            <MenuItem
              text="Meus Dados"
              iconComponent={<HiUser color="#333333" size={50} />}
            />
            <MenuItem
              text="Trocar Senha"
              iconComponent={<IoLockClosedOutline color="#333333" size={50} />}
            />
            <MenuItem
              text="MeusDebitos"
              iconComponent={<FaRegMoneyBillAlt color="#333333" size={50} />}
              isSelected
            />
            <MenuItem
              text="Meus Dependentes"
              iconComponent={<BsPersonPlus color="#333333" size={50} />}
            />
            <MenuItem
              text="Sair"
              iconComponent={<IoExit color="#686868" size={50} />}
            />
          </div>

          <div className="credits-quality">
            <p>Desenvolvido por Quality Systems</p>
          </div>
        </div>

        <ScreenMeusDebitos />
      </div>

      <div className="footer-menu-aberto">
        <p className="time">09:55</p>
        <AppFooter isIpad={isIpad} />
        {!isIpad && <IphoneBottomLine />}
      </div>
    </div>
  );
}
