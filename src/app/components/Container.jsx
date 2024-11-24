import React from 'react'
import DarkModeButton from './DarkModeButton';
import { useMode } from '../Context/ModeContext';
function Container({ children }) {
    const { darkMode, toggleDarkMode } = useMode();

    return (
        <>
            <DarkModeButton />

            <div className={` ${darkMode ? 'dark' : ''} flex min-h-screen flex-col dark:bg-[#121212] bg-[#e3d8d8]`}>
                {children}
            </div>
        </>
    )
}

export default Container