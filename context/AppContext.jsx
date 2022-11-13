import React, { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [language, setLanguage] = useState();

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