import React from 'react';
import Image from "next/image";
import {IoCartOutline} from "react-icons/io5";
import {FaStar} from "react-icons/fa";

const Coffee = ({photo, name, rating, views}) => {
    return (
        <div className="relative bg-white bg-opacity-50 p-1 rounded-2xl shadow-2xl">
            <div
                className="bg-white p-5 text-black rounded-2xl w-full h-full flex flex-col items-center justify-center gap-3.5">
                <Image alt="coffee" width={1500} height={1000} src={photo}
                       className="rounded-2xl object-cover w-[210px] h-[150px] lg:w-[270px] lg:h-[190px]"/>
                <p className="text-[14px] sm:text-[18px] lg:text-[24px] pr-1 w-full flex flex-row items-center justify-between font-semibold">
                    <span>{name}</span>
                    <span>{views}</span>
                </p>
                <div className="text-[12px] sm:text-[14px] lg:text-[18px] w-full flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-center gap-2 lg:gap-5">
                        <div className="text-primary border-primary rounded-md lg:rounded-xl border-2 px-2 py-1/2 lg:px-5 lg:py-1">Hot</div>
                        <div className="text-[#FFD28F] border-[#FFD28F] rounded-md lg:rounded-xl border-2 px-2 py-1/2 lg:px-5 lg:py-1">Cold</div>
                    </div>
                    <IoCartOutline className="bg-primary text-white rounded-full text-[38px] ml-4 sm:ml-0 p-2"/>
                </div>
            </div>
            <div className="absolute bottom-[6rem] right-[2.3rem] xs:right-[4.2rem] lg:bottom-[7.5rem] lg:right-[6rem] flex justify-center items-center h-full w-full">
                <div className="bg-white bg-opacity-50 p-1 rounded-full backdrop-blur-sm">
                    <div
                        className="flex items-center gap-1 bg-white text-secondary rounded-full py-1 px-2.5 text-[14px] font-semibold">
                        <p>{rating}</p>
                        <FaStar className="text-primary"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;