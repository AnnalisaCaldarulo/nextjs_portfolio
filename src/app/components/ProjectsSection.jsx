import React from 'react';
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: 'Weather App',
        description: 'Weather App built in react',
        image: '/images/projects/weather-app.png',
        tag: ['React']
    },
    {
        id: 2,
        title: 'Calculator',
        description: 'Calculator App built in react',
        image: '/images/projects/calculator.png',
        tag: ['React']
    },
]

const ProjectsSection = () => {
    return (
        <>
            <h2>My Projects</h2>
            <div className='md:grid md:grid-cols-2 gap-8'>
                {projectsData.map((proj) => (
                    <div key={proj.id} className='cols-12'>
                        <ProjectCard  title={proj.title} description={proj.description} imgUrl={proj.image} />
                     </div>
                ))}
                {projectsData.map((proj) => (
                     <div key={proj.id} className='cols-12'>
                        <ProjectCard  title={proj.title} description={proj.description} imgUrl={proj.image} />
                     </div>
                ))}
            </div>
        </>
    )
}

export default ProjectsSection