import React, { useState, useEffect } from 'react'
import ProjectCard from '../ProjectCard'
import { ProjectData } from '../data/ProjectData'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import Carousel from '../Carousel'
import { useAppContext } from '../../context/AppContext'
import { SkillData } from '../data/SkillData'
import Image from 'next/image'

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
    content: Map<string, { brief_description: string, description: string }>,
}

const Projects = ({ content }: Props) => {
    const [selected, setSelected] = useState<Project | null>(null);
    
    let { language } = useAppContext();

    const projectContent = selected?.content.get(language || 'en');

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

    return (
        <div className="sectionUneven">
            <div className="projects">
                <p className="sectionHead">{content.head}</p>
                <h3 className="sectionTitle">{content.title}</h3>
                <div className='lg:w-full md:w-[65%] sm:w-[75%] w-[full] m-auto pt-4'>
                    {ProjectData?.map((project, index) => (
                        <motion.div 
                          key={index} 
                          layoutId={project.id} 
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
                              className='absolute w-[98%] md:w-[95%] max-w-[1440px] p-4 rounded-xl bg-light-primary dark:bg-dark-background overflow-x-hidden overflow-y-scroll scrollbar-none'
                            >
                                <div className='border-b-2 pb-2 mb-2 md:pb-4 md:mb-4 dark:border-dark-600'>
                                    <h2>{selected.name}</h2>
                                    <div 
                                      className='absolute top-2 right-2 p-2 rounded-full hover:dark:bg-black/40 cursor-pointer' 
                                      onClick={() => setSelected(null)}
                                    >
                                        <AiOutlineClose size={20} className="w-5 h-5 lg:w-7 lg:h-7" />
                                    </div>
                                </div>
                                
                                <Carousel images={selected.images} />

                                <div className='pt-2 mt-2 md:pt-4 md:mt-4 border-t-2 dark:border-dark-600'>
                                    <div className='grid lg:grid-cols-4'>
                                        <div className='lg:hidden w-[90%] sm:w-[70%] m-auto flex flex-row justify-evenly items-center pb-2 md:pb-4 border-b-2 dark:border-dark-600'>
                                            {SkillData.filter(skill => selected.skills.includes(skill.name)).map(skill => (
                                                <div key={skill.name} className='flex justify-center items-center group'>
                                                    <Image
                                                      src={skill.image}
                                                      alt={skill.name}
                                                      width={60}
                                                      height={60}
                                                      className={`${skill.name === 'Firebase' ? 'w-4 h-6 sm:w-5 sm:h-7 md:w-6 md:h-8' : 'w-6 sm:w-7 md:w-8'}`}
                                                    />
                                                    <p className='text-sm sm:text-base absolute mt-16 md:mt-[70px] px-1 md:px-2 md:py-1 rounded-lg bg-black/90 hidden group-hover:block'>{skill.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='lg:col-span-3'>

                                        </div>
                                        <div className='hidden lg:block'>
                                            {SkillData.filter(skill => selected.skills.includes(skill.name)).map(skill => (
                                                <div key={skill.name} className='flex flex-col justify-center items-center py-4'>
                                                    <Image
                                                      src={skill.image}
                                                      alt={skill.name}
                                                      width={60}
                                                      height={60}
                                                      className={`${skill.name === 'Firebase' ? 'w-4 h-6 sm:w-5 sm:h-7 md:w-6 md:h-8' : 'w-6 sm:w-7 md:w-8'}`}
                                                      title={skill.name}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {projectContent?.description}
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