import React from 'react';
import Image from 'next/image';
import Layout from "@/app/Layout/Layout";
import {IoCartOutline} from "react-icons/io5";
import {FaStar} from "react-icons/fa";
import Header from "@/app/Layout/Header";
import Coffee from "@/components/Coffee";
import CoffeeDescription from "@/components/CoffeeDescription";
import Feedback from "@/components/Feedback";
import {BiSearch} from "react-icons/bi";

const HomePage = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center bg-white overflow-x-hidden">
                <section
                    className="bg-[#F6EBDA] w-full h-full flex flex-col items-center justify-between px-24 py-10 gap-10">
                    <Header/>
                    <div className="bg-[#F6EBDA] w-full h-full flex items-center justify-between">
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
                        <div className="relative bg-secondary rounded-full">
                            <div className="absolute w-full h-full flex justify-center items-center z-[0] rounded-full overflow-hidden">
                                <Image src="/bg-hero-coffee.png" alt="bg" width={380} height={240} className="w-full h-auto"/>
                            </div>
                            <Image alt="coffee" src="/hero-coffee.png" width={1000} height={1000}
                                   className="relative p-12 w-auto h-[400px] z-[10]"/>
                            <div className="absolute bottom-32 right-40 flex justify-center items-center h-full w-full">
                                <div className="shadow-xl bg-white bg-opacity-50 p-2 rounded-full backdrop-blur-sm">
                                    <div
                                        className="bg-white text-secondary rounded-full py-1.5 px-10 text-[24px] font-semibold">
                                        <p>Cappuccino</p></div>
                                </div>
                            </div>
                            <div className="absolute top-32 right-40 flex justify-center items-center h-full w-full">
                                <div className="shadow-xl bg-white bg-opacity-50 p-2 rounded-full backdrop-blur-sm">
                                    <div
                                        className="bg-white text-secondary rounded-full py-1.5 px-10 text-[24px] font-semibold">
                                        <p>18K</p></div>
                                </div>
                            </div>
                            <div className="absolute bottom-20 left-40 flex justify-center items-center h-full w-full">
                                <div className="shadow-xl bg-white bg-opacity-50 p-2 rounded-full backdrop-blur-sm">
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
                <section className="bg-white relative w-full flex flex-col items-center justify-between gap-10">
                    <div className="h-[300px] w-full bg-[#F6EBDA] ">
                        <p className="text-[36px] text-secondary font-semibold px-24">Popular <span
                            className="border-b-primary border-b-4">Now</span></p>
                    </div>
                    <div className="absolute inset-x-0 top-52 transform flex items-center justify-center gap-8">
                        <div className="relative bg-[#F9D9AA] rounded-[50px] w-full h-[300px] mx-20">
                            <div
                                className="absolute bottom-12 inset-x-0 flex flex-row gap-5 items-center justify-center">
                                <Coffee photo="/latte-coffee.jpg" name="Cappucino" rating={4.8} views={"21K"}/>
                                <Coffee photo="/espresso.png" name="Espresso" rating={4.8} views={"12K"}/>
                                <Coffee photo="/hazelnut-latte.png" name="Hazelnut Latte" rating={4.8} views={"23K"}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white w-full flex flex-col px-24 py-10 pt-72 gap-14">
                    <p className="text-[32px] text-secondary font-semibold">How to use delivery <span
                        className="border-b-4 border-b-primary">service</span></p>
                    <div className="flex flex-row w-full h-full items-center justify-center gap-28">
                        <div className="flex flex-col text-secondary items-center justify-center">
                            <Image src="/coffee-cup.png" alt="coffee" width={512} height={512} className="w-36 h-auto"/>
                            <p className="font-semibold text-[24px] mt-6">choose your coffee</p>
                            <p className="text-[18px]">there are 20+ coffees for you</p>
                        </div>
                        <div className="flex flex-col text-secondary items-center justify-center">
                            <Image src="/food-truck.png" alt="coffee" width={512} height={512} className="w-36 h-auto"/>
                            <p className="font-semibold text-[24px] mt-6">we deliver it to you</p>
                            <p className="text-[18px]">Choose delivery service</p>
                        </div>
                        <div className="flex flex-col text-secondary items-center justify-center">
                            <Image src="/coffee-cup2.png" alt="coffee" width={512} height={512}
                                   className="w-36 h-auto"/>
                            <p className="font-semibold text-[24px] mt-6">Enjoy your coffee</p>
                            <p className="text-[18px]">Choose delivery service</p>
                        </div>
                    </div>
                </section>
                <section style={{
                    backgroundImage: `url(/bg-coffees.png)`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }}
                         className="w-full flex flex-row items-center justify-center px-24 py-10 mt-36 gap-20">
                    <div className="bg-white bg-opacity-50 p-1.5 rounded-2xl">
                        <Image alt="coffee" src="/coffee.png" width={512} height={512}
                               className="w-[350px] h-auto rounded-2xl -mt-[8.5rem]"/>
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="text-secondary text-[32px] font-semibold">About <span
                            className="border-b-primary border-b-4">us</span></p>
                        <p className="text-secondary text-[24px] font-semibold flex flex-col">
                            <span>We provide quality coffee,</span>
                            <span>and ready to deliver.</span>
                        </p>
                        <p className="text-light text-[18px] font-semibold flex flex-col">
                            <span>We are a company that makes and distributes </span>
                            <span>delicious drinks. our main product is made with a </span>
                            <span>secret recipe and available in stores worldwide.</span>
                        </p>
                        <div className="bg-secondary rounded-[20px] px-10 py-3 flex items-center"
                             style={{width: 'fit-content'}}>
                            <p className="font-bold text-[12px] text-primary">Get your coffee</p>
                        </div>
                    </div>
                </section>
                <section className="bg-white w-full flex flex-col px-24 mt-36 gap-14">
                    <p className="text-[32px] text-secondary font-semibold">Special menu <span
                        className="border-b-4 border-b-primary">for you</span></p>
                    <div className="flex flex-wrap w-full h-full items-center justify-center gap-8">
                        <CoffeeDescription photo="/latte-coffee.jpg" name="Cappucino" description={"bread with meat and vegetables"} rating={4.8} views={"12K"}/>
                        <CoffeeDescription photo="/latte-coffee.jpg" name="Cappucino" description={"bread with meat and vegetables"} rating={4.8} views={"12K"}/>
                        <CoffeeDescription photo="/latte-coffee.jpg" name="Cappucino" description={"bread with meat and vegetables"} rating={4.8} views={"12K"}/>
                        <CoffeeDescription photo="/latte-coffee.jpg" name="Cappucino" description={"bread with meat and vegetables"} rating={4.8} views={"12K"}/>
                        <CoffeeDescription photo="/latte-coffee.jpg" name="Cappucino" description={"bread with meat and vegetables"} rating={4.8} views={"12K"}/>
                        <CoffeeDescription photo="/latte-coffee.jpg" name="Cappucino" description={"bread with meat and vegetables"} rating={4.8} views={"12K"}/>
                    </div>
                </section>
                <section className="relative flex flex-row w-full h-[400px] mt-36 ">
                    <div style={{
                        backgroundImage: `url(/bg-coffees.png)`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    }} className="rounded-r-2xl w-[65%] h-full"></div>
                    <div className="w-[35%} h-full bg-white"></div>
                    <div className="absolute flex flex-row items-center justify-center w-full h-full gap-10">
                        <div className="flex flex-col justify-center gap-4">
                            <p className="text-secondary text-[32px] font-semibold">What they say about us</p>
                            <p className="text-light text-[18px] w-[280px]">We always provide the best service and
                                always maintain the quality of coffee</p>
                        </div>
                        <div className="flex flex-row gap-16">
                            <Feedback/>
                            <Feedback/>
                            <Feedback/>
                        </div>
                    </div>
                </section>
                <section className="bg-white w-full flex flex-col p-24 gap-14">
                    <div style={{
                        backgroundImage: `url(/coffee-giver.png)`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    }} className="w-full h-[400px] rounded-2xl">
                        <div
                            className="w-full h-full flex flex-col items-center justify-center rounded-2xl bg-black bg-opacity-40 gap-8">
                            <p className="text-white text-[32px] font-semibold">Subscribe to get 50% discount price</p>
                            <div className="relative shadow-xl rounded-full">
                                <input type="text"
                                       className="rounded-full px-4 py-3 pr-48 text-light"
                                       placeholder="Email address"/>
                                <div className="text-secondary bg-secondary absolute top-1.5 right-1.5 py-2 px-5 rounded-full">
                                    <p className="text-white text-[14px] font-semibold">Order now</p>
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