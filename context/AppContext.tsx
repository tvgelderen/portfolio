import React, { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [language, setLanguage] = useState<string>();

    useEffect(() => {
      setLanguage(localStorage.getItem("language"))
    }, [])

    return (
        <AppContext.Provider
          value={{
            language,
            setLanguage
          }}
        >
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)