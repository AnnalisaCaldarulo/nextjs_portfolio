import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';


function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
    return (
        <div className='mb-5'>
            <div className='h-52 md:j:h-72 rounded-t-xl relative group overflow-hidden'
                style={{
                    background: `url(${imgUrl})`, backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full dark:bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link target='_blank' href={gitUrl} className='h-14 w-14 mr-2 border-2 relative rounded-full dark:border-[#ADB7BE] dark:hover:border-white hover:border-black group/link'>
                        <CodeBracketIcon className='h-10 w-10 dark:text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer dark:group-hover/link:text-white' />
                    </Link>
                    <Link target='_blank' href={gitUrl} className='h-14 w-14 border-2 relative rounded-full dark:border-[#ADB7BE] dark:hover:border-white group/link'>
                        <EyeIcon className='h-10 w-10 dark:text-[#ADB7BE] cursor-pointer dark:group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                    </Link>
                </div>
            </div>
            <div className="dark:text-white rounded-b-xl pt-3 dark:bg-[#181818] bg-tertiary-500 py-6 px-4">
                <h5 className='font-xl font-semibold mb-2'>{title}</h5>
                <p className='dark:text-[#ADB7BE]'> {description} </p>
            </div>
        </div>
    );
}

export default ProjectCard