'use client';
// import { createContext, useContext } from "react";

// const ModeContext = createContext(undefined);

// export const ModeProvider = ({children}) =>{
//     const [dark, setDark] = useState(true);
//     const modeHandler = () => setDark(!dark);

//     return <ModeContext.Provider value={{dark, modeHandler}}></ModeContext.Provider>
// }

// export const useMode = () => useContext(ModeContext);

import { createContext, useState, useContext } from 'react';

const ModeContext = createContext({
    dark: true, // Initial dark mode state
    toggleDarkMode: () => { },
});

export const ModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ModeContext.Provider value={{
            darkMode, toggleDarkMode
        }}>
            {children}
        </ModeContext.Provider>
    );
};

export const useMode = () => useContext(ModeContext);