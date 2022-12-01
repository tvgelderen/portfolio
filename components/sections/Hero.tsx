import React from "react";
import { AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'

import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Image from "next/image";

const backgroundURL = "/bg.png"

type Props = {
  content: any
}

const Hero = ({ content }: Props) => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-center bg-cover'>
            <Image
              src={backgroundURL}
              alt=""
              width={2560}
              height={1440}
              className="hero absolute w-full h-screen object-cover object-center"
            />
            <div className='hero absolute top-0 left-0 right-0 bottom-0 bg-black/5 dark:bg-black/30' />

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