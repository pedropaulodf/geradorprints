import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type PropsSettingsContext = {
  colorPrimary: string;
  setColorPrimary: Dispatch<SetStateAction<string>>;
  colorSecondary: string;
  setColorSecondary: Dispatch<SetStateAction<string>>;
  fundoAppOpacity: number;
  setFundoAppOpacity: Dispatch<SetStateAction<number>>;
  fundoAppBlur: number;
  setFundoAppBlur: Dispatch<SetStateAction<number>>;
  loginBoxOpacity: number;
  setloginBoxOpacity: Dispatch<SetStateAction<number>>;
};

const SettingsContext = createContext<PropsSettingsContext>(
  {} as PropsSettingsContext
);

export const SettingsContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [colorPrimary, setColorPrimary] = useState("#0077bd");
  const [colorSecondary, setColorSecondary] = useState("#ed3237");
  const [fundoAppOpacity, setFundoAppOpacity] = useState(70);
  const [fundoAppBlur, setFundoAppBlur] = useState(3);
  const [loginBoxOpacity, setloginBoxOpacity] = useState(100);

  return (
    <SettingsContext.Provider
      value={{
        colorPrimary,
        setColorPrimary,
        colorSecondary,
        setColorSecondary,
        fundoAppOpacity,
        setFundoAppOpacity,
        fundoAppBlur,
        setFundoAppBlur,
        loginBoxOpacity,
        setloginBoxOpacity,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

// Hook to provide access to context object
export const useSettingsContext = () => {
  return useContext(SettingsContext);
};
