import React from 'react'
import Image from 'next/image'
import { SkillData } from './data/SkillData'

// NICE pruple threads: https://www.pixel4k.com/wp-content/uploads/2020/08/purple-threads-abstract_1596927843.jpg
// Minimal green flying binary: https://images2.alphacoders.com/922/922574.jpg

type Props = {
    project: any
}

const ProjectCard = ({ project }: Props) => {
    const projectSkills = SkillData.filter(skill => project.skills.includes(skill.name));

    return (
        <div className='w-[88%] max-w-[850px] m-auto shadow-md dark:shadow-dark-900 duration-300 rounded-lg dark:bg-dark-primary'>
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
                <div className='py-4 w-full sm:w-[90%] md:w-[75%] m-auto'>
                    <h3 className='text-center'>{project.name}</h3>
                    <p className='text-justify'>{project.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
