import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ProjectData } from '../../components/data/ProjectData'
import { motion } from 'framer-motion'
import { useAppContext } from '../../context/AppContext'
import Image from 'next/image'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { SkillData } from '../../components/data/SkillData'
import { projects } from '../../languages/projects'

const Project = () => {
    const [currentImage, setCurrentImage] = useState<number>(0);

    let { language, setLogo } = useAppContext();
    setLogo('/img/logos/logo_purple.png');

    const router = useRouter();
    const { project_id } = router.query;

    const project = ProjectData.find(item => item.id === project_id);
    const projectSkills = SkillData.filter(skill => project?.skills.includes(skill.name));

    if (language === null)
        language = 'en'

    const content = projects.get(language) === undefined ? projects?.get('en') : projects.get(language);
    const projectContent = project?.content.get(language) === undefined ? project?.content.get('en') : project.content.get(language);

    const length = project?.images.length !== undefined ? project?.images.length : 0;

    const handleNext = () => {
        setCurrentImage(currentImage + 1 === length ? 0 : currentImage + 1);
    }

    const handlePrevious = () => {
        setCurrentImage(currentImage - 1 < 0 ? length - 1 : currentImage - 1);
    }

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.75 } }
    }

    return (
        <div>
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="img/icons/favicon.ico" />
            </Head>

            <div className='relative h-full mt-[64px] max-w-[1280px] w-[95%] md:w-[90%] m-auto pt-[10px] md:pt-[14px] pb-2 md:pb-4 lg:pb-6 px-2 md:px-4 lg:px-6'>
                <div className='p-1 sm:p-2 md:p-4 border-b-2 dark:border-dark-600'>
                    <h2>{project?.name}</h2>
                </div>
                <div className='w-[90%] m-auto flex justify-center items-center pt-2 md:pt-4'>
                    {project?.images.map((image, index) => {
                        if (currentImage === index)
                            return (
                                <motion.div 
                                  key={currentImage}
                                  initial="hidden"
                                  animate="visible"
                                  variants={variants}
                                >
                                    <Image
                                      src={image}
                                      alt=""
                                      width={1920}
                                      height={1080}
                                      className="object-cover object-top"
                                    />
                                </motion.div>
                            )
                    })}

                    {length > 1 && (
                        <>
                            <div 
                              className='absolute left-0 cursor-pointer'
                              onClick={handlePrevious}
                            >
                                <BsChevronCompactLeft className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-30 hover:opacity-90" />
                            </div>
                            <div 
                              className='absolute right-0 cursor-pointer' 
                              onClick={handleNext}
                            >
                                <BsChevronCompactRight className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-30 hover:opacity-90" />
                            </div>
                        </>
                    )}
                </div>

                <div className='w-[75%] m-auto lg:hidden p-4 lg:p-8'>
                    <div className='pb-4 flex justify-evenly items-center border-b-2 dark:border-dark-600'>
                        {projectSkills.map(skill => (
                            <div>
                                <Image
                                  src={skill.image}
                                  alt={skill.name}
                                  width={60}
                                  height={60}
                                  className="w-8 h-8 sm:w-10 sm:h-10"
                                />
                            </div>
                        ))}
                    </div>
                    <div className='p-4'>
                        <p className='text-lg sm:text-xl md:text-2xl font-semibold'>{content?.project}</p>
                    </div>
                </div>
                <div className='hidden lg:grid lg:grid-cols-4 p-4 lg:p-8'>
                    <div className='col-span-3'>
                        <p className='text-xl xl:text-2xl font-semibold'>{content?.project}</p>
                        <p></p>
                    </div>
                    <div className='border-l-2 dark:border-dark-600 flex flex-col justify-center items-center'>
                        <p className='text-center text-xl xl:text-2xl font-semibold'>{content?.technologies}</p>
                        <div className='grid grid-cols-2 py-2'>
                            {projectSkills.map(skill => (
                                <div className='p-4'>
                                    <Image
                                      src={skill.image}
                                      alt={skill.name}
                                      width={60}
                                      height={60}
                                      className="w-10 h-10 xl:w-12 xl:h-12"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;