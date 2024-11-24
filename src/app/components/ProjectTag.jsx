import React from 'react'

function ProjectTag({ name, onClick, isSelected }) {
    const buttonStyles = isSelected
        ? 'dark:text-white  border-primary-500'
        : 'dark:text-[#ADB7BE] text-[#555555] border-slate-600 dark:hover:border-white dark:hover:text-white hover:text-primary-500 hover:border-primary-500';
    return (
        <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-lg cursor-pointer`}
            onClick={()=>onClick(name)}>
            {name}
        </button>
    )
}

export default ProjectTag