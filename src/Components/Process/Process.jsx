import React from 'react'
import Heading from '../../Tools/Heading'
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";
import { PiPlant } from "react-icons/pi";
import { PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
import { process } from '../../Data/process';

const iconMap = {
    PiPlant,
    PiFactory,
    SlBadge,
    BsTruck,
};

const numberIconMap = {
    one: TbCircleNumber1Filled,
    two: TbCircleNumber2Filled,
    three: TbCircleNumber3Filled,
    four: TbCircleNumber4Filled,
};


const Process = () => {
    return (
        <section>
            <div className="max-w-300 mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-15">
                <div className="w-fit mr-auto">
                    <Heading highlight="Our" heading="Process" />
                </div>
                <div className=" flex flex-col md:flex-row items-center md:items-center justify-center gap-16 md:gap-0 mt-12 md:mt-20 pt-0 md:pt-50 " >
                    {process.map(item => {
                        const Icon = iconMap[item.icon];
                        const NumberIcon = numberIconMap[item.number];
                        return (
                            <div key={item.id} className={` w-full md:flex-1 md:text-left ${item.id % 2 === 0 ? 'md:-mt-100' : ''} `} >
                                {/* NUMBER */}
                                <span className=" flex justify-center mx-auto bg-zinc-800 text-white items-center rounded-full w-16 h-16 md:w-18 md:h-18 text-6xl md:text-8xl outline-[3px] outline-offset-6 outline-zinc-800 outline-dashed " >
                                    <NumberIcon />
                                </span>
                                {/* CONTENT */}
                                <div className="flex flex-row items-start gap-4 md:gap-5 mt-8 md:mt-10">
                                    <span className="flex items-center justify-center w-15 h-15 rounded-full bg-linear-to-b from-orange-400 to-orange-500 text-4xl  text-white shrink-0">
                                        <Icon />
                                    </span>
                                    <div className="flex-1">
                                        <h4 className="text-zinc-800 text-xl md:text-2xl font-bold">
                                            {item.title}
                                        </h4>
                                        <p className="text-zinc-600 mt-2 text-sm md:text-base">
                                            {item.Para}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

    )
}

export default Process
