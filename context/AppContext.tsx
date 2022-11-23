import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type appContextType = {
  language: string | null,
  setLanguage: React.Dispatch<React.SetStateAction<string | null>>,
  logo: string,
  setLogo: React.Dispatch<React.SetStateAction<string>>
}

const appContextDefault: appContextType = {
  language: null,
  setLanguage: () => {},
  logo: '',
  setLogo: () => {}
}

const AppContext = createContext<appContextType>(appContextDefault);


export const AppContextProvider = ({ children }: {children: ReactNode}) => {
    const [language, setLanguage] = useState<string | null>(null);
    const [logo, setLogo] = useState<string>('/img/logos/logo_purple.png');

    useEffect(() => {
      setLanguage(localStorage.getItem("language"));
    }, []);

    const value = {
      language,
      setLanguage, 
      logo,
      setLogo
    };

    return (
        <AppContext.Provider
          value={value}
        >
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)