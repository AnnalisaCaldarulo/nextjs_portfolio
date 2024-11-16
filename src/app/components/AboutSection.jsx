'use client';
import Image from "next/image";
import { useState, useTransition } from "react";
import React from "react";
import TabButton from "./TabButton";
const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className="list-disc pl-2">
                <li>PHP, Laravel, Livewire</li>
                <li>HTML, CSS</li>
                <li>JavaScript, React.js, Next.js</li>
                <li>SQL, MySQL</li>
                <li>OOP</li>
                <li>Scrum, Agile</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul className="list-disc pl-2">
                <li>Web development teacher @Aulab Hackademy</li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certification',
        content: (
            <ul className="list-disc pl-2">
                <li> <a href="https://www.credential.net/6fa5e88b-4bf6-4582-a0b1-7bc9b591ac5e">Full Stack Web Developer</a> </li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-start px-4 xl:gap-16 sm:py-16 xl:px-16 ">
                <Image alt="about me" src="/images/about.png" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                    <p className="text-base md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo qui, itaque ipsum voluptatem voluptates unde iste repudiandae, rem harum optio eaque debitis officia similique accusantium, alias totam id. Voluptas, minus.</p>
                    <div className="flex flex-row mt-8">

                        <TabButton selectTab={() => handleTabChange("skills")} active={tab == 'skills'} > {" "} Skills {" "} </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab == 'experience'} > {" "} Experience {" "} </TabButton>
                        <TabButton selectTab={() => handleTabChange("certification")} active={tab == 'certification'} > {" "} Certifications {" "} </TabButton>


                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t)=>t.id ===tab).content}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection;