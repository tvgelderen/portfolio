import React, { createContext, useContext, useState } from "react"

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

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