'use client'
import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image'
import Link from "next/link";
import {BiSearch} from "react-icons/bi";
import {IoCartOutline} from "react-icons/io5";
import {AiOutlineMenu} from "react-icons/ai";
import {IoMdClose} from "react-icons/io";
import {motion} from "framer-motion";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() =>
    {
        setIsOpen(false);
    }, []);

    const navbarRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <header className="z-[100]">
            <motion.nav initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                        className="container w-full flex flex-row items-center justify-between z-[100] px-8 py-6 mx-auto">
                <Link href="/">
                    <Image src="/logo.png" width={1100} height={234} alt="logo" className="w-auto h-[30px]"/>
                </Link>
                <div className="hidden lg:flex text-secondary flex-row gap-5 items-center justify-center">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <Link href="/AboutUs" className="hover:text-primary">About</Link>
                    <Link href="/Contact" className="hover:text-primary">Contact</Link>
                </div>
                <div className="hidden lg:flex items-center gap-8">
                    <div className="relative shadow-xl rounded-full">
                        <input type="text"
                               className="rounded-full border border-gray-300 pl-10 px-4 py-3 text-secondary"
                               placeholder="Cappucino"/>
                        <BiSearch className="h-6 w-6 text-secondary absolute top-3.5 left-3"/>
                    </div>
                    <Link className="relative" href="/Contact">
                        <IoCartOutline className="text-[28px] text-secondary h-10 w-10"/>
                        <div className="absolute top-0 left-7 rounded-full w-4 h-4 border-white border-2 bg-primary"/>
                    </Link>
                </div>

                {/*gamburger menu*/}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineMenu className="text-secondary text-2xl"/>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile menu, show/hide based on menu state. */}
            <div
                ref={navbarRef}
                className={`fixed w-full sm:p-7 transition-all duration-500 ease-linear right-[-100%] ${
                    isOpen ? 'right-[0]' : ''
                } z-[999999] top-0 right-0 h-screen overflow-hidden md:w-[50%] bg-accent p-12`}
            >
                <div className="w-full h-full flex justify-between items-start text-secondary">
                    <div className="flex flex-col w-auto h-full gap-5 justify-between">
                        <ul className="flex flex-col justify-center items-start gap-5 text-[20px] sm:text-[24px] font-medium">
                            <Link href="/">
                                <Image src="/logo.png" width={1100} height={234} alt="logo" className="w-auto h-[30px]"/>
                            </Link>
                            <Link href={'/'} className={`hover:text-primary`}>Home</Link>
                            <Link href={'/AboutUs'} className={`hover:text-primary`}>About Us</Link>
                            <Link href={'/Contact'} className={`hover:text-primary`}>Contact</Link>
                        </ul>
                    </div>
                    <button aria-label="Hamburger" onClick={() => setIsOpen(false)}
                            className="flex-col justify-center items-center">
                        <span
                            className={`bg-secondary block transition-all duration-300 ease-linear h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 bg-black translate-y-1.5' : ''}`}></span>
                        <span
                            className={`bg-secondary block transition-all duration-300 ease-linear h-0.5 w-6 rounded-sm my-1 ${isOpen ? 'opacity-0 bg-black' : 'opacity-100'}`}></span>
                        <span
                            className={`bg-secondary block transition-all duration-300 ease-linear h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 bg-black -translate-y-1.5' : ''}`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;