'use client';
import React from 'react';
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";
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
    // animazioni
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };


    // funzione di filtraggio tra i projects
    const filteredProjects = projectsData.filter((proj) => {
        return proj.tag.includes(tag);
    });

    return (
        <div id='projects' className='pt-24'>
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

            <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.git}
                            previewUrl={project.preview}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection