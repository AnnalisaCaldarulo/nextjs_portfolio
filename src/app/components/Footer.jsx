import React from 'react'

function Footer() {
    return (
        <footer className={`${darkMode ? 'dark' : ''} z-9 footer border border-t-[#afa2a2] dark:border-t-[#33353f] border-l-transparent border-r-transparent text-white`}>
            <div className=' p-12 flex justify-between'>
                <span className='font-bold dark:text-white text-black'>PORTFOLIO</span>
                <p className='text-slate-600'>All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer