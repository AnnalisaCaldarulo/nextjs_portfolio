'use client';
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useMode } from "../Context/ModeContext";
const navLinks = [
    {
        title: 'About',
        href: '#about'
    },
    {
        title: 'Projects',
        href: '#projects'
    },
    {
        title: 'Contact me',
        href: '#contact'
    },
]


const Navbar = () => {
    const { darkMode, toggleDarkMode } = useMode();

    
    const [navOpen, setNavOpen] = useState(false);
    return (
        <nav className={` ${darkMode ? 'dark' : ''}  fixed top-0 left-0 right-0 z-10  dark:bg-[#121212] bg-[#e3d8d8] bg-opacity-95 border  dark:border-[#33353F] border-b-[#afa2a2]`}>
            <div className="lg:py-4  flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"} className="text-2xl md:text-4xl font-semibold dark:text-white ">portfolio</Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navOpen ? (
                            <button onClick={() => setNavOpen(true)} className="text-slate-400 flex items-center px-3 py-2 border rounded border-slate-400 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={() => setNavOpen(false)} className="text-slate-400 flex items-center px-3 py-2 border rounded border-slate-400 hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 sm:p-0 sm:flex-row sm:space-x-8 mt-0 items-center">
                        {
                            navLinks.map((link, index) =>
                            (
                                <li key={index}>
                                    <NavLink href={link.href} title={link.title} />

                                </li>
                            ))
                        }
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
            {navOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar;