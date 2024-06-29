import React from 'react';
import Image from 'next/image';
import Layout from "@/app/Layout/Layout";
import {IoCartOutline} from "react-icons/io5";
import {FaStar} from "react-icons/fa";

const HomePage = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center gap-5 overflow-x-hidden">
                <section className="bg-[#F6EBDA] w-full h-full flex items-center justify-between px-24 py-40">
                    <div className="flex flex-col gap-5">
                        <div className="text-secondary font-semibold text-[48px]">
                            <p>
                                Enjoy your <span className="text-primary">coffee</span>
                            </p>
                            <p>before your activity</p>
                        </div>
                        <div className="text-light text-[18px]">
                            <p>Boost your productivity and build your </p>
                            <p>mood with a glass of coffee in the morning </p>
                        </div>
                        <div className="flex flex-row items-center gap-10">
                            <div
                                className="bg-secondary rounded-[20px] h-auto px-10 py-3 flex flex-row items-center justify-center gap-3">
                                <p className="font-bold text-[14px]">Order now</p>
                                <IoCartOutline className="bg-primary rounded-full text-[28px] p-1"/>
                            </div>
                            <p className="text-primary text-[12px] font-bold">More Menu</p>
                        </div>
                    </div>
                    <div>
                        <div className="relative bg-secondary rounded-full">
                            <Image alt="coffee" src="/hero-coffee.png" width={1000} height={1000}
                                   className="p-12 w-auto h-[400px]"/>
                            <div className="absolute bottom-32 right-40 flex justify-center items-center h-full w-full">
                                <div className="bg-white bg-opacity-50 p-2 rounded-full backdrop-blur-sm">
                                    <div
                                        className="bg-white text-secondary rounded-full py-1.5 px-10 text-[24px] font-semibold">
                                        <p>Cappuccino</p></div>
                                </div>
                            </div>
                            <div className="absolute top-32 right-40 flex justify-center items-center h-full w-full">
                                <div className="bg-white bg-opacity-50 p-2 rounded-full backdrop-blur-sm">
                                    <div
                                        className="bg-white text-secondary rounded-full py-1.5 px-10 text-[24px] font-semibold">
                                        <p>18K</p></div>
                                </div>
                            </div>
                            <div className="absolute bottom-20 left-40 flex justify-center items-center h-full w-full">
                                <div className="bg-white bg-opacity-50 p-2 rounded-full backdrop-blur-sm">
                                    <div
                                        className="flex items-center gap-1 bg-white text-secondary rounded-full py-1.5 px-10 text-[24px] font-semibold">
                                        <p>4.8</p>
                                        <FaStar className="text-primary"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default HomePage;