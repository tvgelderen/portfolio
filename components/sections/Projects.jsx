import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../../context/AppContext'
import ProjectCard from '../ProjectCard'

import { projects } from '../../languages/projects'
import { ProjectData } from '../data/ProjectData'
import useWindowDimensions from '../hooks/useWindowWidth'

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
    const [moveLeft, setMoveLeft] = useState(true)

    const { language } = useAppContext()
    const { width } = useWindowDimensions();
    
    const length = ProjectData.length
    const content = projects[language] === undefined ? projects['en'] : projects[language]

    const handleNext = () => {
        setPrevious(current)
        setCurrent(current + 1 === length ? 0 : current + 1)
        setMoveLeft(true)
    }

    const handlePrevious = () => {
        setPrevious(current)
        setCurrent(current - 1 < 0 ? length - 1 : current - 1)
        setMoveLeft(false)
    }

    const [variantsLeft, setVariantsLeft] = useState()
    const [variantsOldLeft, setVariantsOldLeft] = useState()
    const [variantsRight, setVariantsRight] = useState()
    const [variantsOldRight, setVariantsOldRight] = useState()
    
    useEffect(() => {        
        setVariantsLeft({
            hidden: {
                x: (width / 2),
                scale: 0,
                opacity: 0.25,
                rotateZ: 45
            },
            visible: {
                x: 0,
                scale: 1,
                opacity: 1,
                rotateZ: 0,
                transition: {
                    duration: 1.6
                }
            }
        })
        setVariantsOldLeft({
            hidden: {
                x: 0,
                scale: 1,
                opacity: 1
            },
            visible: {
                x: -(width / 2),
                scale: 0,
                opacity: 0.25,
                rotateZ: -45,
                transition: {
                    duration: 1.6
                }
            }
        })
        setVariantsRight({
            hidden: {
                x: -(width / 2),
                scale: 0,
                opacity: 0.25,
                rotateZ: -45
            },
            visible: {
                x: 0,
                scale: 1,
                opacity: 1,
                rotateZ: 0,
                transition: {
                    duration: 1.6
                }
            }
        })
        setVariantsOldRight({
            hidden: {
                x: 0,
                scale: 1,
                opacity: 1,
                rotateZ: 0
            },
            visible: {
                x: (width / 2),
                scale: 0,
                opacity: 0.25,
                rotateZ: 45,
                transition: {
                    duration: 1.6
                }
            }
        })
    }, [width])

    return (
        <div className="sectionStyle">
            <p className="sectionHead">{content.head}</p>
            <h3 className="sectionTitle">{content.title}</h3>
            <div className='w-full flex justify-center items-center group mt-4 lg:mt-12'>
                    {ProjectData.map((project, index) => {
                        if (index == current) 
                        {
                            if (current == previous)
                                return (
                                    <motion.div 
                                      key={index}
                                      initial="hidden"
                                      animate="visible"
                                      variants={variantsLeft} 
                                    >
                                        <ProjectCard project={project} />
                                    </motion.div>
                                )
                            else
                                return (
                                    <>
                                        <motion.div 
                                          key={index + 1}
                                          initial="hidden"
                                          animate="visible"
                                          variants={moveLeft ? variantsLeft : variantsRight}  
                                          className="absolute"
                                        >
                                            <ProjectCard project={project} />
                                        </motion.div>
                                        <motion.div 
                                          key={index + 2}
                                          initial="hidden"
                                          animate="visible"
                                          variants={moveLeft ? variantsOldLeft : variantsOldRight}  
                                        >
                                            <ProjectCard project={ProjectData[previous]} />
                                        </motion.div>
                                    </>
                                )
                        }
                    })}
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
            </div>
        </div>
    )
}

export default Projects
