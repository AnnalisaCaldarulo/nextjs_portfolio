'use client';
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

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
    const [navOpen, setNavOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 border border-[#33353F]">
            <div className="lg:py-4  flex flex-wrap items-center justify-between mx-auto p-8 text-white">
                <Link href={"/"} className="text-2xl md:text-4xl font-semibold">portfolio</Link>
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
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link, index) =>
                            (
                                <li key={index}>
                                    <NavLink href={link.href} title={link.title} />

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar;