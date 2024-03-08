import React from "react";
import { AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { Typewriter } from "react-simple-typewriter";

type Props = {
  content: any
}

const Hero = ({ content }: Props) => {
  return (
    <div id="hero" className='flex items-center justify-center h-screen bg-center bg-cover bg-light-background dark:bg-dark-background' style={{ backgroundImage: `url("https://i.imgur.com/2Bwe76s.png")`, backgroundAttachment: 'fixed' }}>
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
                  duration: 1.6
                }}
                className='text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] xl:text-[5vw] 2xl:text-[3.8vw]'
              >
                  {content.hello} <span className="text-light-theme dark:text-dark-theme">Timen</span>.
              </motion.h3>
              <div className="mt-4 font-[500] text-lg sm:text-xl md:text-2xl lg:text-[2.6vw] xl:text-[2.1vw] 2xl:text-[1.6vw]">
                <Typewriter 
                  words={content.typewriter}
                  loop={true}
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
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
                duration: 1.6
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
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full p-3 m-4 hover:bg-black/20 hover:dark:bg-black/80 hover:scale-110 cursor-pointer">
                  <AiOutlineMail size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
            </motion.div>
          </div>
      </div>
    </div>
  )
}

export default Hero
