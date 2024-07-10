import React from 'react';
import Layout from "@/app/Layout/Layout";
import Image from "next/image";
import {IoCartOutline} from "react-icons/io5";

const AboutUs = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center bg-[#F6EBDA] overflow-x-hidden">
                <section
                    className="bg-[#F6EBDA] w-full h-full flex flex-col lg:flex-row items-center justify-between px-8 lg:py-16 pt-5 gap-16 lg:gap-20 max-w-7xl mx-auto">
                    <div className="w-[45%] bg-white bg-opacity-65 p-2.5 rounded-2xl">
                        <Image alt="coffee" src="/aboutus-bg.jpg" width={512} height={512}
                               className="w-full h-auto rounded-2xl"/>
                    </div>
                    <div
                        className="lg:w-[50%] flex flex-col gap-5 items-center justify-center lg:text-left lg:items-start">
                        <p className="text-3xl lg:text-6xl text-secondary font-semibold items-center justify-center lg:text-left lg:items-start text-center">
                            About us
                        </p>
                        <p className="text-light text-sm lg:text-lg items-center justify-center lg:text-left lg:items-start text-center">
                            We are a dedicated team of professionals with a passion for what we do. With a
                            commitment to quality and authenticity, our goal is to provide our customers with
                            an unparalleled experience. </p>
                        <p className="text-light text-sm lg:text-lg items-center justify-center lg:text-left lg:items-start text-center">
                            it's creating a unique product, offering exceptional
                            service, or standing behind our values, we strive to exceed expectations in everything we do. </p>
                        <div className="flex flex-row items-center gap-10 ">
                            <div
                                className="bg-secondary rounded-[20px] h-auto px-6 lg:px-10 py-3 flex flex-row items-center justify-center gap-3">
                                <p className="font-bold text-[10px] lg:text-[14px]">Delivery</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default AboutUs;