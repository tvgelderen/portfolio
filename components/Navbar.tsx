import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'
import { NavbarData } from "./data/NavbarData"
import { useAppContext } from "../context/AppContext"
import LanguageSelector from "./LanguageSelector"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from "next-themes"
import ThemeChanger from "./ThemeChanger"
import Logo from "./Logo"

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [logo, setLogo] = useState<string>('');
    const [color, setColor] = useState<string>('bg-transparent');
    const [textColor, setTextColor] = useState<string>('white');
    const [shadow, setShadow] = useState<string>('');
    
    const { systemTheme, theme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const { language, setLanguage } = useAppContext();
    const router = useRouter();
    const { lang } = router.query;

    const navItems = NavbarData(language === null ? 'en' : language);

    useEffect(() => {
        if (lang === undefined || lang === 'en')
            setLanguage('en');
        else
            setLanguage('nl');

        setLogo(currentTheme === 'light' ? 'black' : 'white');
    }, [])

    useEffect(() => {
        if (currentTheme === 'dark')
            setLogo('white');
        else
            setLogo('black');
    }, [currentTheme]);

    useEffect(() => {
        const changeColor = () => {            
            if (window.scrollY >= 90) {
                setColor('bg-light-secondary dark:bg-dark-primary');
                setTextColor('#121212');
                setShadow('shadow-sm');
                setLogo('#af35dd')
            } else {
                setColor('bg-transparent');
                setTextColor('text-[#121212] dark:text-[#eeeeee]');
                setShadow('');
                setLogo(currentTheme === 'light' ? 'black' : 'white');
            }
        }

        window.addEventListener('scroll', changeColor);

        return () => window.removeEventListener('scroll', changeColor);
    }, [currentTheme]);

    return (
        <div className={`fixed left-0 top-0 w-full z-10 md:pr-2 ease-in duration-300 shadow-dark-100 dark:shadow-black ${shadow} ${color}`}>
            <div className="relative w-full">
                <div className=" max-w-[1300px] m-auto h-full flex justify-between px-1 items-center">
                    <motion.div
                      initial='hidden'
                      animate='visible'
                      variants={{
                        hidden: { y: -100 },
                        visible: { y: 0 }
                      }}
                      className='lg:mx-4 mx-2'
                    >
                        <Link href='/'>
                            <Logo color={logo} />
                        </Link>
                    </motion.div>
                    <motion.ul 
                      className={`hidden md:flex h-full uppercase lg:pt-7 ${textColor}`}
                      initial='hidden'
                      animate='visible'
                      variants={{
                        hidden: { y: -100 },
                        visible: {
                            y: 0,
                            transition: {
                                delayChildren: 0.5,
                                staggerChildren: 0.25
                            }
                        }
                      }}
                    >
                        {navItems.map(item => {
                            return (
                                <motion.li 
                                  key={item.id}
                                  variants={{
                                    hidden: { y: -100 },
                                    visible: { y: 0 }
                                  }}
                                >
                                    <motion.a
                                      className={`lg:px-4 md:px-[8px] border-b-4 border-transparent cursor-pointer ${shadow === '' ? 'lg:pt-[17px] md:pt-[15px] lg:pb-[14px] md:pb-[12px]' : 'hover:border-light-theme/80 dark:hover:border-dark-theme/80 hover:text-gray-500 lg:py-[27px] md:py-[21px]'}`}
                                      onClick={() => {
                                        if (document.getElementById(item.id))
                                            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                                        else
                                        {
                                            router.push(`/${item.path}`);
                                            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                                        }
                                      }}
                                      whileHover={shadow === '' ? { background: "linear-gradient(90deg, rgba(123, 47, 247, 0.2), rgba(241, 7, 163, 0.2))" } : {}}
                                    >
                                        {item.name}
                                    </motion.a>
                                </motion.li>
                            )}
                        )}
                        <motion.li 
                          initial='hidden'
                          animate='visible'
                          variants={{
                            hidden: { y: -100 },
                            visible: { y: 0, transition: { delay: 0.25 * (navItems.length + 2 ) } }
                          }}
                          className='md:mx-3 lg:mx-2 pr-4'
                        >
                            <ThemeChanger />
                        </motion.li>
                        <motion.li 
                          initial='hidden'
                          animate='visible'
                          variants={{
                            hidden: { y: -100 },
                            visible: { y: 0, transition: { delay: 0.25 * (navItems.length + 3 ) } }
                          }}
                          className="lg:mb-6 md:mt-[-6px] lg:mx-4 mx-2"
                        >
                            <LanguageSelector />
                        </motion.li>
                    </motion.ul>

                    <div className="flex justify-between md:hidden">
                        <motion.div 
                          className={`mt-[1px] mr-6 z-10 ${textColor}`}
                          initial='hidden'
                          animate='visible'
                          variants={{
                            hidden: { y: -100 },
                            visible: { y: 0, transition: { delay: 0.25 } }
                          }}
                        >
                            {!open && <ThemeChanger />}
                        </motion.div>
                        <motion.div 
                          className={`mx-2 z-10 cursor-pointer ${textColor}`} 
                          onClick={() => setOpen(true)}
                          initial='hidden'
                          animate='visible'
                          variants={{
                            hidden: { y: -100 },
                            visible: { y: 0, transition: { delay: 0.5 } }
                          }}
                        >
                            {!open && <AiOutlineMenu size={22} />}
                        </motion.div>
                    </div>

                    {open && (
                        <div className="fixed md:hidden left-0 top-0 w-full h-screen bg-black/50" />
                    )}
                    
                    <div className="flex fixed md:hidden left-0 top-0">
                        <AnimatePresence>
                            {open && (
                                <motion.div 
                                    className="flex relative md:hidden left-0 top-0 flex-col w-[280px] sm:w-[320px] h-screen bg-white dark:bg-dark-primary px-3 sm:px-4 py-1"
                                    initial={{ x: -320 }}
                                    animate={{ x: 0 }}
                                    exit={{ x: -320 }}
                                    transition={{ stiffness: 5 }}
                                >
                                    <div className="relative flex w-full items-center justify-between pb-1 border-b-2 dark:border-dark-600">
                                        <Image 
                                            src='/logos/logo_purple.png'
                                            alt='logo'
                                            width='190'  
                                            height='50'
                                            className="w-[140px] sm:w-[170px]"
                                        />
                                        <div 
                                            className="mb-4 p-1 rounded-full shadow-md shadow-dark-400 dark:shadow-dark-900 dark:bg-dark-tertiary cursor-pointer"
                                            onClick={() => setOpen(false)}
                                        >
                                            <AiOutlineClose size={20} className="text-dark-900 dark:text-dark-100 w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                    </div>
                                    <div className="border-b-2 pb-4 dark:border-dark-600">
                                        <ul className="text-dark-900 uppercase pt-4">
                                            {navItems.map(item => {
                                                return (
                                                <li className="py-2 sm:py-4" key={item.id}>
                                                    <a
                                                    className="sm:text-xl cursor-pointer hover:text-dark-200"
                                                    onClick={() => {
                                                        if (document.getElementById(item.id))
                                                            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                                                        else
                                                        {
                                                            router.push(`/${item.path}`);
                                                            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                                                        }

                                                        setOpen(false)
                                                    }}
                                                    >
                                                        {item.name}
                                                    </a>
                                                </li>
                                            )})}
                                        </ul>
                                    </div>
                                    <div className="py-4">
                                        <LanguageSelector />
                                    </div>
                                    <div className=" w-[280px] sm:w-[320px] text-slate-900 absolute bottom-0 left-0">
                                        <p className="uppercase sm:text-xl pl-4 text-light-theme dark:text-dark-theme">Get in touch</p>
                                        <div className="flex items-center justify-between w-full mb-2 px-2 sm:px-0">
                                            <a 
                                            target="_blank"  
                                            href="https://www.linkedin.com/in/timen-van-gelderen/"
                                            className="rounded-full p-2 m-2 sm:p-3 sm:m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-dark-tertiary hover:scale-110">
                                                <BsLinkedin size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </a>
                                            <a  
                                            target="_blank" 
                                            href="https://github.com/TvGelderen"
                                            className="rounded-full p-2 m-2 sm:p-3 sm:m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-dark-tertiary hover:scale-110">
                                                <BsGithub size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </a>
                                            <a  
                                            target="_blank" 
                                            href="#"
                                            className="rounded-full p-2 m-2 sm:p-3 sm:m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-dark-tertiary hover:scale-110">
                                                <AiOutlineMail size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </a>
                                            <a  
                                            target="_blank" 
                                            href="#"
                                            className="rounded-full p-2 m-2 sm:p-3 sm:m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-dark-tertiary hover:scale-110">
                                                <RiContactsLine size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
