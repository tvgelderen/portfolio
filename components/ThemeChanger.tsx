import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const ThemeChanger = () => {
  const [loaded, setLoaded] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  
  const currentTheme = theme === 'system' ? systemTheme : theme

  const toggleTheme = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark');

  useEffect(() => setLoaded(true), []);

  const variants = {
    hidden: {
      y: -200,
    },
    visible: {
      y: 0,
    },
    exit: {
      y: -200,
    }
  }

  return (
    <div className='cursor-pointer' onClick={toggleTheme}>
        {loaded && currentTheme === 'dark' &&
          <BsFillSunFill size={18} className='w-4 sm:w-5 md:w-6' />
        }
        {loaded && currentTheme === 'light' &&
          <BsFillMoonFill size={18} className='w-4 sm:w-5 md:h-5' />
        }
    </div>
  )
}

export default ThemeChanger
