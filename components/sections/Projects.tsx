import React, { useState } from 'react'
import ProjectCard from '../ProjectCard'
import { ProjectData } from '../data/ProjectData'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../../languages/projects'
import { AiOutlineClose } from 'react-icons/ai'

const variants = {
    hidden: {
        x: -200,
        opacity: 0.5,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.6,
        }
    }
}

type Props = {
    content: any
}

const Projects = ({ content }: Props) => {
    const [selected, setSelected] = useState<number>(-1);

    return (
        <div className="sectionStyle">
            <div className="sectionContent">
                <p className="sectionHead">{content.head}</p>
                <h3 className="sectionTitle">{content.title}</h3>
                <div className='pt-4'>
                    {ProjectData?.map((project, index) => (
                        <motion.div
                          key={index}
                          layoutId={project.id}
                          initial='hidden'
                          whileInView='visible'
                          viewport={{ once: false }}
                          variants={variants}
                          onClick={() => setSelected(index)}
                        >
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {selected >= 0 && (
                <div className="fixed z-[10] top-0 left-0 right-0 h-screen bg-black/50 flex justify-center items-center">
                    <AnimatePresence initial={false}>
                        {selected >= 0 && (
                            <motion.div 
                            layoutId={ProjectData[selected].id}
                            className='relative w-[95%] md:w-[90%] max-w-[1440px] p-4 rounded-xl dark:bg-dark-primary'
                            >
                                <h2>{ProjectData[selected].name}</h2>
                                <div className='absolute top-2 right-2 p-2 rounded-full hover:dark:bg-black/40 cursor-pointer' onClick={() => setSelected(-1)}>
                                    <AiOutlineClose size={20} className="w-4 h-4 md:w-6 md:h-6" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

        </div>
    )
}

export default Projects