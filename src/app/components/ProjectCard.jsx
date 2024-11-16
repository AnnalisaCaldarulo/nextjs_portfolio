import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
function ProjectCard({ imgUrl, title, description }) {
    return (
        <div className='mb-5'>
            <div className='h-52 md:j:h-72 rounded-t-xl relative group'
                style={{
                    background: `url(${imgUrl})`, backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"></div>
            </div>
            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
                <h5 className='font-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#ADB7BE]'> {description} </p>
            </div>
        </div>
    );
}

export default ProjectCard