import { motion } from "motion/react";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <div className="flex items-center justify-center h-dvh">
            <div className="relative text-[#202020] z-[2]">
                <div className="w-full max-w-[440px] md:max-w-[1200px] m-auto flex flex-col items-center justify-center text-center overflow-visible">
                    <div className="absolute inset-0 bg-light-theme/80 dark:bg-light-theme/40 blur-[200px]"></div>
                    <motion.h3
                        initial={{
                            y: -250,
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 40,
                            }
                        }}
                        transition={{
                            duration: .8
                        }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px]"
                    >
                        Hi! I'm&nbsp;
                        <span className="text-light-theme dark:text-dark-theme">
                            Timen
                        </span>
                        .
                    </motion.h3>
                    <div className="mt-4 font-[500] text-lg sm:text-xl md:text-2xl lg:text-3xl">
                        <Typewriter
                            words={[
                                "Welcome to my portfolio website!",
                                "I'm a software engineer.",
                            ]}
                            loop={true}
                            typeSpeed={100}
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
                            scale: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 40,
                            }
                        }}
                        transition={{
                            duration: .2
                        }}
                        className="flex items-center justify-between w-full z-10"
                    >
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/timen-van-gelderen/"
                            className="rounded-full p-3 m-4 hover:bg-light-theme/20 hover:dark:bg-dark-theme/30 hover:scale-110"
                        >
                            <BsLinkedin
                                size={20}
                                className="sm:w-6 sm:h-6 md:w-7 md:h-7"
                            />
                        </a>
                        <a
                            target="_blank"
                            href="https://github.com/TvGelderen"
                            className="rounded-full p-3 m-4 hover:bg-light-theme/20 hover:dark:bg-dark-theme/30 hover:scale-110"
                        >
                            <BsGithub
                                size={20}
                                className="sm:w-6 sm:h-6 md:w-7 md:h-7"
                            />
                        </a>
                        <a
                            target="_blank"
                            href="mailto:thvangelderen@gmail.com"
                            className="rounded-full p-3 m-4 hover:bg-light-theme/20 hover:dark:bg-dark-theme/30 hover:scale-110"
                        >
                            <AiOutlineMail
                                size={20}
                                className="sm:w-6 sm:h-6 md:w-7 md:h-7"
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
