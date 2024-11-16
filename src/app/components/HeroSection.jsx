'use client';
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-12 ">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Hello, I'm{" "}
                    </span>
                    <TypeAnimation
                        sequence={[

                            'a Web Developer',
                            1000,
                            'Nal',
                            1000,
                        ]}
                        wrapper="span"
                        speed={20}
                        repeat={0}
                        cursor={false}
                    />
                </h1>

                <p className="text-[#ADB7BE] sm:text-lg lg:text-xl mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam ipsum eaque rerum ipsam ipsa impedit! Laboriosam vero sunt fugit.</p>
                <div>
                    <button className="px-6 py-3 sm:w-fit  w-full rounded-full mr-4 bg-gradient-to-br from-blue-900 via-purple-700 to-pink-300 bg-white hover:bg-slate-200 text-white">Hire Me</button>

                    <button className="px-1 py-1  w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 hover:bg-slate-800 text-white  mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download CV
                        </span>
                    </button>
                </div>

            </div>
            <div className="col-span-5 place-self-end mt-4 lg:mt-0 ">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image width={300} alt="hero image" height={300} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src='/images/hero-image.png' />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;