"use client";
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { Button } from '@/components/ui/button';
import { useTheme } from "next-themes";
import { IoPersonCircleSharp } from "react-icons/io5";
import navbarLink from '@/constants/navbarLink';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (
        <section className='max-w-7xl px-4 mx-auto py-4'>
            <nav className='flex justify-between items-center  relative'>
                <div>
                    <Link href="/">
                        <img src="" alt='logo' />
                    </Link>
                </div>
                {/* Navigation menu */}
                <div
                    ref={menuRef}
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } md:block absolute md:relative top-full right-0 md:top-auto md:right-auto bg-white md:bg-transparent w-48 md:w-auto shadow-lg md:shadow-none rounded-lg md:rounded-none z-10`}
                >
                    <ul className='flex flex-col md:flex-row justify-between items-start md:items-center gap-5 p-4 md:p-0'>
                        {navbarLink.map((item, index) => (
                            <li key={index} className='w-full md:w-auto'>
                                <Link 
                                    href={item.link}
                                    className='block w-full hover:bg-gray-100 md:hover:bg-transparent py-2 md:py-0'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile controls - visible only on mobile */}
                <div className='flex items-center  md:justify-between gap-2  z-20'>
                    <button
                        className='p-2 '
                    >
                        <Link href="/auth">
                            <IoPersonCircleSharp  size={24}/>
                        </Link>
                    </button>
                    <button
                        className='p-2'
                        onClick={()=> setTheme(theme === "dark" ? "light" : "dark") }
                    >
                        {theme === "dark" ? (
                            <MdDarkMode size={20} />
                        ) : (
                            < MdOutlineDarkMode size={20} />
                        )}
                    </button>
                    <button 
                        className='p-2 md:hidden'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <HiMenu size={24} />
                    </button>
                </div>
            </nav>
        </section>
    )
    }

export default Navbar