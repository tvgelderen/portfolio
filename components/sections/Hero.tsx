import React, { useEffect, useState } from "react";
import { AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import Navbar from "../Navbar";

const heroVariants = {
  hidden: {
    x: -1500
  },
  visible: {
    x: 0,
    transition: { duration: 1 }
  }
}

type Props = {
  content: any
}

const Hero = ({ content }: Props) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => setLoaded(true), []);

  return (
    <div className='flex items-center justify-center h-screen bg-center bg-cover bg-light-background dark:bg-dark-background' style={{ backgroundImage: `url(/img/bg.png)` }}>
      <Navbar />
      <div className='relative text-[#202020] z-[2]'>
          <div className="w-full max-w-[440px] md:max-w-[720px] m-auto flex-row justify-center text-center overflow-visible">
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
                className='text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] xl:text-[5vw] 2xl:text-[3.8vw]'
              >
                  {content.hello} <span className="text-light-theme dark:text-dark-theme">Timen</span>.
              </motion.h3>
              <div className="mt-4 font-[500] text-lg sm:text-xl md:text-2xl lg:text-[2.6vw] xl:text-[2.1vw] 2xl:text-[1.6vw]">
                I'm a software developer.
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
                className="lg:cursor-none rounded-full p-3 m-4 hover:bg-black/20 hover:dark:bg-black/80 hover:scale-110">
                  <BsLinkedin size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a  
                target="_blank" 
                href="https://github.com/TvGelderen"
                className="lg:cursor-none rounded-full p-3 m-4 hover:bg-black/20 hover:dark:bg-black/80 hover:scale-110">
                  <BsGithub size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a  
                target="_blank" 
                href="#"
                className="lg:cursor-none rounded-full p-3 m-4 hover:bg-black/20 hover:dark:bg-black/80 hover:scale-110">
                  <AiOutlineMail size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a  
                target="_blank" 
                href="#"
                className="lg:cursor-none rounded-full p-3 m-4 hover:bg-black/20 hover:dark:bg-black/80 hover:scale-110">
                  <RiContactsLine size={20} className="md:w-7 md:h-7" />
              </a>
            </motion.div>
          </div>
      </div>
    </div>
  )
}

export default Hero