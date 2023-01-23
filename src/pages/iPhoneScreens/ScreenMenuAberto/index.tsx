import IphoneBottomLine from "../../../components/IphoneBottomLine";
import { useSettingsContext } from "../../../contexts/useSettingsContext";
import AppFooter from "../../../components/AppFooter";
import ScreenMeusDebitos from "../ScreenMeusDebitos";
import { HiLockClosed, HiOutlineHome, HiUsers } from "react-icons/hi";
import { BsCashStack } from "react-icons/bs";
import {
  IoGridOutline,
  IoWallet,
  IoCalendar,
  IoLogOut,
  IoTrophy,
} from "react-icons/io5";
import { FaUser, FaDumbbell, FaUserCheck, FaUserFriends } from "react-icons/fa";

import "./styles.scss";

type PropsType = {
  isIpad?: boolean;
};

type MenuItemProps = {
  text: string;
  iconComponent: any;
  isSelected?: boolean;
};

const ICON_MENU_SIZE = 40;

const MENU_LIST = [
  {
    id: 1,
    text: "Acesso Rápido",
    iconComponent: <IoGridOutline color="#747474" size={ICON_MENU_SIZE} />,
    isSelected: true,
  },
  {
    id: 2,
    text: "Institucional",
    iconComponent: <HiOutlineHome color="#747474" size={ICON_MENU_SIZE} />,
    isSelected: false,
  },
  {
    id: 3,
    text: "Débitos",
    iconComponent: <BsCashStack color="#747474" size={ICON_MENU_SIZE} />,
    isSelected: false,
  },
  {
    id: 4,
    text: "Dependentes",
    iconComponent: <FaUserFriends color="#747474" size={ICON_MENU_SIZE} />,
    isSelected: false,
  },
  {
    id: 5,
    text: "Meus Dados",
    iconComponent: <FaUser color="#747474" size={ICON_MENU_SIZE} />,
    isSelected: false,
  },
  // {
  //   id: 6,
  //   text: "Reservas",
  //   iconComponent: <IoCalendar color="#747474" size={ICON_MENU_SIZE} />,
  //   isSelected: false,
  // },
  // {
  //   id: 7,
  //   text: "Consumo",
  //   iconComponent: <IoWallet color="#747474" size={ICON_MENU_SIZE} />,
  //   isSelected: false,
  // },
  // {
  //   id: 8,
  //   text: "Convites",
  //   iconComponent: <FaUserCheck color="#747474" size={ICON_MENU_SIZE} />,
  //   isSelected: false,
  // },
  {
    id: 9,
    text: "Trocar Senha",
    iconComponent: <HiLockClosed color="#747474" size={ICON_MENU_SIZE} />,
    isSelected: false,
  },
  // {
  //   id: 10,
  //   text: "Meus Treinos",
  //   iconComponent: <FaDumbbell color="#747474" size={ICON_MENU_SIZE} />,
  //   isSelected: false,
  // },
  // {
  //   id: 11,
  //   text: "Modalidades",
  //   iconComponent: <IoTrophy color="#747474" size={ICON_MENU_SIZE} />,
  //   isSelected: false,
  // },
  {
    id: 12,
    text: "Sair",
    iconComponent: <IoLogOut color="#747474" size={ICON_MENU_SIZE} />,
    isSelected: false,
  },
];

export default function ScreenMenuAberto({ isIpad = false }: PropsType) {
  const { refScreenMenuAberto, colorSecondary, fileFundoMenuImg } =
    useSettingsContext();

  const MenuItem = ({
    text,
    iconComponent,
    isSelected = false,
  }: MenuItemProps) => {
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
            {MENU_LIST.map((menu) => (
              <MenuItem
                key={menu.id}
                text={menu.text}
                iconComponent={menu.iconComponent}
                isSelected={menu.isSelected}
              />
            ))}
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
