import React from "react";
import { useAppContext } from "../../context/AppContext";
import { hero } from "../../languages/hero";
import { AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'

import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

const Hero = () => {
    const { language } = useAppContext();

    const content = hero[language] !== undefined ? hero[language] : hero['en'] 

    return (
        <div
          className='hero flex flex-col items-center justify-center h-screen mb-12 bg-center bg-cover'
          style={{ backgroundImage: "url('/bg-wide.png')" }}>
            <div className="absolute top-0 bottom-0 flex justify-center align-center z-[2]">
              <div className='relative flex justify-center items-center mt-[-2rem]'>
                  <div className='absolute border border-transparent rounded-full h-[480px] w-[480px] mt-[-220px] md:h-[660px] md:w-[660px] md:mt-[-220px] shadow-lg shadow-dark-900 bg-dark-primary/80' />
              </div>
            </div>

            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 dark:bg-black/75 backdrop-blur-[3px]' />
            <div className='relative text-white z-[2] mt-[-15rem]'>
                <div className="w-[440px] md:w-[660px] m-auto flex-row justify-center text-center overflow-visible">
                    <motion.h2 
                      initial={{
                        y: -250,
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
                        {content.hello} <span className="text-light-theme dark:text-dark-theme">Timen</span>.
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
                        y: 250,
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