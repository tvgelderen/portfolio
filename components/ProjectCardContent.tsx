import React from 'react'
import { BsEye, BsGithub } from 'react-icons/bs'
import { SkillData } from './data/SkillData'

type Props = {
    project: any,
    projectContent: any
}

const ProjectCardContent = ({ project, projectContent }: Props) => {
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

export default ProjectCardContent