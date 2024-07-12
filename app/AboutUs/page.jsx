import React from 'react';
import Layout from "@/app/Layout/Layout";
import Image from "next/image";
import {IoCartOutline, IoFastFoodOutline} from "react-icons/io5";
import Coffee from "@/components/Coffee";
import {BiDish} from "react-icons/bi";
import {GiCroissant} from "react-icons/gi";
import {FaCoffee} from "react-icons/fa";
import {WiDaySunny} from "react-icons/wi";

const AboutUs = () => {
    return (
        <Layout className="bg-[#F6EBDA]">
            <div className="flex flex-col items-center bg-[#F6EBDA] overflow-x-hidden">
                <section
                    className="bg-[#F6EBDA] w-full h-full flex flex-col lg:flex-row items-center justify-between px-8 py-10 lg:py-12 pt-5 gap-16 lg:gap-20 max-w-7xl mx-auto">
                    <div className="lg:w-[45%] w-[70%] bg-white bg-opacity-65 p-2.5 rounded-2xl">
                        <Image alt="coffee" src="/aboutus-bg.jpg" width={512} height={512}
                               className="w-full h-auto rounded-2xl"/>
                    </div>
                    <div
                        className="lg:w-[50%] w-full flex flex-col gap-5 items-center justify-center lg:text-left lg:items-start">
                        <h1 className="text-3xl lg:text-6xl text-secondary font-semibold items-center justify-center lg:text-left lg:items-start text-center">
                            About us
                        </h1>
                        <p className="text-light text-sm lg:text-lg items-center justify-center lg:text-left lg:items-start text-center lg:max-w-7xl max-w-2xl mx-auto">
                            We are a dedicated team of professionals with a passion for what we do. With a
                            commitment to quality and authenticity, our goal is to provide our customers with
                            an unparalleled experience. </p>
                        <p className="text-light text-sm lg:text-lg items-center justify-center lg:text-left lg:items-start text-center lg:max-w-7xl max-w-2xl mx-auto">
                            it's creating a unique product, offering exceptional
                            service, or standing behind our values, we strive to exceed expectations in everything we
                            do. </p>
                        <div className="flex flex-row items-center gap-10 ">
                            <div
                                className="bg-secondary rounded-[20px] h-auto px-6 lg:px-10 py-3 flex flex-row items-center justify-center gap-3">
                                <p className="font-bold text-[10px] lg:text-[14px]">Delivery</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="bg-[#F6EBDA] w-full h-full flex flex-wrap lg:flex-row items-center justify-center">
                    <div style={{
                        backgroundImage: `url(/cozy.jpg)`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    }} className="w-full h-full">
                        <div className="w-full h-full bg-black bg-opacity-65">
                            <div
                                className="px-8 py-14 lg:py-20 pt-5 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
                                <div
                                    className="flex flex-col gap-2 justify-center items-center text-center lg:border-r-primary lg:border-r-[1px] lg:px-8">
                                    <FaCoffee className="text-[50px] text-primary"/> {/*Icon change*/}
                                    <h2 className="text-[20px]">Specialty Coffee</h2> {/*Text & tag change*/}
                                    <p className="text-[16px]">Enjoy our wide variety of beans roasted
                                        in-house.</p> {/*Text change*/}
                                </div>
                                <div
                                    className="flex flex-col gap-2 justify-center items-center text-center lg:border-r-primary lg:border-r-[1px] lg:px-8">
                                    <GiCroissant className="text-[50px] text-primary"/> {/*Icon change*/}
                                    <h2 className="text-[20px]">Fresh Pastries</h2> {/*Text & tag change*/}
                                    <p className="text-[16px]">Baked daily for the best breakfast
                                        experience.</p> {/*Text change*/}
                                </div>
                                <div
                                    className="flex flex-col gap-2 justify-center items-center text-center lg:border-r-primary lg:border-r-[1px] lg:px-8">
                                    <IoFastFoodOutline className="text-[50px] text-primary"/> {/*Icon change*/}
                                    <h2 className="text-[20px]">Delicious Meals</h2> {/*Text & tag change*/}
                                    <p className="text-[16px]">Healthy and flavorful dishes prepared
                                        daily.</p> {/*Text change*/}
                                </div>
                                <div className="flex flex-col gap-2 justify-center items-center text-center px-8">
                                    <WiDaySunny className="text-[50px] text-primary"/> {/*Icon change*/}
                                    <h2 className="text-[20px]">Sunny Patio</h2> {/*Text & tag change*/}
                                    <p className="text-[16px]">Relax outdoors in our sun-splashed seating
                                        area.</p> {/*Text change*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="bg-[#F6EBDA] w-full h-full">
                    <div
                        className="flex flex-col items-center justify-center gap-5 px-8 py-16 lg:py-24 pt-5 max-w-7xl mx-auto">
                        <h2 className="text-4xl lg:text-6xl text-secondary font-semibold items-center justify-center lg:text-left lg:items-start text-center">
                            Our Story
                        </h2>
                        <div className="flex flex-row gap-5 items-center justify-center">
                            <Image src="/dashed-line.png" alt="line" width={300} height={60}
                                   className="w-auto h-[35px]"/>
                            <Image src="/coffee-beans.png" alt="coffee bean" width={500} height={500}
                                   className="w-auto h-[35px]"/>
                            <Image src="/dashed-line.png" alt="line" width={300} height={60} className="w-auto h-[35px]"
                                   style={{transform: "scaleX(-1)"}}/>
                        </div>
                        <p className="text-secondary text-sm lg:text-xl items-center justify-center lg:items-start text-center max-w-4xl mx-auto" style={{lineHeight: "2"}}>
                            Our story began in the vibrant city of Portland, Oregon. It was there, in that city full of
                            coffee-enthusiasts, that we discovered the true power and potential of a humble coffee bean.
                            From the moment we served our first hand-crafted brew, we knew we were onto something
                            special. Here at Portland Brew, we celebrate the beauty of simplicity and the craft of true
                            artisan roasting. Every batch of beans is roasted with love and precision, transforming them
                            into the rich and full-bodied coffee you enjoy today. Our mission is not just to serve
                            excellent coffee, but to spark joy and to elevate your day, one cup at a time.
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default AboutUs;