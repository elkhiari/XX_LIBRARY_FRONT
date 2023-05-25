import React from 'react'

function HomeTitle({title,subtitle}) {
  return (
    <div className=''>
        <div className="flex justify-center items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-50 syne mb-4">
                {title} <span className="text-sm md:text-xl text-gray-500">{subtitle}</span>
            </h1>
        </div>
        <div className="flex justify-center items-center">
            <div className="w-16 h-1 bg-blue-500 rounded-full mr-1"></div>
            <div className="w-16 h-1 bg-blue-500 rounded-full mr-1"> </div>
            <div className="w-16 h-1 bg-blue-500 rounded-full"> </div>
        </div>
    </div>
  )
}

export default HomeTitle