import React from "react";
import { AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'

import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

type Props = {
  content: any
}

const Hero = ({ content }: Props) => {
    return (
        <div className='flex items-center justify-center h-screen bg-center bg-cover' style={{ backgroundImage: `url(/img/bg.png)` }}>

            <div className='relative text-[#202020] z-[2] mb-[15rem]'>
                <div className="w-full max-w-[440px] md:max-w-[660px] m-auto flex-row justify-center text-center overflow-visible">
                    <motion.h3 
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
                        duration: 2.1
                      }}
                      className='text-4xl sm:text-5xl md:text-6xl font-bold'
                    >
                        {content.hello} <span className="text-light-theme dark:text-dark-theme">Timen</span>.
                    </motion.h3>
                    <div className="mt-4">
                      <span className="text-xl sm:text-2xl md:text-3xl">
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
                <div className="w-[300px] md:w-[360px] m-auto flex justify-center">
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
                      duration: 2.1
                    }}
                    className="flex items-center justify-between w-full"
                  >
                    <a 
                      target="_blank"  
                      href="https://www.linkedin.com/in/timen-van-gelderen/"
                      className="rounded-full p-3 m-4 hover:bg-black/20 hover:dark:bg-black/80 hover:scale-110">
                        <BsLinkedin size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </a>
                    <a  
                      target="_blank" 
                      href="https://github.com/TvGelderen"
                      className="rounded-full p-3 m-4 hover:bg-black/20 hover:dark:bg-black/80 hover:scale-110">
                        <BsGithub size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </a>
                    <a  
                      target="_blank" 
                      href="#"
                      className="rounded-full p-3 m-4 hover:bg-black/20 hover:dark:bg-black/80 hover:scale-110">
                        <AiOutlineMail size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </a>
                    <a  
                      target="_blank" 
                      href="#"
                      className="rounded-full p-3 m-4 hover:bg-black/20 hover:dark:bg-black/80 hover:scale-110">
                        <RiContactsLine size={20} className="md:w-7 md:h-7" />
                    </a>
                  </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero