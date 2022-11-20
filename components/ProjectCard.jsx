import Image from 'next/image'
import React from 'react'
import { SkillData } from './data/SkillData'

const ProjectCard = ({ project }) => {
    const projectSkills = SkillData.filter(skill => project.skills.includes(skill.name))

    return (
        <div className='w-[88%] max-w-[850px] m-auto hover:scale-110 shadow-lg shadow-[#121212] duration-300 rounded-lg bg-primary'>
            <Image
              src={project.images[0]}
              alt={project.name}
              width={2560}
              height={1440}
              className="w-full h-full object-cover object-center rounded-t-lg"
            />
            <div className='p-4'>
                <div className='w-full flex justify-evenly pb-4 border-b-2 border-dark-600'>
                    {projectSkills.map(skill => (
                        <div key={skill.name} className='h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] hover:scale-110 duration-200'>
                            <Image
                              src={skill.image}
                              alt={skill.name}
                              width={50}
                              height={50}
                              className="h-full w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
                <div className='py-4'>
                    <h3>{project.name}</h3>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard
