'use client'
import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import Link from "next/link";
import {BiSearch} from "react-icons/bi";
import {IoCartOutline} from "react-icons/io5";
import {AiOutlineMenu} from "react-icons/ai";
import {IoMdClose} from "react-icons/io";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() =>
    {
        setIsOpen(false);
    }, []);

    return (
        <header className="z-[100]">
            <nav className="container w-full flex flex-row items-center justify-between z-[100] px-8 py-6 mx-auto">
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
                        onClick={() => setIsOpen(true)}>
                        <AiOutlineMenu className="text-secondary text-2xl"/>
                    </button>
                </div>
            </nav>

            {/* Mobile menu, show/hide based on menu state. */}
            <div className={`relative z-50 ${isOpen ? "" : "hidden"} lg:hidden`}>
                <div
                    className="flex flex-col items-center fixed inset-y-0 right-0 z-10 w-full px-8 py-6 overflow-y-auto bg-accent sm:max-w-sm sm:ring-1 sm:ring-primary/10 transform origin-right transition ease-in-out duration-300">
                    <div className="flex items-center justify-between w-full">
                        <Link href="/">
                            <Image src="/logo.png" width={1100} height={234} alt="logo" className="w-auto h-[30px]"/>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5"
                            onClick={() => setIsOpen(false)}>
                            <IoMdClose className="text-secondary text-2xl"/>
                        </button>
                    </div>

                    <div className="flex flex-col text-secondary gap-y-4 mt-6 items-center justify-center">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <Link href="/AboutUs" className="hover:text-primary">About</Link>
                        <Link href="/Contact" className="hover:text-primary">Contact</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;