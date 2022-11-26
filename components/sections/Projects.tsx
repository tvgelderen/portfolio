import React, { useState } from 'react'
import Image from 'next/image'
import ProjectCard from '../ProjectCard'
import { ProjectData } from '../data/ProjectData'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

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

type Project = {
    id: string,
    name: string,
    images: string[],
    githubURL: string,
    liveURL: string,
    skills: string[],
    content: Map<string, {}>,
}

const Projects = ({ content }: Props) => {
    const [selected, setSelected] = useState<Project | null>(null);
    const [[current, direction], setCurrent] = useState<number[]>([0, 0]);

    const handleUpdate = (idx: number, dir: number) => {
        if (idx + dir === selected?.images.length)
            return 0;
        if (idx + dir < 0 && selected?.images.length)
            return selected?.images.length - 1;
        
        return idx + dir;
    }

    const updateCurrent = (newDirection: number) => {
        setCurrent([handleUpdate(current, newDirection), newDirection]);
    };

    return (
        <div className="sectionStyle">
            <div className="sectionContent">
                <p className="sectionHead">{content.head}</p>
                <h3 className="sectionTitle">{content.title}</h3>
                <div className='md:w-full sm:w-[75%] w-full m-auto pt-4'>
                    {ProjectData?.map((project, index) => (
                        <motion.div
                          key={index}
                          layoutId={project.id}
                          initial='hidden'
                          whileInView='visible'
                          viewport={{ once: true }}
                          variants={variants}
                          onClick={() => setSelected(project)}
                        >
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {selected !== null && (
                <div className="fixed z-[10] top-0 left-0 right-0 h-screen bg-black/50 flex justify-center items-center">
                    <AnimatePresence initial={false}>
                        {selected !== null && (
                            <motion.div 
                              layoutId={selected.id}
                              className='absolute w-[95%] md:w-[90%] max-w-[1440px] p-4 rounded-xl bg-light-primary dark:bg-dark-primary'
                            >
                                <div className='border-b-2 pb-4 mb-4 dark:border-dark-600'>
                                    <h2>{selected.name}</h2>
                                    <div className='absolute top-2 right-2 p-2 rounded-full hover:dark:bg-black/40 cursor-pointer' onClick={() => {
                                      setSelected(null);
                                      setCurrent([0, 0]);
                                    }}>
                                        <AiOutlineClose size={20} className="w-5 h-5 lg:w-7 lg:h-7" />
                                    </div>
                                </div>
                                <div className='relative max-w-[900px] overflow-hidden'>
                                        <div>
                                            <Image
                                              src={selected.images[current]}
                                              alt=''
                                              width={1920}
                                              height={1080}
                                              className=''
                                            />
                                        </div>
                                    {selected.images.length > 1 && (
                                        <>
                                        <div className='z-[10] absolute left-1 top-[45%] p-1 rounded-full bg-black/30 cursor-pointer' onClick={() => updateCurrent(-1)}>
                                            <BsChevronCompactLeft className='w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12' />
                                        </div>
                                        <div className='z-[10] absolute right-1 top-[45%] p-1 rounded-full bg-black/30 cursor-pointer' onClick={() => updateCurrent(1)}>
                                            <BsChevronCompactRight className='w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12' />
                                        </div>
                                        </>
                                    )}
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