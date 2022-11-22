import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const ThemeChanger = () => {
    const [loaded, setLoaded] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => setLoaded(true), []);

    const currentTheme = theme === 'system' ? systemTheme : theme

    return (
        <div 
          className='fixed z-[11] p-3 right-4 bottom-4 rounded-full hover:bg-light-theme/30 dark:hover:bg-dark-theme/30 cursor-pointer'
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        >
            {currentTheme === 'dark' && loaded
              ? <BsFillSunFill size={20} />
              : <BsFillMoonFill size={20} />}
        </div>
    )
}

export default ThemeChanger
