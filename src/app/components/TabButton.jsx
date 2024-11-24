import React from 'react'

function TabButton({ active, selectTab, children }) {
    const buttonClasses = active ? 'dark:text-white text-black border-b border-primary-500' : 'dark:text-[#ADB7BE] text-[#444444]'
    return (
        <button onClick={selectTab} className={`${darkMode ? 'dark' : ''}`}>
            <p className={`mr-3 font-semibold dark:hover:text-white hover:text-primary-500 ${buttonClasses}`}>
                {children}
            </p></button>
    )
}

export default TabButton