import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type AppContextType = {
  language: string | null,
  setLanguage: React.Dispatch<React.SetStateAction<string | null>>,
}

const appContextDefault: AppContextType = {
  language: null,
  setLanguage: () => {},
}

const AppContext = createContext<AppContextType>(appContextDefault);


export const AppContextProvider = ({ children }: {children: ReactNode}) => {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
      if (localStorage.getItem("language"))
        setLanguage(localStorage.getItem("language"));
      else  
        setLanguage(window.navigator.language.substring(0, 2));
    }, []);

    const value = {
      language,
      setLanguage,
    };

    return (
        <AppContext.Provider value={value} >
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)