import React from 'react'
import { motion } from 'framer-motion'

const HeroBackground = () => {
  return (
    <div
      className='relative flex justify-center items-center mt-[-2rem]'
    >
        <div className='absolute border border-transparent rounded-full h-[480px] w-[480px] mt-[-220px] md:h-[660px] md:w-[660px] md:mt-[-220px] shadow-lg shadow-dark-900 backdrop-blur-sm' />
    </div>
  )
}

export default HeroBackground
