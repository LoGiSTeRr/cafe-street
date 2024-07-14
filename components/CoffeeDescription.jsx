import React from 'react';
import Image from "next/image";
import {IoCartOutline} from "react-icons/io5";
import {FaStar} from "react-icons/fa";
import Link from "next/link";

const CoffeeDescription = ({photo, name, description, rating, views}) => {
    return (
        <div className="relative bg-white bg-opacity-50 p-1 rounded-2xl shadow-2xl">
            <div
                className="bg-white p-5 text-black rounded-2xl w-full h-full flex flex-col items-center justify-center gap-3.5">
                <Image alt="coffee" width={1500} height={1000} src={photo}
                       className="rounded-2xl object-cover w-[280px] h-[200px]"/>
                <p className="text-[22px] sm:text-[24px] w-full flex flex-row items-center justify-between font-semibold">
                    <span>{name}</span>
                    <span>{views}</span>
                </p>
                <div className="w-full flex flex-row items-center justify-between">
                    <p className="text-[12px] sm:text-[14px] text-light w-[200px] font-semibold">{description}</p>
                    <Link href="/Contact">
                        <IoCartOutline className="bg-primary text-white rounded-full text-[38px] p-2"/>
                    </Link>
                </div>
            </div>
            <div className="absolute top-[2rem] left-[2rem] flex justify-center items-center h-auto w-auto">
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

export default CoffeeDescription;