import React from 'react'
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

    const shadow = 'shadow-lg shadow-black/20'

    return (
        <div className='grid lg:grid-cols-10 my-4 lg:mb-8 cursor-pointer'>
            <div className='lg:hidden'>
                <img
                  src={project.images[0]}
                  alt={project.name}
                  width={1920}
                  height={1080}
                  className='rounded-t-lg object-cover object-left-top'
                />
            </div>
            {index % 2 === 0 && (
                <div className='lg:col-span-4 hidden lg:block mr-4'>
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className={`h-full w-full rounded-lg object-cover object-left-top ${shadow}`}
                    />
                </div>
            )}
            <div className={`lg:col-span-6 relative flex flex-col justify-between bg-light-secondary dark:bg-dark-secondary rounded-b-lg lg:rounded-lg ${shadow}`}>
                <div>
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
                </div>
                <div className='px-4 py-4 flex'>
                    <a 
                      target="_blank" 
                      href={project.liveURL} 
                      className="flex bg-gradient-to-r from-[#7b2ff7]/30 to-[#f107a3]/30 hover:from-[#7b2ff7]/75 hover:to-[#f107a3]/75 px-2 py-1 lg:px-[10px] lg:py-[6px] mr-4 rounded"
                      onClick={event => event.stopPropagation()}
                    >
                        <BsEye className='h-5 w-4 mr-1' /><p className='text-sm'>&nbsp;Live Demo</p>
                    </a>
                    <a 
                      target="_blank" 
                      href={project.githubURL} 
                      className="flex bg-gradient-to-r from-[#7b2ff7]/30 to-[#f107a3]/30 hover:from-[#7b2ff7]/75 hover:to-[#f107a3]/75 px-2 py-1 lg:px-[10px] lg:py-[6px] rounded"
                      onClick={event => event.stopPropagation()}
                    >
                        <BsGithub className='h-5 w-4 mr-1' /><p className='text-sm'>&nbsp;Code</p>
                    </a>
                </div>
            </div>
            {index % 2 !== 0 && (
                <div className='lg:col-span-4 hidden lg:block ml-4'>
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      width={1080}
                      height={720}
                      className={`hidden md:block h-full w-full rounded-lg object-cover object-left-top ${shadow}`}
                    />
                </div>
            )}
            </div>
    )
}

export default ProjectCard
