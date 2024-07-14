'use client'
import React from 'react';
import Layout from "@/app/Layout/Layout";
import Image from "next/image";
import {FaMapLocation} from "react-icons/fa6";
import {FaPhone} from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

const Contact = () => {
    return (
        <Layout className="bg-[#F6EBDA]">
            <div className="flex flex-col items-center bg-[#F6EBDA] overflow-x-hidden">
                <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}
                           transition={{duration: 1}} className="text-3xl lg:text-6xl text-white font-semibold items-center justify-center text-center w-full py-40"
                    style={{
                        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/coffee-giver.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: '#fff',
                    }}>
                    Contact us
                </motion.h1>
                <section
                    className="bg-[#F6EBDA] w-full h-full flex flex-col items-center justify-between px-8 py-10 lg:py-12 pt-5 gap-10 max-w-7xl mx-auto">
                    <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}
                                transition={{duration: 1}} className="w-full h-full flex flex-wrap gap-20 items-center justify-center py-16">
                        <div
                            className="flex flex-col items-center justify-center text-secondary text-[16px] gap-2">
                            <FaMapLocation className="text-primary text-[50px]"/>
                            <h2 className="text-[25px] font-bold">Location</h2>
                            <p>848 E 28th st, Brooklyn</p>
                            <p>New York, US</p>
                        </div>
                        <div
                            className="flex flex-col items-center justify-center text-secondary text-[16px] gap-2">
                            <FaPhone className="text-primary text-[50px]"/>
                            <h2 className="text-[25px] font-bold">Call Us</h2>
                            <p>+1 317-888-8888</p>
                            <p>+1 131-912-1283</p>
                        </div>
                        <div
                            className="flex flex-col items-center justify-center text-secondary text-[16px] gap-2">
                            <AiFillMail className="text-primary text-[50px]"/>
                            <h2 className="text-[25px] font-bold">Email Us</h2>
                            <p>help@coffeestreet.com</p>
                            <p>info@coffeestreet.com</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}
                         transition={{duration: 1}} className="w-full h-auto">
                        <Image src="/location.png" width={2000} height={1500} alt="location" className="w-full h-auto rounded-[30px]"/>
                    </motion.div>
                </section>
            </div>
        </Layout>
    );
};

export default Contact;