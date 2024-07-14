'use client'
import React, {useEffect} from 'react';
import Image from 'next/image';
import Layout from "@/app/Layout/Layout";
import {IoCartOutline} from "react-icons/io5";
import {FaStar} from "react-icons/fa";
import Coffee from "@/components/Coffee";
import CoffeeDescription from "@/components/CoffeeDescription";
import Feedback from "@/components/Feedback";
import Link from "next/link";
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion";

const HomePage = () => {

    const {ref: section2Ref, inView: section2InView} = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    const {ref: section3Ref, inView: section3InView} = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    const {ref: section4Ref, inView: section4InView} = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    const {ref: section5Ref, inView: section5InView} = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        document.querySelector('body').classList.add('scroll-smooth');

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);
    return (
        <Layout>
            <div className="flex flex-col items-center bg-[#F6EBDA] overflow-x-hidden">
                <section
                    className="bg-[#F6EBDA] w-full h-full flex flex-col lg:flex-row items-center justify-between px-8 py-10 lg:py-16 pt-5 gap-16 lg:gap-20 max-w-7xl mx-auto">
                    <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}
                                transition={{duration: 1}}
                                className="lg:w-[50%] flex flex-col gap-5 items-center justify-center lg:text-left lg:items-start">
                        <p className="text-3xl lg:text-6xl text-secondary font-semibold items-center justify-center lg:text-left lg:items-start text-center">
                            Enjoy Your <span className="text-primary">Coffee</span> Before Your Activity
                        </p>
                        <p className="text-light text-sm lg:text-lg items-center justify-center lg:text-left lg:items-start text-center">
                            Boost your productivity and build your mood with a glass of coffee in the morning
                        </p>
                        <div className="flex flex-row items-center gap-10 ">
                            <Link href="/Contact"
                                  className="bg-secondary rounded-[20px] h-auto px-6 lg:px-10 py-3 flex flex-row items-center justify-center gap-3">
                                <p className="font-bold text-[10px] lg:text-[14px]">Order now</p>
                                <IoCartOutline className="bg-primary rounded-full text-[28px] p-1"/>
                            </Link>
                            <Link href="#menu" className="text-primary text-[10px] lg:text-[12px] font-bold">More
                                Menu</Link>
                        </div>
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}
                                transition={{duration: 1}} className="relative bg-secondary rounded-full">
                        <div
                            className="absolute w-full h-full flex justify-center items-center z-[0] rounded-full overflow-hidden">
                            <Image src="/bg-hero-coffee.png" alt="bg" width={380} height={240}
                                   className="w-full h-auto"/>
                        </div>
                        <Image alt="coffee" src="/hero-coffee.png" width={1000} height={1000}
                               className="relative p-12 w-auto h-[300px] md:h-[400px] z-[10]"/>
                        <div
                            className="absolute bottom-24 right-24 md:bottom-32 md:right-40 flex justify-center items-center h-full w-full">
                            <div className="shadow-xl bg-white bg-opacity-50 p-2 rounded-full backdrop-blur-sm">
                                <div
                                    className="bg-white text-secondary rounded-full py-1.5 px-4 md:px-8 text-[18px] md:text-[24px] font-semibold">
                                    <p>Cappuccino</p></div>
                            </div>
                        </div>
                        <div
                            className="absolute top-28 right-24 md:top-32 md:right-40 flex justify-center items-center h-full w-full">
                            <div className="shadow-xl bg-white bg-opacity-50 p-2 rounded-full backdrop-blur-sm">
                                <div
                                    className="bg-white text-secondary rounded-full py-1.5 px-4 md:px-8 text-[18px] md:text-[24px] font-semibold">
                                    <p>18K</p></div>
                            </div>
                        </div>
                        <div
                            className="absolute bottom-16 left-32 md:bottom-20 md:left-36 flex justify-center items-center h-full w-full z-[10]">
                            <div className="shadow-xl bg-white bg-opacity-50 p-2 rounded-full backdrop-blur-sm">
                                <div
                                    className="flex items-center gap-1 bg-white text-secondary rounded-full py-1.5 px-4 md:px-8 text-[18px] md:text-[24px] font-semibold">
                                    <p>4.8</p>
                                    <FaStar className="text-primary"/>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
                <section ref={section2Ref}
                         className="bg-white relative w-full flex flex-col items-center justify-between gap-10 mx-auto">
                    <motion.div initial={{opacity: 0, y: 100}}
                                animate={{opacity: section2InView ? 1 : 0, y: section2InView ? 0 : 100}}
                                transition={{duration: 1}}
                                className="h-[300px] w-full bg-[#F6EBDA]">
                        <p className="text-[28px] md:text-[36px] text-secondary font-semibold text-center lg:text-start px-8 max-w-7xl mx-auto">Popular <span
                            className="border-b-primary border-b-4">Now</span></p>
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 100}}
                                animate={{opacity: section2InView ? 1 : 0, y: section2InView ? 0 : 100}}
                                transition={{duration: 1}}
                                className="flex items-center justify-center gap-8">
                        <div className="bg-[#F9D9AA] rounded-[50px] w-full h-auto px-12 p-16 mx-5 sm:mx-20 -mt-40">
                            <div
                                className="flex flex-wrap gap-5 items-center justify-center -mt-40">
                                <Coffee photo="/latte-coffee.jpg" name="Cappucino" rating={4.8} views={"21K"}/>
                                <Coffee photo="/espresso.png" name="Espresso" rating={4.8} views={"12K"}/>
                                <Coffee photo="/hazelnut-latte.png" name="Hazelnut Latte" rating={4.8} views={"23K"}/>
                            </div>
                        </div>
                    </motion.div>
                </section>
                <section ref={section3Ref} className="bg-white w-full flex flex-col pb-52 pt-20 gap-14 mx-auto px-8">
                    <motion.p initial={{opacity: 0, y: 100}}
                              animate={{opacity: section3InView ? 1 : 0, y: section3InView ? 0 : 100}}
                              transition={{duration: 1}}
                              className="text-[28px] md:text-[36px] text-secondary font-semibold text-center lg:text-start max-w-7xl mx-auto px-8 w-full">How
                        to use delivery <span
                            className="border-b-4 border-b-primary">service</span></motion.p>
                    <motion.div initial={{opacity: 0, y: 100}}
                                animate={{opacity: section3InView ? 1 : 0, y: section3InView ? 0 : 100}}
                                transition={{duration: 1}}
                                className="flex flex-wrap w-full h-full items-center justify-center gap-28 text-center">
                        <div className="flex flex-col text-secondary items-center justify-center">
                            <Image src="/coffee-cup.png" alt="coffee" width={512} height={512} className="w-36 h-auto"/>
                            <p className="font-semibold text-[20px] md:text-[24px] mt-6">choose your coffee</p>
                            <p className="text-[14px] md:text-[18px]">there are 20+ coffees for you</p>
                        </div>
                        <div className="flex flex-col text-secondary items-center justify-center">
                            <Image src="/food-truck.png" alt="coffee" width={512} height={512} className="w-36 h-auto"/>
                            <p className="font-semibold text-[20px] md:text-[24px] mt-6">we deliver it to you</p>
                            <p className="text-[14px] md:text-[18px]">Choose delivery service</p>
                        </div>
                        <div className="flex flex-col text-secondary items-center justify-center">
                            <Image src="/coffee-cup2.png" alt="coffee" width={512} height={512}
                                   className="w-36 h-auto"/>
                            <p className="font-semibold text-[20px] md:text-[24px] mt-6">Enjoy your coffee</p>
                            <p className="text-[14px] md:text-[18px]">Choose delivery service</p>
                        </div>
                    </motion.div>
                </section>
                <section ref={section4Ref} style={{
                    backgroundImage: `url(/bg-coffees.png)`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }} className="w-full h-full bg-white flex lg:flex-row flex-col items-center justify-center ">
                    <motion.div initial={{opacity: 0, y: 100}}
                                animate={{opacity: section4InView ? 1 : 0, y: section4InView ? 0 : 100}}
                                transition={{duration: 1}}
                                className="w-full flex lg:flex-row flex-col items-center justify-center px-8 py-16 gap-10 lg:gap-20 max-w-7xl mx-auto">
                        <div className="bg-white bg-opacity-50 p-1.5 rounded-2xl">
                            <Image alt="coffee" src="/coffee.png" width={512} height={512}
                                   className="w-[350px] h-auto rounded-2xl -mt-[10.5rem]"/>
                        </div>
                        <div
                            className="flex flex-col gap-6 lg:text-start text-center items-center lg:items-start w-[90%] lg:w-[60%]">
                            <p className="text-secondary text-[32px] font-semibold">About <span
                                className="border-b-primary border-b-4">us</span></p>
                            <p className="text-secondary text-[24px] font-semibold">
                                We provide quality coffee, and ready to deliver.
                            </p>
                            <p className="text-light text-[18px] font-semibold ">
                                We are a company that makes and distributes
                                delicious drinks. our main product is made with a
                                secret recipe and available in stores worldwide.
                            </p>
                            <Link href="/Contact" className="bg-secondary rounded-[20px] px-10 py-3 flex items-center"
                                  style={{width: 'fit-content'}}>
                                <p className="font-bold text-[12px] text-primary">Get your coffee</p>
                            </Link>
                        </div>
                    </motion.div>
                </section>
                <section ref={section5Ref} id="menu"
                         className="bg-white w-full flex flex-col items-center px-24 py-20 gap-14">
                    <motion.p initial={{opacity: 0, y: 100}}
                              animate={{opacity: section5InView ? 1 : 0, y: section5InView ? 0 : 100}}
                              transition={{duration: 1}}
                              className="text-[28px] md:text-[36px] text-center md:text-start text-secondary font-semibold max-w-7xl mx-auto w-full">Special
                        menu <span
                            className="border-b-4 border-b-primary">for you</span></motion.p>
                    <motion.div initial={{opacity: 0, y: 100}}
                                animate={{opacity: section5InView ? 1 : 0, y: section5InView ? 0 : 100}}
                                transition={{duration: 1}}
                                className="flex flex-wrap w-full h-full items-center justify-center gap-8 max-w-7xl mx-auto">
                        <CoffeeDescription photo="/sandwich.png" name="Sandwich"
                                           description={"bread with meat and vegetables"} rating={4.8} views={"12K"}/>
                        <CoffeeDescription photo="/hot-milk.png" name="Hot Milk"
                                           description={"Hot Milk with less sugar"} rating={4.8} views={"12K"}/>
                        <CoffeeDescription photo="/coffee-ice-cream.jpg" name="Coffe Ice Cream"
                                           description={"Coffee with ice cream vanilla"} rating={4.8} views={"12K"}/>
                        <CoffeeDescription photo="/cappuccino.png" name="Cappuccino"
                                           description={"Hot Cappuccino"} rating={4.8} views={"12K"}/>
                        <CoffeeDescription photo="/moccacinno.jpg" name="Moccacinno"
                                           description={"Hot Moccacinno"} rating={4.8} views={"12K"}/>
                        <CoffeeDescription photo="/waffle.png" name="Waffle Ice Cream"
                                           description={"Waffle with ice cream"} rating={4.8} views={"12K"}/>
                    </motion.div>
                </section>
                <section
                    className="bg-white relative flex flex-row w-full h-auto lg:h-[500px] py-14 items-center ">
                    <div style={{
                        backgroundImage: `url(/bg-coffees.png)`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    }} className="rounded-r-2xl w-full lg:w-[70%] h-auto lg:h-[500px]">
                        <div
                            className="relative lg:absolute flex flex-col lg:flex-row items-center justify-center w-full h-full gap-10 px-10 py-10">
                            <div
                                className="flex flex-col justify-center gap-4 text-center lg:text-start w-full lg:w-[40%]">
                                <p className="text-secondary text-[32px] lg:text-[35px] font-semibold">What they say
                                    about us</p>
                                <p className="text-light text-[18px] lg:text-[21px]">We always provide the best service
                                    and always
                                    maintain the quality of coffee</p>
                            </div>
                            <div className="flex flex-wrap lg:flex-row gap-16 items-center justify-center">
                                <Feedback image={"/man.png"} name="John"
                                          text="Every day starts with a cup of your aromatic coffee. It's the best wake-up call for my senses!"/>
                                <Feedback image={"/woman.jpg"} name="Jane"
                                          text="The smooth taste and strong kick of caffeine from your coffee truly brightens up my day."/>
                                <Feedback image={"/man2.jpg"} name="Chris"
                                          text="Coffee from your shop has become my daily routine. Can't imagine my day without it!"/>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:w-[30%} h-full bg-white"></div>
                </section>
                <section className="bg-white w-full flex flex-col lg:py-24 lg:px-24 px-0 gap-14">
                    <div
                        style={{
                            backgroundImage: `url(/coffee-giver.png)`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`
                        }} className="w-full h-[400px] lg:rounded-2xl">
                        <div
                            className="w-full h-full flex flex-col items-center justify-center rounded-2xl bg-black bg-opacity-40 gap-8">
                            <p className="text-white text-[26px] lg:text-[32px] font-semibold lg:text-start text-center">Subscribe
                                to get 50% discount price</p>
                            <div className="relative shadow-xl rounded-full">
                                <input type="text"
                                       className="rounded-full px-4 py-3 lg:pr-48 pr-24 text-light"
                                       placeholder="Email address"/>
                                <Link href="/Contact"
                                      className="text-secondary bg-secondary absolute top-1.5 right-1.5 py-2 px-5 rounded-full">
                                    <p className="text-white text-[14px] font-semibold">Order now</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default HomePage;