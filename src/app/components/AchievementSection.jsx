import React from 'react'

const list = [
    {
        metric: 'Projects',
        value: '5'
    },
    {
        metric: 'Years',
        value: '2+'
    },
];

function AchievementSection() {
    return (
        <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className="border-[#33353F] border rounded-full py-8 px-17 flex flex-row items-center justify-around">

                {
                    list.map((ach, index) => {
                        return (
                            <div key={index} className=' flex flex-col items-center justify-center mx-4'>
                                <h2 className='text-white text-4xl font-bold'>{ach.value} </h2>
                                <p className='text-[#ADB7BE] text-base'>{ach.metric} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AchievementSection