import React from 'react'
import { SkillData } from './data/SkillData'
import { BsGithub, BsEye } from 'react-icons/bs'
import { useAppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import useWindowDimensions from './hooks/useWindowWidth'

type Props = {
    project: any,
    index: number
}

const imgVariants = {
    hidden: ({ width, isEven }: { width: number, isEven: boolean }) => {
        return {
            x: isEven ? -width / 2 : width / 2
        }
    },
    visible: {
        x: 0,
        transition: { duration: 2 }
    }
}

const descriptionVariants = {
    hidden: ({ width, isEven }: { width: number, isEven: boolean }) => {
        return {
            x: isEven ? width / 2 : -width / 2
        }
    },
    visible: {
        x: 0,
        transition: { duration: 2 }
    }
}

const ProjectCard = ({ project, index }: Props) => {
    let { width } = useWindowDimensions();
    let { language } = useAppContext();

    const projectContent = project?.content.get(language) === undefined ? project?.content.get('en') : project.content.get(language);

    const isEven = index % 2 === 0;

    const Content = () => {
        return (
            <>
                <div className='w-[75%] m-auto flex justify-evenly items-center py-2 border-b-2 border-dark-500'>
                    {SkillData.filter(skill => project.skills.includes(skill.name)).map(skill => (
                        <div key={skill.name} className='flex flex-col justify-center items-center'>
                            <img
                                src={skill.image}
                                alt={skill.name}
                                width={60}
                                height={60}
                                className="w-7 lg:w-8"
                            />
                        </div>
                    ))}
                </div>
                <div className='px-4 py-2'>
                    {projectContent.brief_description}
                </div>
                <div className='px-4 py-4 flex'>
                    <a 
                      target="_blank" 
                      href={project.liveURL} 
                      className="button px-2 py-1 md:px-[12px] md:py-[6px] mr-4 rounded"
                      onClick={event => event.stopPropagation()}
                    >
                        <BsEye className='h-5 w-4 mr-1' /><p className='text-sm'>&nbsp;Live Demo</p>
                    </a>
                    <a 
                      target="_blank" 
                      href={project.githubURL} 
                      className="button px-2 py-1 md:px-[12px] md:py-[6px] rounded"
                      onClick={event => event.stopPropagation()}
                    >
                        <BsGithub className='h-5 w-4 mr-1' /><p className='text-sm'>&nbsp;Code</p>
                    </a>
                </div>
            </>
        )
    }

    return (
        <div className={`${isEven ? 'card-even' : 'card-uneven'}`}>
            {/* Card for screens md and smaller */}
            <motion.div
              custom={{width, isEven}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imgVariants}
              className='lg:hidden'
            >
                <img
                  src={project.images[0]}
                  alt={project.name}
                  width={1920}
                  height={1080}
                  className={`rounded object-cover object-left-top lg:w-[60%] ${isEven ? 'sm-card-img-even lg:card-img' : 'sm-card-img-uneven lg:card-img lg:card-img-uneven'}`}
                />
            </motion.div>
            <motion.div 
              className={`lg:hidden ${isEven ? 'sm-card-description-even' : 'sm-card-description-uneven'}`}
              custom={{width, isEven}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={descriptionVariants}
            >
                {Content()}
            </motion.div>

            {/* Card for larger screens */}
            <img
              src={project.images[0]}
              alt={project.name}
              width={1920}
              height={1080}
              className={`hidden lg:block rounded object-cover object-left-top lg:w-[60%] ${isEven ? 'sm-card-img-even lg:card-img' : 'sm-card-img-uneven lg:card-img lg:card-img-uneven'}`}
            />
            <div className={`hidden lg:block ${isEven ? 'lg:card-description-even' : 'lg:card-description-uneven'}`}>
                {Content()}
            </div>
        </div>
    )
}

export default ProjectCard
