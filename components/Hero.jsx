import React from "react";

const Hero = () => {
    return (
        <div
          className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-gradient-to-b from-[#e66465] to-[#9198e5]'
        >
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 dark:bg-black/60 z-[2]' />
            <div className='p-5 text-white z-[2] mt-[-10rem]'>
                <h2 className='text-5xl font-bold'>Hi! I'm <span className="text-[#1c1c1c] dark:text-[#121212]">Timen</span></h2>
                <p className='py-5 text-xl w-[100%] md:w-[75%]'>Welcome to my portfolio website.</p>
            </div>
        </div>
    )
}

export default Hero