import React from 'react';
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: 'Weather App',
        description: 'Weather App built in react',
        image: '/images/projects/weather-app.png',
        git: 'https://github.com/AnnalisaCaldarulo97/react_weather_app',
        preview: '',
        tag: ['React']
    },
    {
        id: 2,
        title: 'Calculator',
        description: 'Calculator App built in react',
        image: '/images/projects/calculator.png',
        git: 'https://github.com/AnnalisaCaldarulo97/calculator_react',
        preview: '',
        tag: ['React']
    },
]

const ProjectsSection = () => {
    return (
        <div id='projects'>
            <h2>My Projects</h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((proj) => (
                    <div key={proj.id} className='cols-12'>
                        <ProjectCard previewUrl={proj.preview} gitUrl={proj.git}  title={proj.title} description={proj.description} imgUrl={proj.image} />
                     </div>
                ))}
                {projectsData.map((proj) => (
                     <div key={proj.id} className='cols-12'>
                        <ProjectCard previewUrl={proj.preview} gitUrl={proj.git}  title={proj.title} description={proj.description} imgUrl={proj.image} />
                     </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection