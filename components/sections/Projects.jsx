import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { sectionStyle, sectionHead, sectionTitle } from '../SectionStyles'
import { useAppContext } from '../../context/AppContext'
import ProjectCard from '../ProjectCard'

import { projects } from '../../languages/projects'
import { ProjectData } from '../data/ProjectData'

const variants = {
    offscreen: {
        y: 200,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.6,
        },
    }
}

const Projects = () => {
    const [current, setCurrent] = useState(0)
    const [previous, setPrevious] = useState(0)
    const [moveLeft, setMoveLeft] = useState(false)
    const [moveRight, setMoveRight] = useState(false)

    const length = ProjectData.length

    const { language } = useAppContext()

    const content = projects[language] === undefined ? projects['en'] : projects[language]

    const handleNext = () => {
        setPrevious(current)
        setCurrent(current + 1 === length ? 0 : current + 1)
    }

    const handlePrevious = () => {
        setPrevious(current)
        setCurrent(current - 1 < 0 ? length - 1 : current - 1)
    }

    const variantsLeft = {
        hidden: {
            x: 800,
            scale: 0,
            opacity: 0.25
        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.6
            }
        }
    }

    const variantsOldLeft = {
        hidden: {
            x: 0,
            scale: 1,
            opacity: 1
        },
        visible: {
            x: -800,
            scale: 0,
            opacity: 0.25,
            transition: {
                duration: 1.6
            }
        }
    }

    return (
        <div className={sectionStyle}>
            <p className={sectionHead}>{content.head}</p>
            <h3 className={sectionTitle}>{content.title}</h3>
            <div className='relative w-full flex justify-center items-center group'>
                <div className='absolute left-0 opacity-30 group-hover:opacity-100 cursor-pointer' onClick={handlePrevious}>
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" 
                      className="w-12 h-12 lg:w-20 lg:h-20"
                      initial="offscreen"
                      whileInView="onscreen"
                      variants={variants}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </motion.svg>
                </div>
                <div className='absolute right-0 opacity-30 group-hover:opacity-100 cursor-pointer' onClick={handleNext}>
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" 
                      className="w-12 h-12 lg:w-20 lg:h-20"
                      initial="offscreen"
                      whileInView="onscreen"
                      variants={variants}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </motion.svg>
                </div>
                <div>
                    {ProjectData.map((project, index) => {
                        if (index == current) 
                            return (
                                <>
                                    <motion.div 
                                      key={index}
                                      initial="hidden"
                                      animate="visible"
                                      variants={variantsLeft}  
                                      className="absolute"
                                    >
                                        <ProjectCard project={project} />
                                    </motion.div>
                                    <motion.div 
                                      key={index}
                                      initial="hidden"
                                      animate="visible"
                                      variants={variantsOldLeft}  
                                    >
                                        <ProjectCard project={ProjectData[previous]} />
                                    </motion.div>
                                </>
                            )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
