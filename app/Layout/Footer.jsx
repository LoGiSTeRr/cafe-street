import React from 'react';
import Link from "next/link";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div
                className="bg-[#F6EBDA] w-full h-full flex flex-wrap lg:flex-row lg:items-start lg:text-start justify-center text-center items-center lg:justify-between px-8 py-10 lg:py-16 pt-5 gap-16 lg:gap-20 max-w-7xl mx-auto">
                <div className="flex flex-col text-[18px] text-light gap-2">
                    <Link href="/" className="font-bold text-[20px] text-secondary">Privacy</Link>
                    <Link href="/">Terms of use</Link>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Cookies</Link>
                </div>
                <div className="flex flex-col text-[18px] text-light gap-2">
                    <Link href="/" className="font-bold text-[20px] text-secondary">Services</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Delivery</Link>
                    <Link href="/">Menu</Link>
                </div>
                <div className="flex flex-col text-[18px] text-light gap-2">
                    <Link href="/" className="font-bold text-[20px] text-secondary">About us</Link>
                    <Link href="/">Find a location</Link>
                    <Link href="/">About us</Link>
                    <Link href="/">Our story</Link>
                </div>
                <div className="flex flex-col text-[18px] text-light gap-2">
                    <Link href="/" className="font-bold text-[20px] text-secondary">Information</Link>
                    <Link href="/">Plans & Pricing</Link>
                    <Link href="/">Jobs</Link>
                    <Link href="/">Sell your product</Link>
                </div>
                <div className="flex flex-col text-light gap-2">
                    <h2 className="font-bold text-[20px] text-secondary">Social Media</h2>
                    <div className="flex gap-5 text-secondary text-[30px]">
                        <FaInstagram href="/"/>
                        <FaTwitter href="/"/>
                        <FaFacebook href="/"/>
                        <FaLinkedin href="/"/>
                    </div>
                </div>
            </div>
            <div className="bg-secondary w-full h-full">
                <p className="text-white text-[14px] px-8 py-4 max-w-7xl mx-auto">Copyright @ {new Date().getFullYear()}, <b>Plum</b></p>
            </div>
        </div>
    );
};

export default Footer;