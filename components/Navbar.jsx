import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'
import { NavbarData } from "./NavbarData"
import { useAppContext } from "../context/AppContext"
import LanguageSelector from "./LanguageSelector"
import { useRouter } from "next/router"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [color, setColor] = useState('bg-transparent')
    const [textColor, setTextColor] = useState('white')
    const [shadow, setShadow] = useState('')
    const [logo, setLogo] = useState('/logos/logo_white.png')

    const { language, setLanguage } = useAppContext()

    const router = useRouter();
    const { lang } = router.query

    const navItems = NavbarData(language)

    const handleOpen = () => {
        setOpen(!open)
    }

    useEffect(() => {
        setLanguage(lang === undefined ? 'en' : lang)
    }, [])

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('bg-white dark:bg-slate-900')
                setTextColor('black')
                setShadow('shadow-md dark:shadow-none')
                setLogo('/logos/logo_purple.png' )
            } else {
                setColor('bg-transparent')
                setTextColor('white')
                setShadow('')
                setLogo('/logos/logo_white.png')
            }
        }

        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div 
          className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${shadow} ${color} shadow-gray-400`}
        >
            <div className="max-w-[1240px] m-auto h-full flex justify-between px-2 items-center text-white">
                <Link href='/' className="py-1">
                    <Image 
                      src={logo}
                      alt="logo"
                      width='240'  
                      height='50'
                      className="w-[140px] md:w-[180px] lg:w-[210px] object-cover"
                    />
                </Link>
                <ul className="hidden md:flex h-full lg:pt-6 md:pt-6" style={{ color: `${textColor}` }}>
                    {navItems.map(item => {
                        return (
                        <li className="md:px-[8px] lg:px-4 lg:pt-2 lg:pb-6 md:pb-5 border-b-4 border-transparent hover:border-gray-700" key={item.id}>
                            <Link href={language + item.path}>{item.name}</Link>
                        </li>
                    )})}
                    <li className="lg:mb-6 md:mt-[-4px] lg:mt-1 md:mx-1 lg:mx-5">
                        <LanguageSelector />
                    </li>
                </ul>

                <div className="flex justify-between md:hidden mr-2 z-10 cursor-pointer" onClick={handleOpen}>
                    {!open && <AiOutlineMenu size={20} style={{ color: `${textColor}`}} />}
                </div>

                {open && (
                    <div className="fixed md:hidden left-0 top-0 w-full h-screen bg-black/60">
                        <div className="relative md:hidden left-0 top-0 w-[70%] sm:w-[55%] h-screen bg-white dark:bg-slate-900 px-4 py-2 ease-in duration-500">
                            <div className="flex w-full items-center justify-between pb-3 border-b-2 dark:border-slate-700">
                                <Image 
                                  src='/logos/logo_purple.png'
                                  alt='logo'
                                  width='190'  
                                  height='50'
                                />
                                <div 
                                  className="mb-4 p-2 rounded-full shadow-md shadow-gray-500 dark:shadow-none dark:bg-slate-800 cursor-pointer"
                                  onClick={handleOpen}
                                >
                                    <AiOutlineClose size={20} className="text-black dark:text-white" />
                                </div>
                            </div>
                            <div>
                                <ul className="text-slate-900">
                                    {navItems.map(item => {
                                        return (
                                        <li className="py-4 text-2xl hover:text-gray-500" key={item.id}>
                                            <Link 
                                              href={item.path} 
                                              onClick={() => {setOpen(false)}}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    )})}
                                </ul>
                            </div>
                            <div className="w-[70%] sm:w-[55%] text-slate-900 fixed bottom-0 left-0 px-4">
                                <p className="uppercase pl-4">Get in touch</p>
                                <div className="flex items-center justify-between w-full mb-4 border-b-2 dark:border-slate-700">
                                    <a 
                                      target="_blank"  
                                      href="https://www.linkedin.com/in/timen-van-gelderen/"
                                      className="rounded-full p-3 m-4 shadow-md shadow-gray-500 dark:shadow-none dark:bg-slate-800">
                                        <BsLinkedin size={20} />
                                    </a>
                                    <a  
                                      target="_blank" 
                                      href="https://github.com/TvGelderen"
                                      className="rounded-full p-3 m-4 shadow-md shadow-gray-500 dark:shadow-none dark:bg-slate-800">
                                        <BsGithub size={20} />
                                    </a>
                                    <a  
                                      target="_blank" 
                                      href="#"
                                      className="rounded-full p-3 m-4 shadow-md shadow-gray-500 dark:shadow-none dark:bg-slate-800">
                                        <AiOutlineMail size={20} />
                                    </a>
                                    <a  
                                      target="_blank" 
                                      href="#"
                                      className="rounded-full p-3 m-4 shadow-md shadow-gray-500 dark:shadow-none dark:bg-slate-800">
                                        <RiContactsLine size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
