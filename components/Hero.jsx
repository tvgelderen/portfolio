import React, { useRef } from "react";
import { useAppContext } from "../context/AppContext";
import { hero } from "../languages/hero";
import { AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'

import { motion } from 'framer-motion'
import { useFollowPointer } from "./useFollowPointer";
import Typewriter from 'typewriter-effect'

const Hero = () => {
    const ref = useRef(null)
    const { x, y } = useFollowPointer(ref)

    const { language } = useAppContext();

    const content = hero[language] !== undefined ? hero[language] : hero['en']        

    return (
        <div
          className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-gradient-to-b from-[#e66465] to-[#9198e5]'
        >
            {/* <motion.div
              ref={ref}
              className="p-10 z-[1] rounded-full bg-black/20"
              animate={{ x, y }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 70,
                restDelta: 0.0005
              }}
            /> */}

            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 dark:bg-black/60 z-[2]' />
            <div className='p-5 text-white z-[2] mt-[-10rem]'>
                <div className="max-w-[660px] m-auto flex-row justify-center text-center overflow-visible">
                    <motion.h2 
                      initial={{
                        y: -200,
                        opacity: 0,
                        scale: 0
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1
                      }}
                      transition={{
                        duration: 1.3
                      }}
                      className='font-courier text-5xl md:text-6xl font-bold'
                    >
                        {content.hello} <span className="text-[#1c1c1c] dark:text-dark-900">Timen</span>.
                    </motion.h2>
                    <div className="mt-4">
                        <span className="font-courier text-3xl md:text-4xl">
                            <Typewriter
                                options={{
                                    strings: content.messages,
                                    skipAddStyles: false,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                </div>
                <div className="w-[360px] m-auto flex justify-center">
                    <motion.div 
                      initial={{
                        y: 900,
                        opacity: 0,
                        scale: 0
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1
                      }}
                      transition={{
                        duration: 1.3
                      }}
                      className="flex items-center justify-between w-full"
                    >
                        <a 
                            target="_blank"  
                            href="https://www.linkedin.com/in/timen-van-gelderen/"
                            className="rounded-full p-3 m-4 hover:bg-black/10 hover:scale-110">
                            <BsLinkedin size={20} />
                        </a>
                        <a  
                            target="_blank" 
                            href="https://github.com/TvGelderen"
                            className="rounded-full p-3 m-4 hover:bg-black/10 hover:scale-110">
                            <BsGithub size={20} />
                        </a>
                        <a  
                            target="_blank" 
                            href="#"
                            className="rounded-full p-3 m-4 hover:bg-black/10 hover:scale-110">
                            <AiOutlineMail size={20} />
                        </a>
                        <a  
                            target="_blank" 
                            href="#"
                            className="rounded-full p-3 m-4 hover:bg-black/10 hover:scale-110">
                            <RiContactsLine size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero