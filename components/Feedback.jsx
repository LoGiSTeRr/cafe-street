import React from 'react';
import Image from "next/image";

const Feedback = ({image, name, text}) => {
    return (
        <div className="relative bg-[#FFCB7C] bg-opacity-50 p-1">
            <Image src={image} alt="man" width={2500} height={3800} className="w-[170px] h-[250px] object-cover"/>
            <div className="absolute top-[4rem] left-[2rem] flex justify-center items-center h-full w-full">
                <div className="bg-[#FFCB7C] bg-opacity-50 p-1 rounded-xl backdrop-blur-sm">
                    <div
                        className="flex flex-col justify-center gap-1 bg-[#FFCB7C] text-secondary rounded-xl py-1 px-2.5">
                        <p className="text-[14px] font-medium">{name}</p>
                        <p className="text-[12px]">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;