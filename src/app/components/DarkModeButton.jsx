import React from 'react'
import { useMode } from '../Context/ModeContext';
import Style from '@/app/ui/style.css'
function DarkModeButton() {
    const { darkMode, toggleDarkMode } = useMode();

    return (
        <button id='darkMode' onClick={toggleDarkMode} className="bg-yellow-300 text-black dark:bg-slate-600 dark:text-white  rounded-lg p-3">
            {darkMode
                ? 'set light'
                : 'set dark'
            }
        </button>)
}

export default DarkModeButton