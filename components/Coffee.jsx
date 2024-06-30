import React from 'react';
import Image from "next/image";
import {IoCartOutline} from "react-icons/io5";
import {FaStar} from "react-icons/fa";

const Coffee = () => {
    return (
        <div className="relative bg-white bg-opacity-50 p-1 rounded-2xl shadow-2xl">
            <div
                className="bg-white p-5 text-black rounded-2xl w-full h-full flex flex-col items-center justify-center gap-3.5">
                <Image alt="coffee" width={1500} height={1000} src="/latte-coffee.jpg"
                       className="rounded-2xl object-cover w-[280px] h-[200px]"/>
                <p className="text-[24px] w-full flex flex-row items-center justify-between font-semibold">
                    <span>Vanilla Latte</span>
                    <span>21K</span>
                </p>
                <div className="w-full flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-center gap-5">
                        <div className="text-primary border-primary rounded-xl border-2 px-5 py-1">Hot</div>
                        <div className="text-[#FFD28F] border-[#FFD28F] rounded-xl border-2 px-5 py-1">Cold</div>
                    </div>
                    <IoCartOutline className="bg-primary text-white rounded-full text-[38px] p-2"/>
                </div>
            </div>
            <div className="absolute bottom-[7.9rem] right-[6.4rem] flex justify-center items-center h-full w-full">
                <div className="bg-white bg-opacity-50 p-1 rounded-full backdrop-blur-sm">
                    <div
                        className="flex items-center gap-1 bg-white text-secondary rounded-full py-1 px-2.5 text-[14px] font-semibold">
                        <p>4.8</p>
                        <FaStar className="text-primary"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;