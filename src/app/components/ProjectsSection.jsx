'use client';
import React from 'react';
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { useState } from 'react';

const projectsData = [
    {
        id: 1,
        title: 'Weather App',
        description: 'Weather App built in react',
        image: '/images/projects/weather-app.png',
        git: 'https://github.com/AnnalisaCaldarulo97/react_weather_app',
        preview: '',
        tag: ['All', 'Frontend']
    },
    {
        id: 2,
        title: 'Calculator',
        description: 'Calculator App built in react',
        image: '/images/projects/calculator.png',
        git: 'https://github.com/AnnalisaCaldarulo97/calculator_react',
        preview: '',
        tag: ['All', 'Frontend']
    },
    {
        id: 3,
        title: 'Weather App',
        description: 'Weather App built in react',
        image: '/images/projects/weather-app.png',
        git: 'https://github.com/AnnalisaCaldarulo97/react_weather_app',
        preview: '',
        tag: ['All', 'Backend']
    },
    {
        id: 4,
        title: 'Calculator',
        description: 'Calculator App built in react',
        image: '/images/projects/calculator.png',
        git: 'https://github.com/AnnalisaCaldarulo97/calculator_react',
        preview: '',
        tag: ['All', 'Backend']
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState('All');
    const handleTagCHange = (newTag) => (
        setTag(newTag)
    );

    // funzione di filtraggio tra i projects
    const filteredProjects = projectsData.filter((proj) => {
        return proj.tag.includes(tag);
    });

    return (
        <div id='projects'>
            <h2>My Projects</h2>
            {/* filter buttons */}
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagCHange}
                    name='All'
                    isSelected={tag == 'All'}
                />
                <ProjectTag
                    onClick={handleTagCHange}
                    name='Frontend'
                    isSelected={tag == 'Frontend'}
                />
                 <ProjectTag
                    onClick={handleTagCHange}
                    name='Backend'
                    isSelected={tag == 'Backend'}
                />
            </div>

            {/* cards */}
            <div className='grid md:grid-cols-2 gap-8 md:gap-12 '>
                {filteredProjects.map((proj) => (
                    <div key={proj.id} className='cols-12'>
                        <ProjectCard previewUrl={proj.preview} gitUrl={proj.git} title={proj.title} description={proj.description} imgUrl={proj.image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection