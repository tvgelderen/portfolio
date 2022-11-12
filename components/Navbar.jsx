import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [logo, setLogo] = useState('/logos/logo_white.png')

    const handleOpen = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('white')
                setTextColor('black')
                setLogo('/logos/logo_purple.png' )
            } else {
                setColor('transparent')
                setTextColor('white')
                setLogo('/logos/logo_white.png')
            }
        }

        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div 
          className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${textColor !== 'white' ? "shadow-2xl" : ""}`}
          style={{ backgroundColor: `${color}` }}  
        >
            <div className="max-w-[1240px] m-auto h-full flex justify-between px-2 items-center text-white">
                <Link href='/' className="py-1">
                    <Image 
                      src={logo}
                      width='190'  
                      height='50'
                      className="w-[120px] md:w-[190px] object-cover"
                    />
                </Link>
                <ul className="hidden md:flex h-full pt-6" style={{ color: `${textColor}` }}>
                    <li className="px-4 pb-6 "> {/* border-b-4 border-black */}
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="px-4 pb-6 ">
                        <Link href='/#about'>About</Link>
                    </li>
                    <li className="px-4 pb-6 ">
                        <Link href='#skills'>Skills</Link>
                    </li>
                    <li className="px-4 pb-6 ">
                        <Link href='/#projects'>Projects</Link>
                    </li>
                    <li className="px-4 pb-6 ">
                        <Link href='/#contact'>Contact</Link>
                    </li>
                </ul>

                <div className="block md:hidden z-10" onClick={handleOpen}>
                    {open ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
                </div>
                <div className={`sm:hidden absolute top-0 ${open ? "left-0" : "left-[-100%]" } right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300`}>
                    <ul>
                        <li className="p-4 text-3xl hover:text-gray-500">
                            <Link href='/'>Home</Link>
                        </li>
                        <li className="p-4 text-3xl hover:text-gray-500">
                            <Link href='/#gallery'>Gallery</Link>
                        </li>
                        <li className="p-4 text-3xl hover:text-gray-500">
                            <Link href='/#locations'>Locations</Link>
                        </li>
                        <li className="p-4 text-3xl hover:text-gray-500">
                            <Link href='/#parks'>Parks</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
