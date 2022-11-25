import React from 'react'
import Image from 'next/image'
import { SkillData } from './data/SkillData'
import { BsGithub, BsEye } from 'react-icons/bs'
import { useAppContext } from '../context/AppContext'

type Props = {
    project: any,
    index: number
}

const ProjectCard = ({ project, index }: Props) => {
    let { language } = useAppContext();

    const projectContent = project?.content.get(language) === undefined ? project?.content.get('en') : project.content.get(language);

    return (
        <div className='md:w-full sm:w-[75%] w-full m-auto grid md:grid-cols-10 my-4 lg:mb-8'>
            <div className='block md:hidden'>
                <Image
                    src={project.images[0]}
                    alt={project.name}
                    width={1920}
                    height={1080}
                    className="rounded-t-lg object-cover object-left-top"
                />
            </div>
            {index % 2 === 0 && (
                <div className='md:col-span-4 hidden md:block mr-4'>
                    <img
                        src={project.images[0]}
                        alt={project.name}
                        className="h-full w-full rounded-lg object-cover object-left-top"
                    />
                </div>
            )}
            <div className='md:col-span-6 relative flex flex-col justify-between bg-light-secondary dark:bg-dark-primary rounded-b-lg md:rounded-lg'>
                <div>
                    <div className='w-[75%] m-auto flex justify-evenly items-center py-2 border-b-2 border-dark-500'>
                        {SkillData.filter(skill => project.skills.includes(skill.name)).map(skill => (
                            <div className='group flex flex-col justify-center items-center'>
                                <Image
                                    src={skill.image}
                                    alt={skill.name}
                                    width={60}
                                    height={60}
                                    className="w-7"
                                />
                                <p className='absolute pt-14 hidden group-hover:block text-center'>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className='px-4 py-2'>
                        {projectContent.description}
                    </div>
                </div>
                <div className='px-4 py-4 flex'>
                    <a 
                      target="_blank" 
                      href={project.liveURL} 
                      className="flex dark:bg-dark-theme/30 hover:dark:bg-dark-theme/75 px-2 py-1 mr-4 rounded"
                      onClick={event => event.stopPropagation()}
                    >
                        <BsEye className='h-5 w-4 mr-1' /><p className='text-sm'>Live Demo</p>
                    </a>
                    <a 
                      target="_blank" 
                      href={project.githubURL} 
                      className="flex dark:bg-dark-theme/30 hover:dark:bg-dark-theme/75 px-2 py-1 rounded"
                      onClick={event => event.stopPropagation()}
                    >
                        <BsGithub className='h-5 w-4 mr-1' /><p className='text-sm'>Code</p>
                    </a>
                </div>
            </div>
            {index % 2 !== 0 && (
                <div className='md:col-span-4 hidden md:block ml-4'>
                    <img
                        src={project.images[0]}
                        alt={project.name}
                        width={1080}
                        height={720}
                        className="hidden md:block h-full w-full rounded-lg object-cover object-left-top"
                    />
                </div>)}
            </div>
    )
}

export default ProjectCard
