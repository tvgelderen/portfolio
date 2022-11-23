import React, { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import ProjectCard from '../ProjectCard'
import { ProjectData } from '../data/ProjectData'
import useWindowDimensions from '../hooks/useWindowWidth'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const variants = {
    hidden: {
        y: -200,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.6,
        },
    }
}

type Props = {
    content: any
}

const Projects = ({ content }: Props) => {
    const [current, setCurrent] = useState<number>(0)
    const [previous, setPrevious] = useState<number>(0)
    const [moveLeft, setMoveLeft] = useState<boolean>(true)

    let { width } = useWindowDimensions();
    
    const length = ProjectData.length

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

    const [variantsLeft, setVariantsLeft] = useState<Variants>()
    const [variantsOldLeft, setVariantsOldLeft] = useState<Variants>()
    const [variantsRight, setVariantsRight] = useState<Variants>()
    const [variantsOldRight, setVariantsOldRight] = useState<Variants>()
    
    useEffect(() => {
        if (width !== null && width > 1200)
            width = 1200;

        if (width !== null)   
        {
            width -= 50;
            setVariantsLeft({
                hidden: { x: (width / 2), scale: 0, opacity: 0.25, rotateZ: 25 },
                visible: { x: 0, scale: 1, opacity: 1, rotateZ: 0, transition: { duration: 1.6 } }
            })
            setVariantsOldLeft({
                hidden: { x: 0, scale: 1, opacity: 1 },
                visible: { x: -(width / 2), scale: 0, opacity: 0.25, rotateZ: -25, transition: { duration: 1.6 } }
            })
            setVariantsRight({
                hidden: { x: -(width / 2), scale: 0, opacity: 0.25, rotateZ: -25 },
                visible: { x: 0, scale: 1, opacity: 1, rotateZ: 0, transition: { duration: 1.6 } }
            })
            setVariantsOldRight({
                hidden: { x: 0, scale: 1, opacity: 1, rotateZ: 0 },
                visible: { x: (width / 2), scale: 0, opacity: 0.25, rotateZ: 25, transition: { duration: 1.6 } }
            })
        }
    }, [width])

    return (
        <div className="sectionStyle">
            <div className="sectionContent">
                <p className="sectionHead">{content.head}</p>
                <h3 className="sectionTitle">{content.title}</h3>
                <div className='w-full flex justify-center items-center mt-4 md:mt-8 lg:mt-12'>
                    {ProjectData.map((project, index) => {
                        if (index == current) 
                        {
                            if (current == previous)
                                return (
                                    <div key={index}>
                                        <ProjectCard project={project} />
                                    </div>
                                )
                            else
                                return (
                                    <>
                                        <motion.div 
                                            key={index}
                                            initial="hidden"
                                            animate="visible"
                                            variants={moveLeft ? variantsLeft : variantsRight}  
                                            className="absolute"
                                        >
                                            <ProjectCard project={project} />
                                        </motion.div>
                                        <motion.div 
                                            key={index + 1}
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

                    <motion.div 
                      className='absolute left-0 cursor-pointer'
                      onClick={handlePrevious}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={variants}
                    >
                        <BsChevronCompactLeft className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-30 hover:opacity-90" />
                    </motion.div>
                    <motion.div 
                      className='absolute right-0 cursor-pointer' 
                      onClick={handleNext}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={variants}
                    >
                        <BsChevronCompactRight className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-30 hover:opacity-90" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Projects
