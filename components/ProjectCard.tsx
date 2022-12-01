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

    const shadow = 'shadow-lg shadow-black/20';
    const isEven = index % 2 === 0;

    return (
        <div className={`${isEven ? 'card-img-even' : 'card-img-uneven'}`}>
            <img
                src={project.images[0]}
                alt={project.name}
                width={1920}
                height={1080}
                className='rounded object-cover object-left-top w-[60%]'
            />
            <div className={`${isEven ? 'card-description-even' : 'card-description-uneven'}`}>
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
                    {project?.content.get('en')?.brief_description}
                </div>
                <div className='px-4 py-4 flex'>
                    <a 
                      target="_blank" 
                      href={project.liveURL} 
                      className="button px-2 py-1 lg:px-[10px] lg:py-[6px] mr-4 rounded"
                      onClick={event => event.stopPropagation()}
                    >
                        <BsEye className='h-5 w-4 mr-1' /><p className='text-sm'>&nbsp;Live Demo</p>
                    </a>
                    <a 
                      target="_blank" 
                      href={project.githubURL} 
                      className="button px-2 py-1 lg:px-[10px] lg:py-[6px] rounded"
                      onClick={event => event.stopPropagation()}
                    >
                        <BsGithub className='h-5 w-4 mr-1' /><p className='text-sm'>&nbsp;Code</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
