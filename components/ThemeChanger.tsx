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
    <div className='fixed cursor-pointer' onClick={toggleTheme}>
      <AnimatePresence>
        {loaded && currentTheme === 'dark' &&
          <motion.div
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={variants}
            className='absolute'
          >
            <BsFillSunFill size={20} />
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence>
        {loaded && currentTheme === 'light' &&
          <motion.div
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={variants}
            className='absolute'
          >
            <BsFillMoonFill size={20} />
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default ThemeChanger
