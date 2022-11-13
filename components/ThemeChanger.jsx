import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const ThemeChanger = () => {
    const [loaded, setLoaded] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => setLoaded(true), [])

    const currentTheme = theme === 'system' ? systemTheme : theme

    return (
        <div className='fixed z-[11] right-2 bottom-2 p-3 rounded-full hover:bg-black/20'>
            {currentTheme === 'dark' && loaded
              ? <BsFillSunFill 
                  size={20} 
                  className="cursor-pointer"
                  onClick={() => setTheme('light')}
                />
              : <BsFillMoonFill 
                  size={20} 
                  className="cursor-pointer" 
                  onClick={() => setTheme('dark')}
                />}
        </div>
    )
}

export default ThemeChanger
