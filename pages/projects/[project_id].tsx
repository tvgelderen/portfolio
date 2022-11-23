import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ProjectData } from '../../components/data/ProjectData'
import { motion, Variants } from 'framer-motion'
import { useAppContext } from '../../context/AppContext'
import Image from 'next/image'
import useWindowDimensions from '../../components/hooks/useWindowWidth'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Project = () => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [previousImage, setPreviousImage] = useState<number>(0);

    const { setLogo } = useAppContext();
    setLogo('/img/logos/logo_purple.png');

    const router = useRouter();
    const { project_id } = router.query;

    const project = ProjectData.find(item => item.id === project_id);
    const length = project?.images.length !== undefined ? project?.images.length : 0;

    const handleNext = () => {
        setCurrentImage(currentImage + 1 === length ? 0 : currentImage + 1);
    }

    const handlePrevious = () => {
        setCurrentImage(currentImage - 1 < 0 ? length - 1 : currentImage - 1);
    }

    const variants = {hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75 } }}

    return (
        <div>
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="img/icons/favicon.ico" />
            </Head>

            <div className='relative h-full mt-[64px] max-w-[1200px] w-[95%] md:w-[90%] m-auto pt-[10px] md:pt-[14px] pb-2 md:pb-4 lg:pb-6 px-2 md:px-4 lg:px-6'>
                <div className='p-1 sm:p-2 md:p-4 border-b-2 dark:border-dark-500'>
                    <h2>{project?.name}</h2>
                </div>
                <div className='w-[90%] h-[600px] m-auto flex justify-center items-center pt-2 md:pt-4'>
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
                                        className="h-[600px] w-full object-cover object-center"
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
            </div>
        </div>
    )
}

export default Project;