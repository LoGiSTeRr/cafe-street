import React from 'react';
import Image from 'next/image'
import Link from "next/link";
import {BiSearch} from "react-icons/bi";
import {IoCartOutline} from "react-icons/io5";

const Header = () => {
    return (
        <div className="w-full flex flex-row items-center justify-between z-[100] px-24 py-10">
            <Link href="/">
                <Image src="/logo.png" width={1100} height={234} alt="logo" className="w-auto h-[30px]"/>
            </Link>
            <div className="text-secondary flex flex-row gap-5 items-center justify-center">
                <Link href="/" className="hover:text-primary">About Us</Link>
                <Link href="/" className="hover:text-primary">Our Product</Link>
                <Link href="/" className="hover:text-primary">Delivery</Link>
            </div>
            <div className="flex items-center gap-8">
                <div className="relative shadow-xl rounded-full">
                    <input type="text" className="rounded-full border border-gray-300 pl-10 px-4 py-3 text-secondary"
                           placeholder="Cappucino"/>
                    <BiSearch className="h-6 w-6 text-secondary absolute top-3.5 left-3"/>
                </div>
                <div className="relative">
                    <IoCartOutline className="text-[28px] text-secondary h-10 w-10"/>
                    <div className="absolute top-0 left-7 rounded-full w-4 h-4 border-white border-2 bg-primary"/>
                </div>
            </div>
        </div>
    );
};

export default Header;