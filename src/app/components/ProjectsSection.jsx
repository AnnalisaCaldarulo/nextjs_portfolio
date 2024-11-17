'use client';
import React from 'react';
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { useState } from 'react';

const tags = [

];

const projectsData = [
    {
        id: 1,
        title: 'Weather App',
        description: 'Weather App built in react',
        image: '/images/projects/weather-app.png',
        git: 'https://github.com/AnnalisaCaldarulo97/react_weather_app',
        preview: '',
        tag: ['All', 'React']
    },
    {
        id: 2,
        title: 'Calculator',
        description: 'Calculator App built in react',
        image: '/images/projects/calculator.png',
        git: 'https://github.com/AnnalisaCaldarulo97/calculator_react',
        preview: '',
        tag: ['All', 'React']
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState('All');
    const handleTagCHange = (newTag) => {
        setTag(newTag);
    }
    return (
        <div id='projects'>
            <h2>My Projects</h2>
            {/* filter buttons */}
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                {/* <button className='rounded-full border-2 border-purple-500 px-6 py-6 text-lg cursor-pointer'>Frontend</button>
                <button className='rounded-full border-2 border-slate-600 px-6 py-6 text-lg md:text-xl cursor-pointer hover:border-white'>Backend</button> */}
                <ProjectTag
                    onClick={handleTagCHange}
                    tag='All'
                    name='All'
                    isSelected={tag == 'All'}
                />
                <ProjectTag
                    onClick={handleTagCHange}
                    tag='React'
                    name='React'
                    isSelected={tag == 'React'}
                />
            </div>

            {/* cards */}
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((proj) => (
                    <div key={proj.id} className='cols-12'>
                        <ProjectCard previewUrl={proj.preview} gitUrl={proj.git} title={proj.title} description={proj.description} imgUrl={proj.image} />
                    </div>
                ))}
                {projectsData.map((proj) => (
                    <div key={proj.id} className='cols-12'>
                        <ProjectCard previewUrl={proj.preview} gitUrl={proj.git} title={proj.title} description={proj.description} imgUrl={proj.image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection