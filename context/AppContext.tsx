import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type appContextType = {
  language: string | null,
  setLanguage: React.Dispatch<React.SetStateAction<string | null>>
}

const appContextDefault: appContextType = {
  language: null,
  setLanguage: () => {}
}

const AppContext = createContext<appContextType>(appContextDefault);


export const AppContextProvider = ({ children }: {children: ReactNode}) => {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
      setLanguage(localStorage.getItem("language"));
    }, []);

    const value = {
      language,
      setLanguage
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