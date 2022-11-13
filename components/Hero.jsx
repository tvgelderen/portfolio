import React from "react";
import { useAppContext } from "../context/AppContext";
import { home } from "../languages/home";
import { AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'

const Hero = () => {
    const { language } = useAppContext();

    const content = home[language] !== undefined ? home[language] : home['en']

    return (
        <div
          className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-gradient-to-b from-[#e66465] to-[#9198e5]'
        >
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 dark:bg-black/60 z-[2]' />
            <div className='p-5 text-white z-[2] mt-[-10rem]'>
                <h2 className='text-5xl font-bold'>{content.hello} <span className="text-[#1c1c1c] dark:text-[#121212]">Timen</span>.</h2>
                <p className='py-5 text-xl w-[100%] md:w-[80%]'>{content.message}</p>
                <div className="flex items-center justify-between w-full">
                    <a 
                        target="_blank"  
                        href="https://www.linkedin.com/in/timen-van-gelderen/"
                        className="rounded-full p-3 m-4 hover:bg-black/10">
                        <BsLinkedin size={20} />
                    </a>
                    <a  
                        target="_blank" 
                        href="https://github.com/TvGelderen"
                        className="rounded-full p-3 m-4 hover:bg-black/10">
                        <BsGithub size={20} />
                    </a>
                    <a  
                        target="_blank" 
                        href="#"
                        className="rounded-full p-3 m-4 hover:bg-black/10">
                        <AiOutlineMail size={20} />
                    </a>
                    <a  
                        target="_blank" 
                        href="#"
                        className="rounded-full p-3 m-4 hover:bg-black/10">
                        <RiContactsLine size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero