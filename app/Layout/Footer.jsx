import React from 'react';
import Link from "next/link";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div
                className="bg-[#F6EBDA] w-full h-full flex flex-wrap lg:flex-row items-start lg:text-start justify-center text-center lg:justify-between px-8 py-10 lg:py-16 pt-5 gap-16 lg:gap-20 max-w-7xl mx-auto">
                <div className="flex flex-col text-[18px] text-light gap-2">
                    <Link href="/AboutUs" className="font-bold text-[20px] text-secondary">About us</Link>
                    <Link href="/Contact">Find a location</Link>
                    <Link href="/AboutUs">About us</Link>
                    <Link href="/AboutUs">Our story</Link>
                </div>
                <div className="flex flex-col text-[18px] text-light gap-2">
                    <Link href="/" className="font-bold text-[20px] text-secondary">Services</Link>
                    <Link href="/Contact">Contact</Link>
                    <Link href="/#menu">Menu</Link>
                </div>
                <div className="flex flex-col text-[18px] text-light gap-2">
                    <Link href="/" className="font-bold text-[20px] text-secondary">Privacy</Link>
                    <Link href="/">Terms of use</Link>
                    <Link href="/">Privacy Policy</Link>
                </div>
                <div className="flex flex-col text-light gap-2">
                    <h2 className="font-bold text-[20px] text-secondary">Social Media</h2>
                    <div className="flex gap-5 text-secondary text-[30px]">
                        <Link href="https://www.instagram.com/plumyuzbor"><FaInstagram/></Link>
                        <Link href="https://www.instagram.com/plumyuzbor"><FaTwitter/></Link>
                        <Link href="https://www.facebook.com/people/Plumyuzbor/61559061777151/"><FaFacebook/></Link>
                        <Link href="https://www.linkedin.com/company/bplumy"><FaLinkedin/></Link>
                    </div>
                </div>
            </div>
            <div className="bg-secondary w-full h-full">
                <p className="text-white text-[14px] px-8 py-4 max-w-7xl mx-auto">Copyright
                    @ {new Date().getFullYear()}, <Link href="https://www.instagram.com/plumyuzbor"><b>Plum</b></Link></p>
            </div>
        </div>
    );
};

export default Footer;